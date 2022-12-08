import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { IMessage } from "../message";

@Component({
  selector: "cc-message-list",
  templateUrl: "./message-list.component.html",
  styleUrls: ["./message-list.component.css"],
})
export class MessageListComponent implements OnInit {
  @Input() acceptedMessage: IMessage[];
  @Input() userType: string;
 
  @Input() errorMessage: string;
  @Input() selectedMesssage: IMessage;
  @Output() openMessageEmit = new EventEmitter();


  selectedItem: number = -1;
  constructor() {}

  ngOnInit() {
    
  }


  openMessage(request_id: number, index: number) {
    this.selectedItem = index;
    this.openMessageEmit.emit(request_id);
  }
}
