import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientComponent } from "./client/client.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";

const routes: Routes = [
  { path: "", component: ClientComponent },
  {
    path: "admin",
    component: AdminDashboardComponent,
    children: [
      {
        path: "admin",
        loadChildren:
          "./admin-dashboard/admin-dashboard.component#AdminDashboardComponent"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
