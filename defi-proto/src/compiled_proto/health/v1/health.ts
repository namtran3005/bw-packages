/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "health.v1";

export interface GetHealthRequest {}

export interface GetHealthResponse {
  isUp: boolean;
}

const baseGetHealthRequest: object = {};

export const GetHealthRequest = {
  encode(
    _: GetHealthRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetHealthRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetHealthRequest } as GetHealthRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetHealthRequest {
    const message = { ...baseGetHealthRequest } as GetHealthRequest;
    return message;
  },

  toJSON(_: GetHealthRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetHealthRequest>): GetHealthRequest {
    const message = { ...baseGetHealthRequest } as GetHealthRequest;
    return message;
  },
};

const baseGetHealthResponse: object = { isUp: false };

export const GetHealthResponse = {
  encode(
    message: GetHealthResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isUp === true) {
      writer.uint32(8).bool(message.isUp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetHealthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetHealthResponse } as GetHealthResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isUp = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetHealthResponse {
    const message = { ...baseGetHealthResponse } as GetHealthResponse;
    if (object.isUp !== undefined && object.isUp !== null) {
      message.isUp = Boolean(object.isUp);
    } else {
      message.isUp = false;
    }
    return message;
  },

  toJSON(message: GetHealthResponse): unknown {
    const obj: any = {};
    message.isUp !== undefined && (obj.isUp = message.isUp);
    return obj;
  },

  fromPartial(object: DeepPartial<GetHealthResponse>): GetHealthResponse {
    const message = { ...baseGetHealthResponse } as GetHealthResponse;
    if (object.isUp !== undefined && object.isUp !== null) {
      message.isUp = object.isUp;
    } else {
      message.isUp = false;
    }
    return message;
  },
};

export const HealthService = {
  getHealth: {
    path: "/health.v1.HealthService/GetHealth",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetHealthRequest) =>
      Buffer.from(GetHealthRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetHealthRequest.decode(value),
    responseSerialize: (value: GetHealthResponse) =>
      Buffer.from(GetHealthResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetHealthResponse.decode(value),
  },
} as const;

export interface HealthServiceServer extends UntypedServiceImplementation {
  getHealth: handleUnaryCall<GetHealthRequest, GetHealthResponse>;
}

export interface HealthServiceClient extends Client {
  getHealth(
    request: GetHealthRequest,
    callback: (error: ServiceError | null, response: GetHealthResponse) => void
  ): ClientUnaryCall;
  getHealth(
    request: GetHealthRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetHealthResponse) => void
  ): ClientUnaryCall;
  getHealth(
    request: GetHealthRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetHealthResponse) => void
  ): ClientUnaryCall;
}

export const HealthServiceClient = makeGenericClientConstructor(
  HealthService,
  "health.v1.HealthService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): HealthServiceClient;
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
