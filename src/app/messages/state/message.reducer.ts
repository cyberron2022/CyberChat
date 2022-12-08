import { createReducer, on } from "@ngrx/store";
import { IMessage } from "../message";
import { MessageApiActions, MessagePageActions } from "./actions/index";

export interface MessageState {
  currentRequestId: number | null;
  isDirty: boolean;
  error: string;
  acceptedMessages: IMessage[];
  messages: IMessage[];
}

//Initial State
const initialState: MessageState = {
  currentRequestId: null,
  isDirty: false,
  error: "",
  acceptedMessages: [],
  messages: [],
};

export const messageReducer = createReducer<MessageState>(
  initialState,
  // dont add actions if there no (result or parameter) in actions value from the component
  // add action if theres a (result or parameter) in actions from the component

  on(MessagePageActions.setCurrrentRequest, (state, action): MessageState => {
    return {
      ...state,
      currentRequestId: action.currentRequestId,
      error: "",
      isDirty: false,
    };
  }),
  on(MessagePageActions.clearCurrrentRequest, (state): MessageState => {
    return {
      ...state,
      currentRequestId: null,
      error: "",
      isDirty: false,
    };
  }),
  on(MessagePageActions.initCurrentMessage, (state): MessageState => {
    return {
      ...state,
      currentRequestId: 0,
      error: "",
      isDirty: false,
    };
  }),
  on(
    MessageApiActions.loadAcceptedMessageSuccess,
    (state, action): MessageState => {
      return {
        ...state,
        error: "",
        currentRequestId: 0,
        acceptedMessages: action.acceptedMessages,
      };
    }
  ),
  on(
    MessageApiActions.loadAcceptedMessageFailure,
    (state, action): MessageState => {
      return {
        ...state,
        error: action.error,
        currentRequestId: 0,
        acceptedMessages: [],
      };
    }
  ),
  on(MessageApiActions.loadMessagesSuccess, (state, action): MessageState => {
    return {
      ...state,
      error: "",
      currentRequestId: 0,
      messages: action.messages,
    };
  }),
  on(MessageApiActions.loadMessagesFailure, (state, action): MessageState => {
    return {
      ...state,
      error: action.error,
      currentRequestId: 0,
      messages: [],
    };
  }),
  on(MessageApiActions.sendMessageSuccess, (state, action): MessageState => {
    // let updatedMessage = state.messages.map((item) =>
    //   item.id === action.messages.id ? action.messages : item
    // );
    return {
      ...state,
      error: "",
      currentRequestId: 0,
      messages: action.messages,
    };
  }),
  on(MessageApiActions.sendMessageFailure, (state, action): MessageState => {
    return {
      ...state,
      error: action.error,
      currentRequestId: 0,
    };
  }),
  on(MessagePageActions.setDirty, (state, action): MessageState => {
    return {
      ...state,
      isDirty: action.isDirty,
    };
  })
);
