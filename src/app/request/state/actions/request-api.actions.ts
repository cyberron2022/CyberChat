import { createAction, props } from "@ngrx/store";
import { IPagedResults } from "src/app/interface/interface";
import { IRequest } from "../../request";

//Creating Actions

export const loadRequestSuccess = createAction(
  "[Request API] Load Request Success",
  props<{ requests: IRequest[] }>()
  // if you return 1 data do not add [] in Product
  // because [] is for multiple products only
);
export const loadRequestFailure = createAction(
  "[Request API] Load Request Fail",
  props<{ error: string }>()
);

export const loadPageRequestSuccess = createAction(
  "[Request API] Load Page Request Success",
  props<{ data: IPagedResults<IRequest[]> }>()
  // if you return 1 data do not add [] in Product
  // because [] is for multiple products only
);
export const loadPageRequestFailure = createAction(
  "[Request API] Load Page Request Fail",
  props<{ error: string }>()
);

export const updateRequestSuccess = createAction(
  "[Request Edit API] Update Request Success",
  props<{ request: IRequest }>()
  // if you return 1 data do not add [] in Product
  // because [] is for multiple products only
);
export const updateRequestFailure = createAction(
  "[Request Edit API] Update Request Fail",
  props<{ error: string }>()
);

export const createRequestSuccess = createAction(
  "[Request New API] Create Request Success",
  props<{ request: IRequest }>()
);
export const createRequestFailure = createAction(
  "[Request New API] Create Request Fail",
  props<{ error: string }>()
);

export const deleteRequestSuccess = createAction(
  "[Request List API] Delete Request Success",
  props<{ request: IRequest[] }>()
);
export const deleteRequestFailure = createAction(
  "[Request List API] Delete Request Fail",
  props<{ error: string }>()
);
export const acceptRequestSuccess = createAction(
  "[Request List API] Accept Request Success",
  props<{ request: IRequest }>()
);
export const acceptRequestFailure = createAction(
  "[Request List API] Accept Request Fail",
  props<{ error: string }>()
);
