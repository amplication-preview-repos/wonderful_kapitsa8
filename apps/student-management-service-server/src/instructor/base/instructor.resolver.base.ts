/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Instructor } from "./Instructor";
import { InstructorCountArgs } from "./InstructorCountArgs";
import { InstructorFindManyArgs } from "./InstructorFindManyArgs";
import { InstructorFindUniqueArgs } from "./InstructorFindUniqueArgs";
import { CreateInstructorArgs } from "./CreateInstructorArgs";
import { UpdateInstructorArgs } from "./UpdateInstructorArgs";
import { DeleteInstructorArgs } from "./DeleteInstructorArgs";
import { InstructorService } from "../instructor.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Instructor)
export class InstructorResolverBase {
  constructor(
    protected readonly service: InstructorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Instructor",
    action: "read",
    possession: "any",
  })
  async _instructorsMeta(
    @graphql.Args() args: InstructorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Instructor])
  @nestAccessControl.UseRoles({
    resource: "Instructor",
    action: "read",
    possession: "any",
  })
  async instructors(
    @graphql.Args() args: InstructorFindManyArgs
  ): Promise<Instructor[]> {
    return this.service.instructors(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Instructor, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Instructor",
    action: "read",
    possession: "own",
  })
  async instructor(
    @graphql.Args() args: InstructorFindUniqueArgs
  ): Promise<Instructor | null> {
    const result = await this.service.instructor(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Instructor)
  @nestAccessControl.UseRoles({
    resource: "Instructor",
    action: "create",
    possession: "any",
  })
  async createInstructor(
    @graphql.Args() args: CreateInstructorArgs
  ): Promise<Instructor> {
    return await this.service.createInstructor({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Instructor)
  @nestAccessControl.UseRoles({
    resource: "Instructor",
    action: "update",
    possession: "any",
  })
  async updateInstructor(
    @graphql.Args() args: UpdateInstructorArgs
  ): Promise<Instructor | null> {
    try {
      return await this.service.updateInstructor({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Instructor)
  @nestAccessControl.UseRoles({
    resource: "Instructor",
    action: "delete",
    possession: "any",
  })
  async deleteInstructor(
    @graphql.Args() args: DeleteInstructorArgs
  ): Promise<Instructor | null> {
    try {
      return await this.service.deleteInstructor(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
