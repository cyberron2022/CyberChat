import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { LoggerService } from "src/app/services/logger.service";
import { RequestService } from "../../services/request.service";
import { IRequest } from "../request";
import {
  getRequests,
  getTotalPage,
  getTotalRecords,
  RootState,
} from "../state";
import { RequestPageActions } from "../state/actions";

@Component({
  templateUrl: "request-shell.component.html",
})
export class RequestShellComponent implements OnInit {
  userType: string;
  requests$: Observable<IRequest[]>;
  selectedRequest$: Observable<IRequest>;
  displayCode$: Observable<boolean>;
  errorMessage$: Observable<string>;

  totalRecords$: Observable<number>;
  totalPage$: Observable<number>;
  pageSize: number = 10;
  current: number = 1;
  filteredValue: string = "";
  constructor(
    private store: Store<RootState>,
    private router: Router,
    private auth: AuthService,
    private logger: LoggerService,
    private requestService: RequestService
  ) {}

  ngOnInit() {
    this.userType = this.auth.userType;
    this.store.dispatch(RequestPageActions.loadRequest());

    this.getRequestPage(1);
    this.totalRecords$ = this.store.select(getTotalRecords);
    this.totalPage$ = this.store.select(getTotalPage);
    this.requests$ = this.store.select(getRequests);
    // .pipe(
    //   map((data) => {
    //     return data.filter((item) =>
    //       item.title.toLowerCase().includes(this.filteredValue.toLowerCase())
    //     );
    //   })
    // );
  }
  deleteRequestBtn(request: IRequest) {
    this.store.dispatch(RequestPageActions.deleteRequest({ request }));
    //this.requests$ = this.store.select(getRequests);
    this.goTo(this.current);
  }
  saveCurrentRequest(id: number) {
    this.store.dispatch(
      RequestPageActions.setCurrrentRequest({ currentRequestId: id })
    );
    this.goTo(this.current);
    this.router.navigate(["/request/" + id]);
  }
  newRequest(id: number) {
    this.router.navigate(["/request/" + id]);
  }
  acceptRequest(id: number) {
    this.store.dispatch(RequestPageActions.acceptRequest({ id }));
  }

  pageChanged(page: number) {
    this.getRequestPage(page);
  }

  getRequestPage(page: number) {
    this.store.dispatch(
      RequestPageActions.loadPageRequest({
        page: (page - 1) * this.pageSize,
        pageSize: this.pageSize,
        filteredValue: this.filteredValue,
      })
    );
  }

  goTo(current: number) {
    this.current = current;
    this.getRequestPage(current);
  }
  next() {
    this.current++;
    this.getRequestPage(this.current);
  }
  previous() {
    this.current--;
    this.getRequestPage(this.current);
  }

  //Filter
  changeInput(value: string) {
    this.filteredValue = value;
    this.getRequestPage(1);
  }
}
