"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RequestService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var RequestService = /** @class */ (function () {
    function RequestService(http, authService) {
        this.http = http;
        this.authService = authService;
        //private requestUrl = "http://localhost:5084/api/request";
        this.requestUrl = "https://cyberron.somee.com/api/request";
    }
    RequestService.prototype.ngOnInit = function () { };
    RequestService.prototype.getRequest = function () {
        return this.http
            .post(this.requestUrl, {
            token: this.authService.appToken,
            user_id: this.authService.currentUserId
        })
            .pipe(operators_1.catchError(this.handleError));
    };
    RequestService.prototype.getRequestPage = function (action) {
        return this.http
            .post(this.requestUrl, {
            token: this.authService.appToken,
            user_id: this.authService.currentUserId
        })
            .pipe(operators_1.map(function (requests) {
            var topVal = action.pageSize, skipVal = action.page, skip = isNaN(skipVal) ? 0 : +skipVal;
            var top = isNaN(topVal) ? 10 : skip + +topVal;
            if (top > requests.length) {
                top = skip + (requests.length - skip);
            }
            //console.log(`Skip: ${skip} Top: ${top}`);
            requests = requests.filter(function (x) {
                return x.title
                    .toLowerCase()
                    .includes(action.filteredValue.toLowerCase()) ||
                    x.message
                        .toLowerCase()
                        .includes(action.filteredValue.toLowerCase());
            });
            var pagedRequest = requests.slice(skip, top);
            return {
                results: pagedRequest,
                pageSize: action.pageSize,
                totalRecords: requests.length
            };
        }), operators_1.catchError(this.handleError));
    };
    RequestService.prototype.updateRequest = function (request) {
        return this.http
            .post(this.requestUrl + "/update", {
            id: request.id,
            token: this.authService.appToken,
            client_id: this.authService.currentUserId,
            title: request.title,
            message: request.message
        })
            .pipe(operators_1.catchError(this.handleError));
    };
    RequestService.prototype.createRequest = function (request) {
        return this.http
            .post(this.requestUrl + "/create", {
            token: this.authService.appToken,
            client_id: this.authService.currentUserId,
            title: request.title,
            message: request.message
        })
            .pipe(operators_1.catchError(this.handleError));
    };
    RequestService.prototype.deleteRequest = function (request) {
        return this.http
            .post(this.requestUrl + "/delete", {
            id: request.id,
            token: this.authService.appToken
        })
            .pipe(operators_1.catchError(this.handleError));
    };
    RequestService.prototype.acceptRequest = function (id) {
        console.log(id);
        return this.http
            .post(this.requestUrl + "/accept", {
            request_id: id,
            user_id: this.authService.currentUserId,
            token: this.authService.appToken
        })
            .pipe(
        //tap((data) => console.log(data)),
        operators_1.catchError(this.handleError));
    };
    //   createProduct(product: Product): Observable<Product> {
    //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //     // Product Id must be null for the Web API to assign an Id
    //     const newProduct = { ...product, id: null };
    //     return this.http
    //       .post<Product>(this.productsUrl, newProduct, { headers })
    //       .pipe(
    //         //tap((data) => console.log('createProduct: ' + JSON.stringify(data))),
    //         catchError(this.handleError)
    //       );
    //   }
    //   deleteProduct(product: Product): Observable<{}> {
    //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //     const url = `${this.productsUrl}/${product.id}`;
    //     return this.http.delete<Product>(url, { headers }).pipe(
    //       map(() => product),
    //       //tap((data) => console.log('deleteProduct: ' + JSON.stringify(data))),
    //       catchError(this.handleError)
    //     );
    //   }
    //   updateProduct(product: Product): Observable<Product> {
    //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //     const url = `${this.productsUrl}/${product.id}`;
    //     return this.http.put<Product>(url, product, { headers }).pipe(
    //       //tap(() => console.log('updateProduct: ' + product.id)),
    //       map(() => product),
    //       catchError(this.handleError)
    //     );
    //   }
    RequestService.prototype.handleError = function (err) {
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
    RequestService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], RequestService);
    return RequestService;
}());
exports.RequestService = RequestService;
