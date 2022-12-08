import { createAction, props } from "@ngrx/store";
import { IRequest } from "../../request";

//Creating Actions
export const loadRequest = createAction("[Request List Page] Load Request");
export const loadPageRequest = createAction(
  "[Request List Page] Load Page Request",
  props<{ page: number; pageSize: number; filteredValue: string }>()
);

export const setCurrrentRequest = createAction(
  "[Request List Page] Set Current Request",
  props<{ currentRequestId: number }>()
  // if you return 1 data do not add [] in Product
  // because [] is for multiple products only
);
export const clearCurrrentRequest = createAction(
  "[Request Edit Page] Clear Current Request"
);
export const initCurrentRequest = createAction(
  "[Request List Page] Initialize Current Request"
);
export const setDirty = createAction(
  "[Product Edit Page] Set Product Dirty",
  props<{ isDirty: boolean }>()
);

export const updateRequest = createAction(
  "[Request Edit Page] Update Request",
  props<{ request: IRequest }>()
  // if you return 1 data do not add [] in Product
  // because [] is for multiple products only
);
export const createRequest = createAction(
  "[Request New Page] Create Request",
  props<{ request: IRequest }>()
  // if you return 1 data do not add [] in Product
  // because [] is for multiple products only
);
export const deleteRequest = createAction(
  "[Request List Page] Delete Request",
  props<{ request: IRequest }>()
  // if you return 1 data do not add [] in Product
  // because [] is for multiple products only
);

export const acceptRequest = createAction(
  "[Request List Page] Accept Request",
  props<{ id: number }>()
  // if you return 1 data do not add [] in Product
  // because [] is for multiple products only
);
