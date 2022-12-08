import { Component, ElementRef, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import * as UserActions from "./state/user.action";
import {
  getCurrentUser,
  getError,
  getLoginError,
  getShowMaskUsername,
  RootState
} from "./state/user.reducer";
import { User } from "./user";
@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit, OnDestroy {
  pageTitle = "Log In";
  users$: Observable<User>;
  maskUserName$: Observable<boolean>;
  errorLoginMessage$: Observable<string>;
  errorMessage$: Observable<string>;
  currentUser: User;
  subs: Subscription;

  constructor(
    private elementRef: ElementRef,
    private store: Store<RootState>,
    private router: Router
  ) {
    //this.el = ref.nativeElement
  }

  ngOnInit(): void {
    this.subs = this.store
      .select(getCurrentUser)
      .pipe(
        map((data) => {
          this.currentUser = data;
        })
      )
      .subscribe();

    this.errorLoginMessage$ = this.store.select(getLoginError);
    this.errorMessage$ = this.store.select(getError);
    this.maskUserName$ = this.store.select(getShowMaskUsername);

    this.addEventListner("#passwordId");
    this.addEventListner("#userNameId");
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs.unsubscribe;
    this.addEventListner;
  }

  addEventListner(element: string) {
    this.elementRef.nativeElement
      .querySelector(element)
      .addEventListener("focus", () => {
        this.store.dispatch(UserActions.clearError());
      });
  }

  clear(loginForm: NgForm): void {
    loginForm.reset();
    this.store.dispatch(UserActions.clearError());
  }

  checkChanged(): void {
    //this.maskUserName = !this.maskUserName;
    this.store.dispatch(UserActions.toggleMaskUsername());
  }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const user = loginForm.form.value.username;
      const pass = loginForm.form.value.password;

      this.store.dispatch(
        UserActions.loginUser({ username: user, password: pass })
      );

      setTimeout(() => {
        
        this.router.navigate(["/welcome"]);
      }, 500);
    }
  }
  loginSupport() {
    this.store.dispatch(
      UserActions.loginUser({ username: "cyberron", password: "cc0unt3rs" })
    );

    setTimeout(() => {
      
      this.router.navigate(["/welcome"]);
    }, 500);
  }
  loginClient() {
    this.store.dispatch(
      UserActions.loginUser({ username: "jayem", password: "cc0unt3rs" })
    );

    setTimeout(() => {
      
      this.router.navigate(["/welcome"]);
    }, 500);
  }
}
