import { Field, InputType, Int } from '@nestjs/graphql';
import { UserOrderByWithRelationInput } from 'src/@generated/graphql/user/user-order-by-with-relation.input';
import { UserWhereUniqueInput } from 'src/@generated/graphql/user/user-where-unique.input';
import { UserWhereInput } from 'src/@generated/graphql/user/user-where.input';

@InputType()
export class GetAllUserInput {
  @Field(() => Int)
  skip?: number;

  @Field(() => Int)
  take?: number;

  @Field(() => UserWhereUniqueInput)
  cursor?: UserWhereUniqueInput;

  @Field(() => UserWhereInput)
  where?: UserWhereInput;

  @Field(() => UserOrderByWithRelationInput)
  orderBy?: UserOrderByWithRelationInput;
}
