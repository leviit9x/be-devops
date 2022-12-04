import { InputType } from '@nestjs/graphql';
import { UserCreateInput } from 'src/@generated/graphql/user/user-create.input';

@InputType()
export class CreateUserInput extends UserCreateInput {}
