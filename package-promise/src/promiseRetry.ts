/*
 * Original method https://raw.githubusercontent.com/sindresorhus/p-retry/master/index.js
 */
import * as retry from 'retry';

class AbortError extends Error {
  public originalError: Error;
  public name: string;
  public message: string;

  constructor(message: Error | string) {
    super();
    let messagePlain = '';
    if (message instanceof Error) {
      this.originalError = message;
      messagePlain = message.message;
    } else {
      this.originalError = new Error(message);
      this.originalError.stack = this.stack;
    }

    this.name = 'AbortError';
    this.message = messagePlain;
  }
}

export const promiseRetry = <T>(
  input: () => PromiseLike<T>,
  opts?: retry.OperationOptions
): PromiseLike<T> =>
  new Promise((resolve, reject) => {
    const operation = retry.operation({
      maxTimeout: 10 * 1000 /* max window between 2 retries - 10 sec */,
      ...opts,
    });

    operation.attempt(attempts => {
      Promise.resolve(attempts)
        .then(input)
        .then(resolve, (err: Error) => {
          if (err instanceof AbortError) {
            operation.stop();
            reject(err.originalError);
          } else if (err instanceof TypeError) {
            operation.stop();
            reject(err);
          } else if (!operation.retry(err)) {
            reject(operation.mainError());
          }
        });
    });
  });
