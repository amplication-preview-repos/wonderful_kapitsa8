import { EnrollmentCreateNestedManyWithoutCoursesInput } from "./EnrollmentCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  courseCode?: string | null;
  courseName?: string | null;
  description?: string | null;
  endDate?: Date | null;
  enrollments?: EnrollmentCreateNestedManyWithoutCoursesInput;
  startDate?: Date | null;
};
