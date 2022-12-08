import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { IRequest } from "../request";

@Component({
  selector: "cc-request-list",
  templateUrl: "./request-list.component.html",
  styleUrls: ["./request-list.component.scss"],
})
export class RequestListComponent implements OnInit {
  @ViewChild("find") find: ElementRef;

  @Input() requests: IRequest[];
  @Input() userType: string;
  @Input() errorMessage: string;
  @Input() selectedRequest: IRequest;
  @Output() deleteRequestEmit = new EventEmitter<IRequest>();
  @Output() storeRequestEmit = new EventEmitter();
  @Output() newRequestEmit = new EventEmitter();
  @Output() acceptRequestEmit = new EventEmitter();

  @Input() current: number;
  @Input() totalRecords: number;
  @Input() totalPage: number;
  @Input() pageSize: number;
  @Output() getRequestPageEmit = new EventEmitter();
  @Output() pageChangedEmit = new EventEmitter();
  @Output() goToEmit = new EventEmitter();
  @Output() nextEmit = new EventEmitter();
  @Output() previousEmit = new EventEmitter();
  @Output() changeInputEmit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteRequest(request: IRequest) {
    this.deleteRequestEmit.emit(request);
  }
  storeCurrentRequest(id: number) {
    this.storeRequestEmit.emit(id);
  }
  newRequest(id: number) {
    this.newRequestEmit.emit(id);
  }
  acceptRequest(id: number) {
    this.acceptRequestEmit.emit(id);
  }

  pageChanged(page: number) {
    this.pageChangedEmit.emit(page);
  }
  getRequestPage(page: number) {
    this.getRequestPageEmit.emit(page);
  }

  goTo(current: number) {
    this.goToEmit.emit(current);
  }
  next() {
    this.nextEmit.emit();
  }
  previous() {
    this.previousEmit.emit();
  }

  changeInput(event: any) {
    this.changeInputEmit.emit(event.value);
  }
}
