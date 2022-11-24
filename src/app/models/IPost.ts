import { IUser } from "./IUser";

export interface IPost {
  userId: IUser["id"];
  id: number;
  title: string;
  body: string;
}
