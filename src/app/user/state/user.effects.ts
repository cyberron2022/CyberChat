import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map, mergeMap } from "rxjs/operators";
import { AuthService } from "../../services/auth.service";
import * as UserActions from "../state/user.action";

@Injectable({
  providedIn: "root",
})
export class UserEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.authService.getUsers().pipe(
          map((resultUsers) =>
            UserActions.loadUsersSuccess({ users: resultUsers })
          ),
          catchError((err) => of(UserActions.loadUsersFailure({ error: err })))
        )
      )
    );
  });
  loginUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loginUser),
      concatMap((action) =>
        this.authService.login(action.username, action.password).pipe(
          map((resultUser) =>
            resultUser[0].status === "failed"
              ? UserActions.loginUserFailure({
                  error: resultUser[0].message,
                })
              : UserActions.loginUserSuccess({ users: resultUser })
          ),
          catchError((err) => of(UserActions.loginUserFailure({ error: err })))
        )
      )
    );
  });
  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.updateProfile),
      concatMap((action) =>
        this.authService.updateProfile(action.users).pipe(
          map((resultProducts) =>
            UserActions.updateProfileSuccess({ users: resultProducts })
          ),
          catchError((err) =>
            of(UserActions.updateProfileFailure({ error: err }))
          )
        )
      )
    );
  });
}
