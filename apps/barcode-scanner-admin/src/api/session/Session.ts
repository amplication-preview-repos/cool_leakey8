import { Admin } from "../admin/Admin";

export type Session = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  token: string | null;
  admin?: Admin | null;
};
