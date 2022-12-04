import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Use for service function that return entity
 */
@ObjectType()
export class BaseEntityResponseGraphql {
  @Field(() => String, { nullable: true })
  error: null | string; // error key, like enum

  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => String, { nullable: true, description: 'json encoded entity' })
  entity?: string;
}

@ObjectType()
export class BaseEntitiesResponseGraphql {
  @Field(() => String, { nullable: true })
  error: null | string; // error key, like enum

  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => [String], {
    nullable: true,
    description: 'array of json encoded entity',
  })
  entities?: string[];
}
