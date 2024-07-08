import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  token?: SortOrder;
  adminId?: SortOrder;
};
