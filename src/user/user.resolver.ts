import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './models/user.model';
import { CreateUserInput } from './dto/createUserInput.dto';
import { GetAllUserInput } from './dto/getAllUserInput.dto';
import { GetUserInput } from './dto/getUserInput.dto';
import { DeleteUserInput } from './dto/deleteUserInput.dto';
import { UpdateUserInput } from './dto/updateUserInput.dto';

@Resolver('UserResolver')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation((_returns) => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.userService.createUser(createUserInput);
  }

  @Query((_returns) => [User])
  getAllUser(
    @Args('getAllUserInput')
    getAllUserInput: GetAllUserInput,
  ) {
    return this.userService.users(getAllUserInput);
  }

  @Query((_returns) => User)
  getUser(@Args('getUserInput') getUserInput: GetUserInput) {
    return this.userService.user(getUserInput);
  }

  @Mutation((_returns) => User)
  updateUser(
    @Args('updateUserInput')
    updateUserInput: UpdateUserInput,
  ) {
    return this.userService.updateUser(updateUserInput);
  }

  @Mutation((_returns) => User)
  removeUser(@Args('deleteUserInput') deleteUserInput: DeleteUserInput) {
    return this.userService.deleteUser(deleteUserInput);
  }
}
