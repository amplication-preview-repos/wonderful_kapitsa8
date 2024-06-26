import { Instructor as TInstructor } from "../api/instructor/Instructor";

export const INSTRUCTOR_TITLE_FIELD = "firstName";

export const InstructorTitle = (record: TInstructor): string => {
  return record.firstName?.toString() || String(record.id);
};
