import { createAction, props } from "@ngrx/store";
import { IMessage } from "../../message";

//Creating Actions
export const loadAcceptedMessage = createAction(
  "[Message List Page] Load Accepted Message"
);

export const setCurrrentRequest = createAction(
  "[Message List Page] Set Current Request",
  props<{ currentRequestId: number }>()
  // if you return 1 data do not add [] in Product
  // because [] is for multiple products only
);
export const loadMessages = createAction(
  "[Message Chat Page] Load Messages",
  props<{ request_id: number }>()
  // if you return 1 data do not add [] in Product
  // because [] is for multiple products only
);
export const sendMessage = createAction(
  "[Message Chat Page] Send Messages",
  props<{ request_id: number; message: string }>()
  // if you return 1 data do not add [] in Product
  // because [] is for multiple products only
);
export const clearCurrrentRequest = createAction(
  "[Message Edit Page] Clear Current Request"
);
export const initCurrentMessage = createAction(
  "[Message List Page] Initialize Current Message"
);
export const setDirty = createAction(
  "[Product Edit Page] Set Product Dirty",
  props<{ isDirty: boolean }>()
);

export const updateMessage = createAction(
  "[Message Edit Page] Update Message",
  props<{ message: IMessage }>()
  // if you return 1 data do not add [] in Product
  // because [] is for multiple products only
);
export const createMessage = createAction(
  "[Message New Page] Create Message",
  props<{ message: IMessage }>()
  // if you return 1 data do not add [] in Product
  // because [] is for multiple products only
);
export const deleteMessage = createAction(
  "[Message List Page] Delete Message",
  props<{ message: IMessage }>()
  // if you return 1 data do not add [] in Product
  // because [] is for multiple products only
);

export const acceptMessage = createAction(
  "[Message List Page] Accept Message",
  props<{ id: number }>()
  // if you return 1 data do not add [] in Product
  // because [] is for multiple products only
);
