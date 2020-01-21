import { HttpClientService } from "./http-client.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AdminAPIService {
  constructor(private httpClientService: HttpClientService) {}

  imageUpload(filesToUpload: Array<File>) {
    const formData: FormData = new FormData();
    const files: Array<File> = filesToUpload;
    console.log("Files:", files);

    for (let i = 0; i < files.length; i++) {
      formData.append("uploadInput", files[i], files[i]["name"]);
    }

    this.httpClientService.uploadImage(formData);
  }

  getUnpublishedImages() {
    return this.httpClientService.unpublishedImages();
  }
}
