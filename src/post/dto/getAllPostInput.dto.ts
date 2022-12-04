import { Field, InputType, Int } from '@nestjs/graphql';
import { PostOrderByWithRelationInput } from 'src/@generated/graphql/post/post-order-by-with-relation.input';
import { PostWhereUniqueInput } from 'src/@generated/graphql/post/post-where-unique.input';
import { PostWhereInput } from 'src/@generated/graphql/post/post-where.input';

@InputType()
export class GetAllPostInput {
  @Field(() => Int)
  skip?: number;

  @Field(() => Int)
  take?: number;

  @Field(() => PostWhereUniqueInput)
  cursor?: PostWhereUniqueInput;

  @Field(() => PostWhereInput)
  where?: PostWhereInput;

  @Field(() => PostOrderByWithRelationInput)
  orderBy?: PostOrderByWithRelationInput;
}
