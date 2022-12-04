import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPostsInput } from './user-create-without-posts.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPostsInput } from './user-create-or-connect-without-posts.input';
import { UserUpsertWithoutPostsInput } from './user-upsert-without-posts.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutPostsInput } from './user-update-without-posts.input';

@InputType()
export class UserUpdateOneWithoutPostsNestedInput {

    @Field(() => UserCreateWithoutPostsInput, {nullable:true})
    @Type(() => UserCreateWithoutPostsInput)
    create?: UserCreateWithoutPostsInput;

    @Field(() => UserCreateOrConnectWithoutPostsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPostsInput)
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput;

    @Field(() => UserUpsertWithoutPostsInput, {nullable:true})
    @Type(() => UserUpsertWithoutPostsInput)
    upsert?: UserUpsertWithoutPostsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutPostsInput, {nullable:true})
    @Type(() => UserUpdateWithoutPostsInput)
    update?: UserUpdateWithoutPostsInput;
}
