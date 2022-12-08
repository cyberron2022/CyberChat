"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var user_reducer_1 = require("../user/state/user.reducer");
var AuthService = /** @class */ (function () {
    function AuthService(http, store) {
        this.http = http;
        this.store = store;
        this.currentUserId = 0;
        // private userUrl = "http://localhost:5084/api/account";
        // private AuthUrl = "http://localhost:5084/api/Auth/login";
        this.userUrl = "https://cyberron.somee.com/api/account";
        this.AuthUrl = "https://cyberron.somee.com/api/Auth/login";
        this.getCurrentID();
        this.getToken();
        this.getUserType();
    }
    AuthService.prototype.isLoggedIn = function () {
        return !!this.currentUser;
    };
    AuthService.prototype.getCurrentID = function () {
        var _this = this;
        this.userSubscription = this.store
            .select(user_reducer_1.getCurrentUserId)
            .pipe(operators_1.map(function (data) {
            _this.currentUserId = data;
        }))
            .subscribe();
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        this.userSubscription = this.store
            .select(user_reducer_1.getCurrentToken)
            .pipe(operators_1.map(function (data) {
            _this.appToken = data;
        }))
            .subscribe();
    };
    AuthService.prototype.getUserType = function () {
        var _this = this;
        this.userSubscription = this.store
            .select(user_reducer_1.getCurrentUserType)
            .pipe(operators_1.map(function (data) {
            _this.userType = data;
        }))
            .subscribe();
    };
    AuthService.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    AuthService.prototype.getUsers = function () {
        // const httpOptions = {
        //   headers: new HttpHeaders(),
        // };
        // httpOptions.headers.append("Access-Control-Allow-Origin", "*");
        // httpOptions.headers.append("Content-Type", "application/json");
        // httpOptions.headers.append(
        //   "Content-Type",
        //   "application/x-www-form-urlencoded; charset=UTF-8"
        // );
        return this.http
            .post(this.userUrl + "/getallaccounts", { token: this.appToken })
            .pipe(
        //tap((data) => console.log(JSON.stringify(data))),
        operators_1.catchError(this.handleError));
    };
    AuthService.prototype.login = function (username, password) {
        return this.http.post(this.AuthUrl, { username: username, password: password }).pipe(
        // tap((data) => {
        //   this.currentUser.push(data)
        // }),
        operators_1.catchError(this.handleError));
        // return this.http.get<User[]>(this.userUrl).pipe(
        //   //tap((data) => console.log(JSON.stringify(data))),
        //   catchError(this.handleError)
        // );
    };
    AuthService.prototype.updateProfile = function (users) {
        var headers = new http_1.HttpHeaders({ "Content-Type": "application/json" });
        var url = this.userUrl + "/" + users.id;
        return this.http.put(url, users, { headers: headers }).pipe(
        //tap(() => console.log('updateProduct: ' + product.id)),
        operators_1.map(function () { return users; }), operators_1.catchError(this.handleError));
    };
    // login(userName: string, password: string): Observable<User[]> {
    //   return this.http.get<User[]>(this.userUrl).pipe(
    //     tap((data) => console.log(JSON.stringify(data))),
    //     //map((data) => this.currentUser = data),
    //     catchError(this.handleError)
    //   );
    // }
    // login(userName: string, password: string): void {
    //   // Code here would log into a back end service
    //   // and return user information
    //   // This is just hard-coded here.
    //   this.currentUser = {
    //     id: 2,
    //     userName,
    //     password,
    //     isAdmin: false,
    //   };
    // }
    AuthService.prototype.logout = function () {
        this.currentUser = null;
    };
    AuthService.prototype.handleError = function (err) {
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
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
