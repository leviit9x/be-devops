import { InputType } from '@nestjs/graphql';
import { PostCreateInput } from 'src/@generated/graphql/post/post-create.input';

@InputType()
export class CreatePostInput extends PostCreateInput {}
