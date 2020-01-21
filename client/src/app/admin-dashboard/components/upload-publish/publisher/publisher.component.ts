import { Metadata } from "./../../../../models/metadata.model";
import { Component, OnInit } from "@angular/core";
import { AdminAPIService } from "src/app/services/admin-api.service";

declare interface UnpublishedImages {
  staticUrl: string;
  metadata: Metadata;
}

@Component({
  selector: "app-publisher",
  templateUrl: "./publisher.component.html",
  styleUrls: ["./publisher.component.css"]
})
export class PublisherComponent implements OnInit {
  constructor(private adminAPIService: AdminAPIService) {}
  unpublishedImages: UnpublishedImages[];

  onPublishSingle(filename: string) {
    console.log("publish single", filename);
  }

  onSaveSingle(filename: string) {
    console.log("save single", filename);
    const singleFile = this.unpublishedImages.find(
      file => file.metadata.FileName === filename
    );
    console.log(singleFile);
  }

  onPublishAll() {
    console.log("publish all");
  }

  async ngOnInit() {
    const metadata = <Metadata[]>(
      await this.adminAPIService.getUnpublishedImages()
    );
    this.unpublishedImages = metadata.map(image => {
      return {
        staticUrl: `http://localhost:3000/static/${image.FileName}`,
        metadata: image
      };
    });
    console.log(this.unpublishedImages);
    return this.unpublishedImages;
  }
}
