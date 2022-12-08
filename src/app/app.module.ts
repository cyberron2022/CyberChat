import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// Imports for loading & configuring the in-memory web api

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./home/menu.component";
import { PageNotFoundComponent } from "./home/page-not-found.component";
import { ShellComponent } from "./home/shell.component";
import { WelcomeComponent } from "./home/welcome.component";

/* Feature Modules */
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { AuthGuard } from "./services/auth-guard.service";
import { LoggerService } from "./services/logger.service";
import { SharedModule } from "./shared/shared.module";
import { UserModule } from "./user/user.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    //HttpClientInMemoryWebApiModule.forRoot(AppData),
    UserModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      name: "APM Demo App DevTools",
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  declarations: [
    AppComponent,
    ShellComponent,
    MenuComponent,
    WelcomeComponent,
    PageNotFoundComponent,
  ],
  providers: [AuthGuard, LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
