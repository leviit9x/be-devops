import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from 'src/@generated/graphql/post/post-where-unique.input';

@InputType()
export class GetPostInput extends PostWhereUniqueInput {}
