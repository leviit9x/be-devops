import { Field, InputType } from '@nestjs/graphql';
import { PostUpdateInput } from 'src/@generated/graphql/post/post-update.input';
import { PostWhereUniqueInput } from 'src/@generated/graphql/post/post-where-unique.input';

@InputType()
export class UpdatePostInput {
  @Field(() => PostUpdateInput)
  data: PostUpdateInput;

  @Field(() => PostWhereUniqueInput)
  where: PostWhereUniqueInput;
}
