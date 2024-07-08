import { Session } from "../session/Session";

export type Admin = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string | null;
  password: string | null;
  sessions?: Array<Session>;
};
