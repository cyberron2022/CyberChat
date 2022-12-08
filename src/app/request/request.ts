/* Defines the product entity */
export interface IRequest {
  id: number | null;
  title: string;
  message: string;
  client_id: number;
  created_date: string;
  accept_support_id: string;
}
