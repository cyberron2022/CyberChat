import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";

import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { IPagedResults } from "../interface/interface";
import { AuthService } from "./auth.service";

import { IRequest } from "../request/request";

@Injectable({
  providedIn: "root",
})
export class RequestService implements OnInit {
  //private requestUrl = "http://localhost:5084/api/request";
  private requestUrl = "https://cyberron.somee.com/api/request";
  constructor(private http: HttpClient, private authService: AuthService) {}
  ngOnInit(): void {}

  getRequest(): Observable<IRequest[]> {
    return this.http
      .post<IRequest[]>(this.requestUrl, {
        token: this.authService.appToken,
        user_id: this.authService.currentUserId,
      })
      .pipe(catchError(this.handleError));
  }

  getRequestPage(action: {
    page: number;
    pageSize: number;
    filteredValue: string;
  }): Observable<IPagedResults<IRequest[]>> {
    return this.http
      .post<IRequest[]>(this.requestUrl, {
        token: this.authService.appToken,
        user_id: this.authService.currentUserId,
      })
      .pipe(
        map((requests) => {
          const topVal = action.pageSize,
            skipVal = action.page,
            skip = isNaN(skipVal) ? 0 : +skipVal;
          let top = isNaN(topVal) ? 10 : skip + +topVal;

          if (top > requests.length) {
            top = skip + (requests.length - skip);
          }
          //console.log(`Skip: ${skip} Top: ${top}`);
          requests = requests.filter(
            (x) =>
              x.title
                .toLowerCase()
                .includes(action.filteredValue.toLowerCase()) ||
              x.message
                .toLowerCase()
                .includes(action.filteredValue.toLowerCase())
          );

          var pagedRequest = requests.slice(skip, top);

          return {
            results: pagedRequest,
            pageSize: action.pageSize,
            totalRecords: requests.length,
          };
        }),

        catchError(this.handleError)
      );
  }

  updateRequest(request: IRequest): Observable<IRequest> {
    return this.http
      .post<IRequest>(this.requestUrl + "/update", {
        id: request.id,
        token: this.authService.appToken,
        client_id: this.authService.currentUserId,
        title: request.title,
        message: request.message,
      })
      .pipe(catchError(this.handleError));
  }
  createRequest(request: IRequest): Observable<IRequest> {
    return this.http
      .post<IRequest>(this.requestUrl + "/create", {
        token: this.authService.appToken,
        client_id: this.authService.currentUserId,
        title: request.title,
        message: request.message,
      })
      .pipe(catchError(this.handleError));
  }
  deleteRequest(request: IRequest): Observable<any> {
    return this.http
      .post<any>(this.requestUrl + "/delete", {
        id: request.id,
        token: this.authService.appToken,
      })
      .pipe(catchError(this.handleError));
  }
  acceptRequest(id: number): Observable<IRequest> {
    console.log(id);
    return this.http
      .post<IRequest>(this.requestUrl + "/accept", {
        request_id: id,
        user_id: this.authService.currentUserId,
        token: this.authService.appToken,
      })
      .pipe(
        //tap((data) => console.log(data)),
        catchError(this.handleError)
      );
  }
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
