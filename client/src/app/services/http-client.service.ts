import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}

  uploadImage(data: FormData) {
    this.httpClient
      .post(`http://localhost:3000/api/v2/adminrouter/imageupload`, data)
      .subscribe(res => {
        console.log(res);
        alert("upload success!!");
      });
  }

  unpublishedImages() {
    return this.httpClient.get(
      `http://localhost:3000/api/v2/adminrouter/imageupload`
    );
  }
}
