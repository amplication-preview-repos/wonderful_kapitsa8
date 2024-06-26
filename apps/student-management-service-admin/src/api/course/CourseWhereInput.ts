import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EnrollmentListRelationFilter } from "../enrollment/EnrollmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CourseWhereInput = {
  courseCode?: StringNullableFilter;
  courseName?: StringNullableFilter;
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  enrollments?: EnrollmentListRelationFilter;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
};
