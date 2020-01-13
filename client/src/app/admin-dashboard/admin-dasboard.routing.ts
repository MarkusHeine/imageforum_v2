import { Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { UploadComponent } from "./components/upload/upload.component";
import { UsersComponent } from "./components/users/users.component";
import { CollectionsComponent } from "./components/collections/collections.component";

export const AdminDashboardRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "upload", component: UploadComponent },
  { path: "users", component: UsersComponent },
  { path: "collections", component: CollectionsComponent }
];
