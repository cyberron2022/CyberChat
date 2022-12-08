import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { AuthService } from "src/app/services/auth.service";
import { MessageService } from "../../services/message.service";
import { IMessage } from "../message";
import { getAcceptedMessages, getMessages, RootState } from "../state";
import { MessagePageActions } from "../state/actions";

@Component({
  templateUrl: "./message-shell.component.html",
})
export class MessageShellComponent implements OnInit {
  pageTitle = "Chat Box";
  userType: string;
  currentUserId: number;
  requestId: number;

  acceptedMessage$: Observable<IMessage[]>;
  messages$: Observable<IMessage[]>;
  selectedMesssage$: Observable<IMessage>;
  errorMessage$: Observable<string>;

  constructor(
    private store: Store<RootState>,
    private router: Router,
    private auth: AuthService,

    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.userType = this.auth.userType;
    this.currentUserId = this.auth.currentUserId;
    this.store.dispatch(MessagePageActions.loadAcceptedMessage());

    this.acceptedMessage$ = this.store.select(getAcceptedMessages);
  }
  openMessage(request_id: number) {
    this.requestId = request_id;
    this.store.dispatch(
      MessagePageActions.setCurrrentRequest({ currentRequestId: request_id })
    );
    this.store.dispatch(MessagePageActions.loadMessages({ request_id }));
    this.messages$ = this.store.select(getMessages);
  }

  reloadMessage(request_id: number) {
    this.store.dispatch(MessagePageActions.loadMessages({ request_id }));
    this.messages$ = this.store.select(getMessages);
  }
  sendMessage(message: string) {
    this.store.dispatch(
      MessagePageActions.sendMessage({ request_id: this.requestId, message })
    );
  }
}
