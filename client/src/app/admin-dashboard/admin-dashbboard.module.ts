import { UsersComponent } from "./components/users/users.component";
import { UploadComponent } from "./components/upload/upload.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { CollectionsComponent } from "./components/collections/collections.component";
import { AdminDashboardComponent } from "./admin-dashboard.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { adminDashboardRouting } from "./admin-dashboard.routing";

@NgModule({
  declarations: [
    AdminDashboardComponent,
    DashboardComponent,
    CollectionsComponent,
    SidebarComponent,
    UploadComponent,
    UsersComponent
  ],
  imports: [CommonModule, adminDashboardRouting]
})
export class AdminDashbboardModule {}
