import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InstructorModuleBase } from "./base/instructor.module.base";
import { InstructorService } from "./instructor.service";
import { InstructorController } from "./instructor.controller";
import { InstructorResolver } from "./instructor.resolver";

@Module({
  imports: [InstructorModuleBase, forwardRef(() => AuthModule)],
  controllers: [InstructorController],
  providers: [InstructorService, InstructorResolver],
  exports: [InstructorService],
})
export class InstructorModule {}
