import { AdminAPIService } from "../../../../services/admin-api.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.css"]
})
export class UploadComponent implements OnInit {
  filesToUpload: Array<File> = [];

  constructor(private adminAPIService: AdminAPIService) {}

  onUploadFormChange(event: any) {
    this.filesToUpload = <Array<File>>event.target.files;
  }

  onUploadSubmit() {
    this.adminAPIService.imageUpload(this.filesToUpload);
  }

  ngOnInit() {}
}
