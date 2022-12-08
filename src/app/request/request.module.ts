import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "../shared/shared.module";
import { RequestEditComponent } from "./request-edit/request-edit.component";

import { RequestListComponent } from "./request-list/request-list.component";
import { RequestShellComponent } from "./request-shell/request-shell.component";
import { RequestEffects } from "./state/request.effects";
import { requestReducer } from "./state/request.reducer";

const requestRoutes: Routes = [
  { path: "", component: RequestShellComponent },
  { path: ":id", component: RequestEditComponent },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(requestRoutes),
    StoreModule.forFeature("requests", requestReducer),
    EffectsModule.forFeature([RequestEffects]),
  ],
  declarations: [
    RequestShellComponent,
    RequestListComponent,
    RequestEditComponent,
  ],
})
export class RequestModule {}
