import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subscription, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import {
  getCurrentToken,
  getCurrentUserId,
  getCurrentUserType,
  RootState
} from "../user/state/user.reducer";

import { User } from "../user/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  currentUser: User | null;
  redirectUrl: string;
  currentUserId: number = 0;
  userType: string;
  userSubscription: Subscription;
  appToken: string;
  // private userUrl = "http://localhost:5084/api/account";
  // private AuthUrl = "http://localhost:5084/api/Auth/login";

  private userUrl = "http://cyberron.somee.com/api/account";
  private AuthUrl = "http://cyberron.somee.com/api/Auth/login";

  constructor(private http: HttpClient, private store: Store<RootState>) {
    this.getCurrentID();
    this.getToken();
    this.getUserType();
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  private getCurrentID(): void {
    this.userSubscription = this.store
      .select(getCurrentUserId)
      .pipe(
        map((data) => {
          this.currentUserId = data;
        })
      )
      .subscribe();
  }
  private getToken(): void {
    this.userSubscription = this.store
      .select(getCurrentToken)
      .pipe(
        map((data) => {
          this.appToken = data;
        })
      )
      .subscribe();
  }
  private getUserType(): void {
    this.userSubscription = this.store
      .select(getCurrentUserType)
      .pipe(
        map((data) => {
          this.userType = data;
        })
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  getUsers(): Observable<User[]> {
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
      .post<User[]>(this.userUrl + "/getallaccounts", { token: this.appToken })
      .pipe(
        //tap((data) => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(this.AuthUrl, { username, password }).pipe(
      // tap((data) => {
      //   this.currentUser.push(data)
      // }),
      catchError(this.handleError)
    );

    // return this.http.get<User[]>(this.userUrl).pipe(
    //   //tap((data) => console.log(JSON.stringify(data))),
    //   catchError(this.handleError)
    // );
  }

  updateProfile(users: User): Observable<User> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    const url = `${this.userUrl}/${users.id}`;
    return this.http.put<User>(url, users, { headers }).pipe(
      //tap(() => console.log('updateProduct: ' + product.id)),
      map(() => users),
      catchError(this.handleError)
    );
  }
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

  logout(): void {
    this.currentUser = null;
  }

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
