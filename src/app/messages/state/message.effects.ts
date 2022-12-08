import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map, mergeMap } from "rxjs/operators";

import { MessageService } from "../../services/message.service";
import { MessageApiActions, MessagePageActions } from "./actions/index";
@Injectable({
  providedIn: "root",
})
export class MessageEffects {
  constructor(
    private actions$: Actions,
    private messageService: MessageService
  ) {}

  loadAcceptedMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MessagePageActions.loadAcceptedMessage),
      mergeMap(() =>
        this.messageService.getAcceptedMessage().pipe(
          //tap((data) => console.log("Result", data)),
          map((resultMessage) =>
            MessageApiActions.loadAcceptedMessageSuccess({
              acceptedMessages: resultMessage,
            })
          ),
          catchError((err) =>
            of(MessageApiActions.loadAcceptedMessageFailure({ error: err }))
          )
        )
      )
    );
  });

  loadMessages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MessagePageActions.loadMessages),
      mergeMap((action) =>
        this.messageService.getMessages(action.request_id).pipe(
          //tap((data) => console.log("Result", data)),
          map((resultMessage) =>
            MessageApiActions.loadMessagesSuccess({ messages: resultMessage })
          ),
          catchError((err) =>
            of(MessageApiActions.loadMessagesFailure({ error: err }))
          )
        )
      )
    );
  });

  saveMessages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MessagePageActions.sendMessage),
      concatMap((action) =>
        this.messageService.savingMessage(action).pipe(
          //tap((data) => console.log("Result", data)),
          map((resultMessage) =>
            MessageApiActions.sendMessageSuccess({ messages: resultMessage })
          ),
          catchError((err) =>
            of(MessageApiActions.sendMessageFailure({ error: err }))
          )
        )
      )
    );
  });
  // updateMessage$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(MessagePageActions.updateMessage),
  //     concatMap((action) =>
  //       this.messageService.updateMessage(action.message).pipe(
  //         map((resultMessage) =>
  //           MessageApiActions.updateMessageSuccess({ message: resultMessage })
  //         ),
  //         catchError((err) =>
  //           of(MessageApiActions.updateMessageFailure({ error: err }))
  //         )
  //       )
  //     )
  //   );
  // });
  // createMessage$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(MessagePageActions.createMessage),
  //     concatMap((action) =>
  //       this.messageService.createMessage(action.message).pipe(
  //         map((resultMessage) =>
  //           MessageApiActions.createMessageSuccess({ message: resultMessage })
  //         ),
  //         catchError((err) =>
  //           of(MessageApiActions.createMessageFailure({ error: err }))
  //         )
  //       )
  //     )
  //   );
  // });
  // deleteMessage$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(MessagePageActions.deleteMessage),
  //     concatMap((action) =>
  //       this.messageService.deleteMessage(action.message).pipe(
  //         map((resultMessage) =>
  //           resultMessage[0].status === "failed"
  //             ? MessageApiActions.deleteMessageFailure({
  //                 error: resultMessage[0].message,
  //               })
  //             : MessageApiActions.deleteMessageSuccess({
  //                 message: resultMessage,
  //               })
  //         ),
  //         catchError((err) =>
  //           of(MessageApiActions.deleteMessageFailure({ error: err }))
  //         )
  //       )
  //     )
  //   );
  // });

  // acceptMessage$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(MessagePageActions.acceptMessage),
  //     concatMap((action) =>
  //       this.messageService.acceptMessage(action.id).pipe(
  //         map((resultMessage) =>
  //         MessageApiActions.acceptMessageSuccess({

  //            message: resultMessage,
  //         })
  //         ),
  //         catchError((err) =>
  //           of(MessageApiActions.acceptMessageFailure({ error: err }))
  //         )
  //       )
  //     )
  //   );
  // });
}
