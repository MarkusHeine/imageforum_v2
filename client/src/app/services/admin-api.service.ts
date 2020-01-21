import { Metadata } from "./../models/metadata.model";
import { HttpClientService } from "./http-client.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AdminAPIService {
  unpublishedImages: any = [];

  constructor(private httpClientService: HttpClientService) {}

  imageUpload(filesToUpload: Array<File>) {
    const formData: FormData = new FormData();
    const files: Array<File> = filesToUpload;

    for (let i = 0; i < files.length; i++) {
      formData.append("uploadInput", files[i], files[i]["name"]);
    }

    this.httpClientService.uploadImage(formData);
  }

  async getUnpublishedImages() {
    const resp = <Metadata[]>(
      await this.httpClientService.unpublishedImages().toPromise()
    );
    return resp;
  }
}
