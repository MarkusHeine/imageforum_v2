import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UsersComponent } from "./components/users/users.component";
import { UploadComponent } from "./components/upload-publish/upload/upload.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { CollectionsComponent } from "./components/collections/collections.component";
import { AdminDashboardComponent } from "./admin-dashboard.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { adminDashboardRouting } from "./admin-dashboard.routing";
import { UploadPublishComponent } from "./components/upload-publish/upload-publish.component";
import { PublisherComponent } from "./components/upload-publish/publisher/publisher.component";

@NgModule({
  declarations: [
    AdminDashboardComponent,
    DashboardComponent,
    CollectionsComponent,
    SidebarComponent,
    UploadComponent,
    UsersComponent,
    UploadPublishComponent,
    PublisherComponent
  ],
  imports: [
    CommonModule,
    adminDashboardRouting,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminDashbboardModule {}
