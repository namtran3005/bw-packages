/* eslint-disable @typescript-eslint/no-explicit-any */

export class BitgoError extends Error {
  public statusCode: number;
  public error: string;
  public requestId: string;
  public name: string;
  public context?: { [key: string]: any };

  constructor({
    statusCode,
    error,
    requestId,
    name,
    context,
  }: {
    statusCode: number;
    error: string;
    requestId: string;
    name: string;
    context?: { [key: string]: any };
  }) {
    super(error);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, BitgoError.prototype);

    this.statusCode = statusCode;
    this.error = error;
    this.requestId = requestId;
    this.name = name;
    this.context = context;
  }
}
