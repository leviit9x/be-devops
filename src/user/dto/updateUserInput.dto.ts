import { Field, InputType } from '@nestjs/graphql';
import { UserUpdateInput } from 'src/@generated/graphql/user/user-update.input';
import { UserWhereUniqueInput } from 'src/@generated/graphql/user/user-where-unique.input';

@InputType()
export class UpdateUserInput {
  @Field(() => UserUpdateInput)
  data: UserUpdateInput;

  @Field(() => UserWhereUniqueInput)
  where: UserWhereUniqueInput;
}
