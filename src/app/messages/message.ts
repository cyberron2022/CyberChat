/* Defines the product entity */
export interface IMessage {
  id: number | null;
  request_id: number;
  client_id: number;
  client_username: string;
  client_fullname: string;
  title: string;
  message: string;
  created_date: Date;
  accepted_date: Date;
  support_id: number;
  created_fullname: string;
  created_by: string;
  created_by_id: number;
  is_read: boolean;
}

