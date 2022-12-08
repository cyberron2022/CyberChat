import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map, mergeMap } from "rxjs/operators";

import { RequestService } from "../../services/request.service";
import { RequestApiActions, RequestPageActions } from "../state/actions/index";
@Injectable({
  providedIn: "root",
})
export class RequestEffects {
  constructor(
    private actions$: Actions,
    private requestService: RequestService
  ) {}

  loadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RequestPageActions.loadRequest),
      mergeMap(() =>
        this.requestService.getRequest().pipe(
          //tap((data) => console.log("Result", data)),
          map((resultRequest) =>
            RequestApiActions.loadRequestSuccess({ requests: resultRequest })
          ),
          catchError((err) =>
            of(RequestApiActions.loadRequestFailure({ error: err }))
          )
        )
      )
    );
  });

  loadPageRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RequestPageActions.loadPageRequest),
      mergeMap((action) =>
        this.requestService
          .getRequestPage({
            page: action.page,
            pageSize: action.pageSize,
            filteredValue: action.filteredValue,
          })
          .pipe(
            //tap((data) => console.log("Result", data)),
            map((resultRequest) =>
              RequestApiActions.loadPageRequestSuccess({ data: resultRequest })
            ),
            catchError((err) =>
              of(RequestApiActions.loadPageRequestFailure({ error: err }))
            )
          )
      )
    );
  });

  updateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RequestPageActions.updateRequest),
      concatMap((action) =>
        this.requestService.updateRequest(action.request).pipe(
          map((resultRequest) =>
            RequestApiActions.updateRequestSuccess({ request: resultRequest })
          ),
          catchError((err) =>
            of(RequestApiActions.updateRequestFailure({ error: err }))
          )
        )
      )
    );
  });
  createRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RequestPageActions.createRequest),
      concatMap((action) =>
        this.requestService.createRequest(action.request).pipe(
          map((resultRequest) =>
            RequestApiActions.createRequestSuccess({ request: resultRequest })
          ),
          catchError((err) =>
            of(RequestApiActions.createRequestFailure({ error: err }))
          )
        )
      )
    );
  });
  deleteRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RequestPageActions.deleteRequest),
      concatMap((action) =>
        this.requestService.deleteRequest(action.request).pipe(
          map((resultRequest) =>
            resultRequest[0].status === "failed"
              ? RequestApiActions.deleteRequestFailure({
                  error: resultRequest[0].message,
                })
              : RequestApiActions.deleteRequestSuccess({
                  request: resultRequest,
                })
          ),
          catchError((err) =>
            of(RequestApiActions.deleteRequestFailure({ error: err }))
          )
        )
      )
    );
  });

  acceptRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RequestPageActions.acceptRequest),
      concatMap((action) =>
        this.requestService.acceptRequest(action.id).pipe(
          map((resultRequest) =>
            RequestApiActions.acceptRequestSuccess({
              request: resultRequest,
            })
          ),
          catchError((err) =>
            of(RequestApiActions.acceptRequestFailure({ error: err }))
          )
        )
      )
    );
  });
}
