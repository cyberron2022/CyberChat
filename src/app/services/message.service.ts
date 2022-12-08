import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";

import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "./auth.service";

import { IMessage } from "../messages/message";

@Injectable({
  providedIn: "root",
})
export class MessageService implements OnInit {
  //private requestUrl = "http://localhost:5084/api/message";
  private requestUrl = "https://cyberron.somee.com/api/message";

  constructor(private http: HttpClient, private authService: AuthService) {}
  ngOnInit(): void {}

  getAcceptedMessage(): Observable<IMessage[]> {
    return this.http
      .post<IMessage[]>(this.requestUrl + "/allacceptedrequest", {
        token: this.authService.appToken,
        userId: this.authService.currentUserId,
        userType: this.authService.userType,
      })
      .pipe(catchError(this.handleError));
  }

  getMessages(request_id: number): Observable<IMessage[]> {
    return this.http
      .post<IMessage[]>(this.requestUrl + "/getmessages", {
        userType: this.authService.userType,
        requestId: request_id,
        token: this.authService.appToken,
        userId: this.authService.currentUserId,
      })
      .pipe(catchError(this.handleError));
  }

  savingMessage(action: {
    request_id: number;
    message: string;
  }): Observable<IMessage[]> {
    return this.http
      .post<IMessage[]>(this.requestUrl + "/savemessage", {
        requestId: action.request_id,
        userId: this.authService.currentUserId,
        userType: this.authService.userType,
        message: action.message,
        token: this.authService.appToken,
      })
      .pipe(catchError(this.handleError));
  }

  // updateMessage(message: IMessage): Observable<IMessage> {
  //   return this.http
  //     .post<IMessage>(this.requestUrl + "/update", {
  //       id: message.id,
  //       token: this.authService.appToken,
  //       client_id: this.authService.currentUserId,
  //       title: message.title,
  //       message: message.message,
  //     })
  //     .pipe(catchError(this.handleError));
  // }
  // createMessage(message: IMessage): Observable<IMessage> {
  //   return this.http
  //     .post<IMessage>(this.requestUrl + "/create", {
  //       token: this.authService.appToken,
  //       client_id: this.authService.currentUserId,
  //       title: message.title,
  //       message: message.message,
  //     })
  //     .pipe(catchError(this.handleError));
  // }
  // deleteMessage(message: IMessage): Observable<any> {
  //   return this.http
  //     .post<any>(this.requestUrl + "/delete", {
  //       id: message.id,
  //       token: this.authService.appToken,
  //     })
  //     .pipe(catchError(this.handleError));
  // }
  // acceptMessage(id: number): Observable<IMessage> {
  //   console.log(id);
  //   return this.http
  //     .post<IMessage>(this.requestUrl + "/accept", {
  //       request_id: id,
  //       user_id: this.authService.currentUserId,
  //       token: this.authService.appToken,
  //     })
  //     .pipe(
  //       //tap((data) => console.log(data)),
  //       catchError(this.handleError)
  //     );
  // }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
