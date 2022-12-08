import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as AppState from "src/app/state/app.state";
import { IMessage } from "../message";
import { MessageState } from "./message.reducer";

// Extends to pass this ProductState to our RootState
// to avoid lazy loading
// para hindi agad i-load sa first loading ung ProductState
// UserState lang muna sa first loading
export interface RootState extends AppState.RootState {
  messages: MessageState;
}

//Get all the product state
const getMessageFeatureState = createFeatureSelector<MessageState>("messages");

//Get only the currentProduct ID state and return it to the component
export const getCurrentRequestId = createSelector(
  getMessageFeatureState,
  (state) => state.currentRequestId
);

//Get only the currentProduct state and return it to the component
export const getCurrentMessage  = createSelector(
  getMessageFeatureState,
  getCurrentRequestId,
  (state, currentRequestId)  => {

      return currentRequestId
        ? state.messages.find((p) => p.id === currentRequestId)
        : null;
    
  }
);

//Get the list of all Product in state and return it to the component
export const getMessages = createSelector(
  getMessageFeatureState,
  (state) => state.messages
);
export const getAcceptedMessages = createSelector(
  getMessageFeatureState,
  (state) => state.acceptedMessages
);

  
//Get the error in state and return it to the component
export const getError = createSelector(
  getMessageFeatureState,
  (state) => state.error
);
