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
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "mifid.v1";

export enum MifidStatuses {
  MIFID_STATUSES_UNSPECIFIED = 0,
  MIFID_STATUSES_PASSED = 1,
  MIFID_STATUSES_FAILED = 2,
  MIFID_STATUSES_SKIPPED = 3,
  MIFID_STATUSES_IGNORED = 4,
  UNRECOGNIZED = -1,
}

export function mifidStatusesFromJSON(object: any): MifidStatuses {
  switch (object) {
    case 0:
    case "MIFID_STATUSES_UNSPECIFIED":
      return MifidStatuses.MIFID_STATUSES_UNSPECIFIED;
    case 1:
    case "MIFID_STATUSES_PASSED":
      return MifidStatuses.MIFID_STATUSES_PASSED;
    case 2:
    case "MIFID_STATUSES_FAILED":
      return MifidStatuses.MIFID_STATUSES_FAILED;
    case 3:
    case "MIFID_STATUSES_SKIPPED":
      return MifidStatuses.MIFID_STATUSES_SKIPPED;
    case 4:
    case "MIFID_STATUSES_IGNORED":
      return MifidStatuses.MIFID_STATUSES_IGNORED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MifidStatuses.UNRECOGNIZED;
  }
}

export function mifidStatusesToJSON(object: MifidStatuses): string {
  switch (object) {
    case MifidStatuses.MIFID_STATUSES_UNSPECIFIED:
      return "MIFID_STATUSES_UNSPECIFIED";
    case MifidStatuses.MIFID_STATUSES_PASSED:
      return "MIFID_STATUSES_PASSED";
    case MifidStatuses.MIFID_STATUSES_FAILED:
      return "MIFID_STATUSES_FAILED";
    case MifidStatuses.MIFID_STATUSES_SKIPPED:
      return "MIFID_STATUSES_SKIPPED";
    case MifidStatuses.MIFID_STATUSES_IGNORED:
      return "MIFID_STATUSES_IGNORED";
    default:
      return "UNKNOWN";
  }
}

export interface MifidSubmissions {
  extPartnerEntityId: string;
  status: MifidStatuses;
  score?: number | undefined;
  failReason?: string | undefined;
  updatedAt: Date;
  createdAt: Date;
  confirmedAt?: Date;
}

export interface CreateMifidSubmissionRequest {
  extPartnerEntityId: string;
  status: MifidStatuses;
  score?: number | undefined;
  failReason?: string | undefined;
}

export interface CreateMifidSubmissionResponse {
  success: boolean;
}

export interface GetMifidSubmissionRequest {
  extPartnerEntityId: string;
}

export interface GetMifidSubmissionResponse {
  mifid: MifidSubmissions;
}

const baseMifidSubmissions: object = { extPartnerEntityId: "", status: 0 };

export const MifidSubmissions = {
  encode(
    message: MifidSubmissions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.extPartnerEntityId !== "") {
      writer.uint32(10).string(message.extPartnerEntityId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.score !== undefined) {
      writer.uint32(24).int32(message.score);
    }
    if (message.failReason !== undefined) {
      writer.uint32(34).string(message.failReason);
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.confirmedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.confirmedAt),
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MifidSubmissions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMifidSubmissions } as MifidSubmissions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extPartnerEntityId = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.score = reader.int32();
          break;
        case 4:
          message.failReason = reader.string();
          break;
        case 5:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.confirmedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MifidSubmissions {
    const message = { ...baseMifidSubmissions } as MifidSubmissions;
    if (
      object.extPartnerEntityId !== undefined &&
      object.extPartnerEntityId !== null
    ) {
      message.extPartnerEntityId = String(object.extPartnerEntityId);
    } else {
      message.extPartnerEntityId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = mifidStatusesFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = Number(object.score);
    } else {
      message.score = undefined;
    }
    if (object.failReason !== undefined && object.failReason !== null) {
      message.failReason = String(object.failReason);
    } else {
      message.failReason = undefined;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    }
    if (object.confirmedAt !== undefined && object.confirmedAt !== null) {
      message.confirmedAt = fromJsonTimestamp(object.confirmedAt);
    } else {
      message.confirmedAt = undefined;
    }
    return message;
  },

  toJSON(message: MifidSubmissions): unknown {
    const obj: any = {};
    message.extPartnerEntityId !== undefined &&
      (obj.extPartnerEntityId = message.extPartnerEntityId);
    message.status !== undefined &&
      (obj.status = mifidStatusesToJSON(message.status));
    message.score !== undefined && (obj.score = message.score);
    message.failReason !== undefined && (obj.failReason = message.failReason);
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.confirmedAt !== undefined &&
      (obj.confirmedAt = message.confirmedAt.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<MifidSubmissions>): MifidSubmissions {
    const message = { ...baseMifidSubmissions } as MifidSubmissions;
    if (
      object.extPartnerEntityId !== undefined &&
      object.extPartnerEntityId !== null
    ) {
      message.extPartnerEntityId = object.extPartnerEntityId;
    } else {
      message.extPartnerEntityId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = object.score;
    } else {
      message.score = undefined;
    }
    if (object.failReason !== undefined && object.failReason !== null) {
      message.failReason = object.failReason;
    } else {
      message.failReason = undefined;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    }
    if (object.confirmedAt !== undefined && object.confirmedAt !== null) {
      message.confirmedAt = object.confirmedAt;
    } else {
      message.confirmedAt = undefined;
    }
    return message;
  },
};

const baseCreateMifidSubmissionRequest: object = {
  extPartnerEntityId: "",
  status: 0,
};

export const CreateMifidSubmissionRequest = {
  encode(
    message: CreateMifidSubmissionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.extPartnerEntityId !== "") {
      writer.uint32(10).string(message.extPartnerEntityId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.score !== undefined) {
      writer.uint32(24).int32(message.score);
    }
    if (message.failReason !== undefined) {
      writer.uint32(34).string(message.failReason);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateMifidSubmissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateMifidSubmissionRequest,
    } as CreateMifidSubmissionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extPartnerEntityId = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.score = reader.int32();
          break;
        case 4:
          message.failReason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateMifidSubmissionRequest {
    const message = {
      ...baseCreateMifidSubmissionRequest,
    } as CreateMifidSubmissionRequest;
    if (
      object.extPartnerEntityId !== undefined &&
      object.extPartnerEntityId !== null
    ) {
      message.extPartnerEntityId = String(object.extPartnerEntityId);
    } else {
      message.extPartnerEntityId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = mifidStatusesFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = Number(object.score);
    } else {
      message.score = undefined;
    }
    if (object.failReason !== undefined && object.failReason !== null) {
      message.failReason = String(object.failReason);
    } else {
      message.failReason = undefined;
    }
    return message;
  },

  toJSON(message: CreateMifidSubmissionRequest): unknown {
    const obj: any = {};
    message.extPartnerEntityId !== undefined &&
      (obj.extPartnerEntityId = message.extPartnerEntityId);
    message.status !== undefined &&
      (obj.status = mifidStatusesToJSON(message.status));
    message.score !== undefined && (obj.score = message.score);
    message.failReason !== undefined && (obj.failReason = message.failReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateMifidSubmissionRequest>
  ): CreateMifidSubmissionRequest {
    const message = {
      ...baseCreateMifidSubmissionRequest,
    } as CreateMifidSubmissionRequest;
    if (
      object.extPartnerEntityId !== undefined &&
      object.extPartnerEntityId !== null
    ) {
      message.extPartnerEntityId = object.extPartnerEntityId;
    } else {
      message.extPartnerEntityId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = object.score;
    } else {
      message.score = undefined;
    }
    if (object.failReason !== undefined && object.failReason !== null) {
      message.failReason = object.failReason;
    } else {
      message.failReason = undefined;
    }
    return message;
  },
};

const baseCreateMifidSubmissionResponse: object = { success: false };

export const CreateMifidSubmissionResponse = {
  encode(
    message: CreateMifidSubmissionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateMifidSubmissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateMifidSubmissionResponse,
    } as CreateMifidSubmissionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateMifidSubmissionResponse {
    const message = {
      ...baseCreateMifidSubmissionResponse,
    } as CreateMifidSubmissionResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    return message;
  },

  toJSON(message: CreateMifidSubmissionResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateMifidSubmissionResponse>
  ): CreateMifidSubmissionResponse {
    const message = {
      ...baseCreateMifidSubmissionResponse,
    } as CreateMifidSubmissionResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    return message;
  },
};

const baseGetMifidSubmissionRequest: object = { extPartnerEntityId: "" };

export const GetMifidSubmissionRequest = {
  encode(
    message: GetMifidSubmissionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.extPartnerEntityId !== "") {
      writer.uint32(10).string(message.extPartnerEntityId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetMifidSubmissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetMifidSubmissionRequest,
    } as GetMifidSubmissionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extPartnerEntityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMifidSubmissionRequest {
    const message = {
      ...baseGetMifidSubmissionRequest,
    } as GetMifidSubmissionRequest;
    if (
      object.extPartnerEntityId !== undefined &&
      object.extPartnerEntityId !== null
    ) {
      message.extPartnerEntityId = String(object.extPartnerEntityId);
    } else {
      message.extPartnerEntityId = "";
    }
    return message;
  },

  toJSON(message: GetMifidSubmissionRequest): unknown {
    const obj: any = {};
    message.extPartnerEntityId !== undefined &&
      (obj.extPartnerEntityId = message.extPartnerEntityId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetMifidSubmissionRequest>
  ): GetMifidSubmissionRequest {
    const message = {
      ...baseGetMifidSubmissionRequest,
    } as GetMifidSubmissionRequest;
    if (
      object.extPartnerEntityId !== undefined &&
      object.extPartnerEntityId !== null
    ) {
      message.extPartnerEntityId = object.extPartnerEntityId;
    } else {
      message.extPartnerEntityId = "";
    }
    return message;
  },
};

const baseGetMifidSubmissionResponse: object = {};

export const GetMifidSubmissionResponse = {
  encode(
    message: GetMifidSubmissionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mifid !== undefined) {
      MifidSubmissions.encode(message.mifid, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetMifidSubmissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetMifidSubmissionResponse,
    } as GetMifidSubmissionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mifid = MifidSubmissions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMifidSubmissionResponse {
    const message = {
      ...baseGetMifidSubmissionResponse,
    } as GetMifidSubmissionResponse;
    if (object.mifid !== undefined && object.mifid !== null) {
      message.mifid = MifidSubmissions.fromJSON(object.mifid);
    }
    return message;
  },

  toJSON(message: GetMifidSubmissionResponse): unknown {
    const obj: any = {};
    message.mifid !== undefined &&
      (obj.mifid = message.mifid
        ? MifidSubmissions.toJSON(message.mifid)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetMifidSubmissionResponse>
  ): GetMifidSubmissionResponse {
    const message = {
      ...baseGetMifidSubmissionResponse,
    } as GetMifidSubmissionResponse;
    if (object.mifid !== undefined && object.mifid !== null) {
      message.mifid = MifidSubmissions.fromPartial(object.mifid);
    }
    return message;
  },
};

export const MifidService = {
  getMifidSubmission: {
    path: "/mifid.v1.MifidService/GetMifidSubmission",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetMifidSubmissionRequest) =>
      Buffer.from(GetMifidSubmissionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetMifidSubmissionRequest.decode(value),
    responseSerialize: (value: GetMifidSubmissionResponse) =>
      Buffer.from(GetMifidSubmissionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetMifidSubmissionResponse.decode(value),
  },
  createMifidSubmission: {
    path: "/mifid.v1.MifidService/CreateMifidSubmission",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateMifidSubmissionRequest) =>
      Buffer.from(CreateMifidSubmissionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateMifidSubmissionRequest.decode(value),
    responseSerialize: (value: CreateMifidSubmissionResponse) =>
      Buffer.from(CreateMifidSubmissionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      CreateMifidSubmissionResponse.decode(value),
  },
} as const;

export interface MifidServiceServer extends UntypedServiceImplementation {
  getMifidSubmission: handleUnaryCall<
    GetMifidSubmissionRequest,
    GetMifidSubmissionResponse
  >;
  createMifidSubmission: handleUnaryCall<
    CreateMifidSubmissionRequest,
    CreateMifidSubmissionResponse
  >;
}

export interface MifidServiceClient extends Client {
  getMifidSubmission(
    request: GetMifidSubmissionRequest,
    callback: (
      error: ServiceError | null,
      response: GetMifidSubmissionResponse
    ) => void
  ): ClientUnaryCall;
  getMifidSubmission(
    request: GetMifidSubmissionRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetMifidSubmissionResponse
    ) => void
  ): ClientUnaryCall;
  getMifidSubmission(
    request: GetMifidSubmissionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetMifidSubmissionResponse
    ) => void
  ): ClientUnaryCall;
  createMifidSubmission(
    request: CreateMifidSubmissionRequest,
    callback: (
      error: ServiceError | null,
      response: CreateMifidSubmissionResponse
    ) => void
  ): ClientUnaryCall;
  createMifidSubmission(
    request: CreateMifidSubmissionRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreateMifidSubmissionResponse
    ) => void
  ): ClientUnaryCall;
  createMifidSubmission(
    request: CreateMifidSubmissionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreateMifidSubmissionResponse
    ) => void
  ): ClientUnaryCall;
}

export const MifidServiceClient = makeGenericClientConstructor(
  MifidService,
  "mifid.v1.MifidService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): MifidServiceClient;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
