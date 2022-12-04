import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutAuthorInput } from './post-update-without-author.input';

@InputType()
export class PostUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: PostWhereUniqueInput;

    @Field(() => PostUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => PostUpdateWithoutAuthorInput)
    data!: PostUpdateWithoutAuthorInput;
}
