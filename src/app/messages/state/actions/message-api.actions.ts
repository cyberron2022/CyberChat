import { createAction, props } from "@ngrx/store";
import { IMessage } from "../../message";

//Creating Actions

export const loadAcceptedMessageSuccess = createAction(
  "[Message List API] Load Accepted Message Success",
  props<{ acceptedMessages: IMessage[] }>()
  // if you return 1 data do not add [] in Product
  // because [] is for multiple products only
);
export const loadAcceptedMessageFailure = createAction(
  "[Message List API] Load Accepted Message Fail",
  props<{ error: string }>()
);

export const loadMessagesSuccess = createAction(
  "[Message Chat API] Load Messages Success",
  props<{ messages: IMessage[] }>()
);
export const loadMessagesFailure = createAction(
  "[Message Chat API] Load Messages Fail",
  props<{ error: string }>()
);

export const sendMessageSuccess = createAction(
  "[Message Chat API] Save Messages Success",
  props<{ messages: IMessage[] }>()
);
export const sendMessageFailure = createAction(
  "[Message Chat API] Save Messages Fail",
  props<{ error: string }>()
);


export const updateMessageSuccess = createAction(
  "[Message Edit API] Update Message Success",
  props<{ message: IMessage }>()
  // if you return 1 data do not add [] in Product
  // because [] is for multiple products only
);
export const updateMessageFailure = createAction(
  "[Message Edit API] Update Message Fail",
  props<{ error: string }>()
);

export const createMessageSuccess = createAction(
  "[Message New API] Create Message Success",
  props<{ message: IMessage }>()
);
export const createMessageFailure = createAction(
  "[Message New API] Create Message Fail",
  props<{ error: string }>()
);

export const deleteMessageSuccess = createAction(
  "[Message List API] Delete Message Success",
  props<{ message: IMessage[] }>()
);
export const deleteMessageFailure = createAction(
  "[Message List API] Delete Message Fail",
  props<{ error: string }>()
);
export const acceptMessageSuccess = createAction(
  "[Message List API] Accept Message Success",
  props<{ message: IMessage }>()
);
export const acceptMessageFailure = createAction(
  "[Message List API] Accept Message Fail",
  props<{ error: string }>()
);
