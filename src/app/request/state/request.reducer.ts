import { createReducer, on } from "@ngrx/store";
import { IRequest } from "../request";
import { RequestApiActions, RequestPageActions } from "../state/actions/index";

export interface RequestState {
  currentRequestId: number | null;
  isDirty: boolean;
  totalRecords: number;
  totalPage: number;
  error: string;
  requests: IRequest[];
}

//Initial State
const initialState: RequestState = {
  currentRequestId: null,
  isDirty: false,
  totalRecords: 0,
  totalPage: 0,
  error: "",
  requests: [],
};

export const requestReducer = createReducer<RequestState>(
  initialState,
  // dont add actions if there no (result or parameter) in actions value from the component
  // add action if theres a (result or parameter) in actions from the component
  on(
    RequestApiActions.loadPageRequestSuccess,
    (state, action): RequestState => {
      return {
        ...state,
        error: "",
        currentRequestId: 0,
        totalRecords: action.data.totalRecords,
        totalPage: Math.ceil(action.data.totalRecords / action.data.pageSize),
        requests: action.data.results,
      };
    }
  ),
  on(
    RequestApiActions.loadPageRequestFailure,
    (state, action): RequestState => {
      return {
        ...state,
        error: action.error,
        currentRequestId: 0,
      };
    }
  ),
  on(RequestPageActions.setCurrrentRequest, (state, action): RequestState => {
    return {
      ...state,
      currentRequestId: action.currentRequestId,
      error: "",
      isDirty: false,
    };
  }),
  on(RequestPageActions.clearCurrrentRequest, (state): RequestState => {
    return {
      ...state,
      currentRequestId: null,
      error: "",
      isDirty: false,
    };
  }),
  on(RequestPageActions.initCurrentRequest, (state): RequestState => {
    return {
      ...state,
      currentRequestId: 0,
      error: "",
      isDirty: false,
    };
  }),
  on(RequestApiActions.loadRequestSuccess, (state, action): RequestState => {
    return {
      ...state,
      error: "",
      currentRequestId: 0,
      requests: action.requests,
    };
  }),
  on(RequestApiActions.loadRequestFailure, (state, action): RequestState => {
    return {
      ...state,
      error: action.error,
      currentRequestId: 0,
    };
  }),
  on(RequestPageActions.setCurrrentRequest, (state, action): RequestState => {
    return {
      ...state,
      currentRequestId: action.currentRequestId,
    };
  }),
  on(RequestApiActions.updateRequestSuccess, (state, action): RequestState => {
    let updatedRequest = state.requests.map((item) =>
      item.id === action.request.id ? action.request : item
    );
    return {
      ...state,
      error: "",
      currentRequestId: 0,
      requests: updatedRequest,
    };
  }),
  on(RequestApiActions.updateRequestFailure, (state, action): RequestState => {
    return {
      ...state,
      error: action.error,
      currentRequestId: 0,
    };
  }),
  on(RequestApiActions.createRequestSuccess, (state, action): RequestState => {
    // let newRequest = [...state.requests, action.request[0]];

    let newState = Object.assign([], state.requests);

    newState.unshift(action.request[0]);

    return {
      ...state,
      error: "",
      currentRequestId: 0,
      requests: newState,
    };
  }),
  on(RequestApiActions.createRequestFailure, (state, action): RequestState => {
    return {
      ...state,
      error: action.error,
      currentRequestId: 0,
    };
  }),
  on(RequestApiActions.deleteRequestSuccess, (state, action): RequestState => {
    // let newRequest = [...state.requests, action.request[0]];

    let filteredData = state.requests.filter(
      (p) => p.id !== action.request[0].id
    );

    return {
      ...state,
      error: "",
      currentRequestId: 0,
      requests: filteredData,
    };
  }),
  on(RequestApiActions.deleteRequestFailure, (state, action): RequestState => {
    return {
      ...state,
      error: action.error,
      currentRequestId: 0,
    };
  }),
  on(RequestApiActions.acceptRequestSuccess, (state, action): RequestState => {
    // let newRequest = [...state.requests, action.request[0]];
    // let newState = Object.assign([], state.requests);
    // var x = newState.find((x) => x.id === action.request[0].id);
    // var index = newState.indexOf(x);
    //newState[index] = action.request[0];

    let updatedRequest = state.requests.map((item) =>
      item.id === action.request[0].id ? action.request[0] : item
    );

    return {
      ...state,
      error: "",
      currentRequestId: 0,
      requests: updatedRequest,
    };
  }),
  on(RequestApiActions.acceptRequestFailure, (state, action): RequestState => {
    return {
      ...state,
      error: action.error,
      currentRequestId: 0,
    };
  }),
  on(RequestPageActions.setDirty, (state, action): RequestState => {
    return {
      ...state,
      isDirty: action.isDirty,
    };
  })
);
