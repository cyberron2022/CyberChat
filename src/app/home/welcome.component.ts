import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as UserActions from "../user/state/user.action";
import { RootState } from "../user/state/user.reducer";

@Component({
  templateUrl: "./welcome.component.html",
})
export class WelcomeComponent implements OnInit {
  public pageTitle = "Welcome";
  constructor(private store: Store<RootState>) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.dispatch(UserActions.loadUsers());
  }
}
