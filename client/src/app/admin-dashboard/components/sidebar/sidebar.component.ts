import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "dashboard", title: "Dashboard", icon: "faChartLine", class: "" },
  { path: "upload", title: "Upload & Publish", icon: "", class: "" },
  { path: "users", title: "Users", icon: "", class: "" },
  { path: "collections", title: "Collections", icon: "", class: "" }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
