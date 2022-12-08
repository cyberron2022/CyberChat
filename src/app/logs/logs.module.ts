import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { LogsShellComponent } from "./logs-shell/logs-shell.component";
// import { ProductEffects } from './state/product.effects';
// import { productReducer } from './state/product.reducer';

const logsRoutes: Routes = [{ path: "", component: LogsShellComponent }];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(logsRoutes),
    // StoreModule.forFeature('products', productReducer),
    // EffectsModule.forFeature([ProductEffects]),
  ],
  declarations: [LogsShellComponent],
})
export class LogsModule {}
