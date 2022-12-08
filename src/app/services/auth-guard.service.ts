import { Injectable, OnDestroy, OnInit } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { map } from "rxjs/operators";

import { getCurrentUserId } from "../user/state/user.reducer";
import { User } from "../user/user";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate, OnInit, OnDestroy {
  //currentId: number = 0;
  userSubscription: Subscription;
  constructor(
    private store: Store<User>,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.userSubscription.unsubscribe;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkLoggedIn(state.url);
  }

  checkLoggedIn(url: string): boolean {
    let currentId: number;
    this.userSubscription = this.store
      .select(getCurrentUserId)
      .pipe(
        map((data) => {
          currentId = data;
        })
      )
      .subscribe();

    if (currentId !== 0 && currentId !== null) {
      return true;
    } else {
      // Retain the attempted URL for redirection
      this.authService.redirectUrl = url;
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
