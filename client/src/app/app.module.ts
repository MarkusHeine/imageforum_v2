import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { ClientComponent } from "./client/client.component";
import { SidebarComponent } from "./admin-dashboard/components/sidebar/sidebar.component";
import { DashboardComponent } from "./admin-dashboard/components/dashboard/dashboard.component";
import { UploadComponent } from "./admin-dashboard/components/upload/upload.component";
import { UsersComponent } from "./admin-dashboard/components/users/users.component";
import { CollectionsComponent } from "./admin-dashboard/components/collections/collections.component";
import { AdminDashboardRoutes } from "./admin-dashboard/admin-dasboard.routing";

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    ClientComponent,
    SidebarComponent,
    DashboardComponent,
    UploadComponent,
    UsersComponent,
    CollectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    RouterModule.forChild(AdminDashboardRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
