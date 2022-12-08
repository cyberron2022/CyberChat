"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MessageService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var MessageService = /** @class */ (function () {
    function MessageService(http, authService) {
        this.http = http;
        this.authService = authService;
        //private requestUrl = "http://localhost:5084/api/message";
        this.requestUrl = "https://cyberron.somee.com/api/message";
    }
    MessageService.prototype.ngOnInit = function () { };
    MessageService.prototype.getAcceptedMessage = function () {
        return this.http
            .post(this.requestUrl + "/allacceptedrequest", {
            token: this.authService.appToken,
            userId: this.authService.currentUserId,
            userType: this.authService.userType
        })
            .pipe(operators_1.catchError(this.handleError));
    };
    MessageService.prototype.getMessages = function (request_id) {
        return this.http
            .post(this.requestUrl + "/getmessages", {
            userType: this.authService.userType,
            requestId: request_id,
            token: this.authService.appToken,
            userId: this.authService.currentUserId
        })
            .pipe(operators_1.catchError(this.handleError));
    };
    MessageService.prototype.savingMessage = function (action) {
        return this.http
            .post(this.requestUrl + "/savemessage", {
            requestId: action.request_id,
            userId: this.authService.currentUserId,
            userType: this.authService.userType,
            message: action.message,
            token: this.authService.appToken
        })
            .pipe(operators_1.catchError(this.handleError));
    };
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
    MessageService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Backend returned code " + err.status + ": " + err.body.error;
        }
        console.error(err);
        return rxjs_1.throwError(errorMessage);
    };
    MessageService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
