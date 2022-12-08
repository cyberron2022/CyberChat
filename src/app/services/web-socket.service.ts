import { Injectable } from "@angular/core";
import { Observable, Observer, Subject } from "rxjs";
import { AnonymousSubject } from "rxjs/internal/Subject";
import { map } from "rxjs/operators";

//const CHAT_URL = "ws://localhost:8080";
const CHAT_URL = "ws://lobster-app-tgcy3.ondigitalocean.app";

export interface IMessageDto {
  user_id: number;
  request_id: number;
  message: string;
}

@Injectable({ providedIn: "root" })
export class WebsocketService {
  private subject?: AnonymousSubject<MessageEvent>;
  public messages: Subject<IMessageDto>;

  constructor() {
    this.messages = <Subject<IMessageDto>>this.connect(CHAT_URL).pipe(
      map((response: MessageEvent): IMessageDto => {
        //console.log(response.data);
        let data = JSON.parse(response.data);
        return data;
      })
    );
  }

  public connect(url: string): AnonymousSubject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log("Successfully connected: " + url);
    }
    return this.subject;
  }

  private create(url: string): AnonymousSubject<MessageEvent> {
    let ws = new WebSocket(url);
    let observable = new Observable((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });
    let observer: any = {
      error: null,
      complete: null,
      next: (data: Object) => {
        console.log("Message sent to websocket: ", data);
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      },
    };
    return new AnonymousSubject<MessageEvent>(observer, observable);
  }
}
