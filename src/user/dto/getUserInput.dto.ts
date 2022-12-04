import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from 'src/@generated/graphql/user/user-where-unique.input';

@InputType()
export class GetUserInput extends UserWhereUniqueInput {}
