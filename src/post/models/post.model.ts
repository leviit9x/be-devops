import { Field, ObjectType, ID } from '@nestjs/graphql';
import { User } from 'src/user/models/user.model';

@ObjectType()
export class Post {
  @Field((_type) => ID)
  id: string;

  @Field((_type) => String)
  title: string;

  @Field((_type) => String, { nullable: true })
  content?: string;

  @Field((_type) => Boolean, { nullable: true })
  published?: string;

  @Field((_type) => User, { nullable: true })
  author?: [User];

  @Field((_type) => String, { nullable: true })
  authorId?: string;
}
