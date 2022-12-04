import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './models/post.model';
import { GetPostInput } from './dto/getPostInput.dto';
import { DeletePostInput } from './dto/deletePostInput.dto';
import { CreatePostInput } from './dto/createPostInput.dto';
import { GetAllPostInput } from './dto/getAllPostInput.dto';
import { UpdatePostInput } from './dto/updatePostInput.dto';

@Resolver((of) => Post)
export class PostResolver {
  constructor(private postService: PostService) {}

  @Mutation((_returns) => Post)
  createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.createPost(createPostInput);
  }

  @Query((_returns) => [Post])
  getPosts(
    @Args('getAllPostInput')
    getAllPostInput: GetAllPostInput,
  ) {
    return this.postService.posts(getAllPostInput);
  }

  @Query((_returns) => Post)
  getPost(
    @Args('getPostInput')
    getPostInput: GetPostInput,
  ) {
    return this.postService.post(getPostInput);
  }

  @Mutation((_returns) => Post)
  updatePost(
    @Args('updatePostInput')
    updatePostInput: UpdatePostInput,
  ) {
    return this.postService.updatePost(updatePostInput);
  }

  @Mutation((_returns) => Post)
  removePost(@Args('deletePostInput') deletePostInput: DeletePostInput) {
    return this.postService.deletePost(deletePostInput);
  }
}
