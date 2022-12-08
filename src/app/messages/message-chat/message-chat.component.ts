import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { GenericValidator } from "src/app/shared/generic-validator";
import {
  IMessageDto,
  WebsocketService,
} from "../../services/web-socket.service";
import { IMessage } from "../message";

@Component({
  selector: "cc-message-chat",
  templateUrl: "message-chat.component.html",
  styleUrls: ["./message-chat.component.css"],
})
export class MessageChatComponent
  implements OnInit, OnDestroy, AfterViewChecked
{
  //  @ViewChild("myList") myList: ElementRef;
  @ViewChild("autoFocus") autoFocus: ElementRef;
  @Input() messages: IMessage[];
  @Input() userType: string;
  @Input() requestId: number;
  @Input() currentUserId: number;
  @Input() errorMessage: string;
  @Output() sendMessageEmit = new EventEmitter();
  @Output() messageElementEmit = new EventEmitter<ElementRef>();
  @Output() reloadMessageEmit = new EventEmitter();

  validationMessages: { [key: string]: { [key: string]: string } };
  messageForm: FormGroup;
  genericValidator: GenericValidator;
  displayMessage: { [key: string]: string } = {};

  public scrollNow = new Subject();

  constructor(public socketService: WebsocketService, private fb: FormBuilder) {
    this.validationMessages = {
      message: {
        required: "Message is required.",
        minlength: "Message must be at least three characters.",
        maxlength: "Message cannot exceed 5000 characters.",
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    this.messageForm = this.fb.group({
      message: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(5000),
        ],
      ],
    });

    // this.messages$ = this.store
    //   .select(getCurrentMessage)
    //   .pipe(tap((currentMessage) => this.displayUpdatedMessage(currentMessage)));
    // //.pipe(tap((currentRequest) => console.log(currentRequest)));

    // Watch for value changes for validation
    this.messageForm.valueChanges.subscribe(
      () =>
        (this.displayMessage = this.genericValidator.processMessages(
          this.messageForm
        ))
    );

    this.socketService.messages.subscribe((msg: IMessageDto) => {
      const rcv = Object.assign({}, msg);

      if (
        this.currentUserId !== rcv.user_id &&
        this.requestId === rcv.request_id
      ) {
        this.reloadMessageEmit.emit(rcv.request_id);
      }

      // console.log("RECEIVED:", rcv.user_id, rcv.request_id, rcv.message);
      console.log("Response from websocket: " + JSON.stringify(rcv));
      this.scrollNow.next(true);
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
  ngAfterViewChecked() {
    if (this.messages !== null) {
      this.autoFocus.nativeElement.focus();
    }
  }
  displayUpdatedMessage(currentMessaget: IMessage[]) {}
  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(
      this.messageForm
    );
  }
  sendMessage() {
    this.sendMessageEmit.emit(this.messageForm.get("message").value);

    let message = {
      user_id: this.currentUserId,
      request_id: this.requestId,
      message: this.messageForm.get("message").value,
    };

    this.socketService.messages.next(message);

    this.messageForm.reset();
    this.scrollNow.next(true);
    this.autoFocus.nativeElement.focus();
  }

  // scrollToBottom(): void {
  //   // this.myList.nativeElement.scrollTop =
  //   //   this.myList.nativeElement.scrollHeight;
  //   this.myList.nativeElement.scrollTo({
  //     left: 0,
  //     top: this.myList.nativeElement.scrollHeight,
  //     behavior: "smooth",
  //   });
  // }
}
