import { UploadPublishComponent } from "./components/upload-publish/upload-publish.component";
import { CollectionsComponent } from "./components/collections/collections.component";
import { UsersComponent } from "./components/users/users.component";
import { UploadComponent } from "./components/upload-publish/upload/upload.component";
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AdminDashboardComponent } from "./admin-dashboard.component";

export const adminDashboardRoutes: Routes = [
  {
    path: "admin",
    component: AdminDashboardComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "upload",
        component: UploadPublishComponent
      },
      {
        path: "users",
        component: UsersComponent
      },
      {
        path: "collections",
        component: CollectionsComponent
      }
    ]
  }
];

export const adminDashboardRouting: ModuleWithProviders = RouterModule.forChild(
  adminDashboardRoutes
);
