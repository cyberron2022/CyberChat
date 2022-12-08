import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "./services/auth-guard.service";

import { PageNotFoundComponent } from "./home/page-not-found.component";
import { ShellComponent } from "./home/shell.component";
import { WelcomeComponent } from "./home/welcome.component";
import { ProfileComponent } from "./user/profile/profile.component";

const appRoutes: Routes = [
  {
    path: "",
    component: ShellComponent,
    children: [
      { path: "welcome", component: WelcomeComponent },
      {
        path: "request",
        loadChildren: () =>
          import("./request/request.module").then((m) => m.RequestModule),
      },
      {
        path: "message",
        loadChildren: () =>
          import("./messages/message.module").then((m) => m.MessageModule),
      },
      {
        path: "logs",
        loadChildren: () =>
          import("./logs/logs.module").then((m) => m.LogsModule),
      },
      { path: "profile", component: ProfileComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
    ],
    canActivate: [AuthGuard],
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
