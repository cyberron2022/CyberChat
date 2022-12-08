import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserEffects } from './state/user.effects';
import { userReducer } from './state/user.reducer';

const userRoutes: Routes = [{ path: 'login', component: LoginComponent }];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  declarations: [LoginComponent, ProfileComponent],
})
export class UserModule {}
