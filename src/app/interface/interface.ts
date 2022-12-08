
export interface IPagedResults<T> {
  totalRecords: number;
  pageSize: number;
  results: T;
}
