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
import { Session } from "./Session";
import { SessionCountArgs } from "./SessionCountArgs";
import { SessionFindManyArgs } from "./SessionFindManyArgs";
import { SessionFindUniqueArgs } from "./SessionFindUniqueArgs";
import { CreateSessionArgs } from "./CreateSessionArgs";
import { UpdateSessionArgs } from "./UpdateSessionArgs";
import { DeleteSessionArgs } from "./DeleteSessionArgs";
import { Admin } from "../../admin/base/Admin";
import { SessionService } from "../session.service";
@graphql.Resolver(() => Session)
export class SessionResolverBase {
  constructor(protected readonly service: SessionService) {}

  async _sessionsMeta(
    @graphql.Args() args: SessionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Session])
  async sessions(
    @graphql.Args() args: SessionFindManyArgs
  ): Promise<Session[]> {
    return this.service.sessions(args);
  }

  @graphql.Query(() => Session, { nullable: true })
  async session(
    @graphql.Args() args: SessionFindUniqueArgs
  ): Promise<Session | null> {
    const result = await this.service.session(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Session)
  async createSession(
    @graphql.Args() args: CreateSessionArgs
  ): Promise<Session> {
    return await this.service.createSession({
      ...args,
      data: {
        ...args.data,

        admin: args.data.admin
          ? {
              connect: args.data.admin,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Session)
  async updateSession(
    @graphql.Args() args: UpdateSessionArgs
  ): Promise<Session | null> {
    try {
      return await this.service.updateSession({
        ...args,
        data: {
          ...args.data,

          admin: args.data.admin
            ? {
                connect: args.data.admin,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Session)
  async deleteSession(
    @graphql.Args() args: DeleteSessionArgs
  ): Promise<Session | null> {
    try {
      return await this.service.deleteSession(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Admin, {
    nullable: true,
    name: "admin",
  })
  async getAdmin(@graphql.Parent() parent: Session): Promise<Admin | null> {
    const result = await this.service.getAdmin(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}