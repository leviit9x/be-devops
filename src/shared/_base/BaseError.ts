/*
 Why this class?
 - If you throw Error(''): Default nestjs with graphql will return
   "errors": [
      {
        "message": "message",
        "extensions": {
          "code": "INTERNAL_SERVER_ERROR",
          "response": {
            "statusCode": 401,
            "message": "Unauthorized"
          }
        }
      }
    ],
  So UI/client cannot determine which error is, the error_key is needed for translation.


 */
import { ApolloError } from 'apollo-server-errors';

export class BaseError extends ApolloError {
  constructor(
    message: string,
    code?: string,
    extensions?: Record<string, any>,
  ) {
    super(message, code, extensions);
  }
}

// throw new BaseError('My error message')
