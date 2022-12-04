import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutAuthorInput } from './post-create-without-author.input';

@InputType()
export class PostCreateOrConnectWithoutAuthorInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: PostWhereUniqueInput;

    @Field(() => PostCreateWithoutAuthorInput, {nullable:false})
    @Type(() => PostCreateWithoutAuthorInput)
    create!: PostCreateWithoutAuthorInput;
}
