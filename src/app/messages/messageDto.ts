/* Defines the product entity */
// export class IMessageDto {
//   id: number | null;
//   request_id: number;
//   client_id: number;
//   client_username: string;
//   client_fullname: string;
//   title: string;
//   message: string;
//   created_date: Date;
//   accepted_date: Date;
//   support_id: number;
//   created_fullname: string;
//   created_by: string;
//   created_by_id: number;
//   is_read: boolean;

//   constructor(
//     id: number | null,
//     request_id: number,
//     client_id: number,
//     client_username: string,
//     client_fullname: string,
//     title: string,
//     message: string,
//     created_date: Date,
//     accepted_date: Date,
//     support_id: number,
//     created_fullname: string,
//     created_by: string,
//     created_by_id: number,
//     is_read: boolean
//   ) {
//     this.id = id;
//     this.request_id = request_id;
//     this.client_id = client_id;
//     this.client_username = client_username;
//     this.client_fullname = client_fullname;
//     this.title = title;
//     this.message = message;
//     this.created_date = created_date;
//     this.accepted_date = accepted_date;
//     this.support_id = support_id;
//     this.created_fullname = created_fullname;
//     this.created_by = created_by;
//     this.created_by_id = created_by_id;
//     this.is_read = is_read;
//   }
// }

export class IMessageDto {
  user_id: number;
  request_id: number;
  message: string;

  constructor(user_id: number, request_id: number, message: string) {
    this.user_id = user_id;
    this.request_id = request_id;
    this.message = message;
  }
}
