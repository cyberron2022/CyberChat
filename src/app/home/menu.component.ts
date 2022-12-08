import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import * as UserActions from "../user/state/user.action";
import {
  getCurrentUser,
  getCurrentUserId,
  RootState,
} from "../user/state/user.reducer";
import { User } from "../user/user";

@Component({
  selector: "pm-menu",
  templateUrl: "./menu.component.html",
})
export class MenuComponent implements OnInit {
  pageTitle = "CyberChat";
  users$: Observable<User>;
  currentUserId$: Observable<number | null>;

  constructor(
    private store: Store<RootState>,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.users$ = this.store.select(getCurrentUser);
    this.currentUserId$ = this.store.select(getCurrentUserId);
  }

  logOut(): void {
    this.authService.logout();
    this.store.dispatch(UserActions.logoutUser());
    this.router.navigate(["/login"]);
  }
}
