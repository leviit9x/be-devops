import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Post } from 'src/post/models/post.model';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [Post], { nullable: 'items' })
  posts: Post[];
}
