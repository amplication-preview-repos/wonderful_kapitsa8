import { Enrollment } from "../enrollment/Enrollment";

export type Course = {
  courseCode: string | null;
  courseName: string | null;
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  enrollments?: Array<Enrollment>;
  id: string;
  startDate: Date | null;
  updatedAt: Date;
};
