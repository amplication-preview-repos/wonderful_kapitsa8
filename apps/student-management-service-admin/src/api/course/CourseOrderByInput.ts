import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  courseCode?: SortOrder;
  courseName?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
