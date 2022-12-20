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
import {
  SourceOfWealth,
  StatusTransitionReason,
  sourceOfWealthFromJSON,
  sourceOfWealthToJSON,
  statusTransitionReasonFromJSON,
  statusTransitionReasonToJSON,
} from "../../common/v1/common";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "users.v1";

/** Basic User Information for the sake of reusability */
export interface UserBasicInformation {
  firstName: string;
  lastName: string;
  gender: string;
  streetName: string;
  houseNumber: string;
  zipCode: string;
  city: string;
  countryOfBirth: string;
  countryPrimCitizen: string;
  birthPlace: string;
  birthDate: Date;
  taxNumber: string;
  countryTaxation: string;
  isBlocked: boolean;
  isChurchMember: boolean;
  refBankIban: string;
  sourceOfWealth: SourceOfWealth;
  /** first_name + last_name */
  refBankAccOwner: string;
  countryCode: string;
}

export interface User {
  id: string;
  extPartnerUserId: string;
  basicInformation: UserBasicInformation;
  nuriInvestTncsAcceptedAt: Date;
  extPartnerTncsAcceptedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

/** Get User */
export interface GetUserRequest {
  extPartnerUserId: string;
}

export interface GetUserResponse {
  user?: User;
}

/** Create User */
export interface CreateUserRequest {
  basicInformation: UserBasicInformation;
  nuriInvestTncsAcceptedAt: Date;
  extPartnerTncsAcceptedAt: Date;
  email: string;
  solarisAccountId: string;
  solarisPersonId: string;
}

export interface CreateUserResponse {
  extPartnerUserId: string;
}

/** Set User Status */
export interface SetUserStatusRequest {
  extPartnerUserId: string;
  isBlocked: boolean;
  reason: StatusTransitionReason;
}

export interface SetUserStatusResponse {
  isBlocked: boolean;
}

/** Get User Status */
export interface GetUserStatusRequest {
  extPartnerUserId: string;
}

export interface GetUserStatusResponse {
  isBlocked: boolean;
  reason: StatusTransitionReason;
}

const baseUserBasicInformation: object = {
  firstName: "",
  lastName: "",
  gender: "",
  streetName: "",
  houseNumber: "",
  zipCode: "",
  city: "",
  countryOfBirth: "",
  countryPrimCitizen: "",
  birthPlace: "",
  taxNumber: "",
  countryTaxation: "",
  isBlocked: false,
  isChurchMember: false,
  refBankIban: "",
  sourceOfWealth: 0,
  refBankAccOwner: "",
  countryCode: "",
};

export const UserBasicInformation = {
  encode(
    message: UserBasicInformation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.firstName !== "") {
      writer.uint32(10).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(18).string(message.lastName);
    }
    if (message.gender !== "") {
      writer.uint32(26).string(message.gender);
    }
    if (message.streetName !== "") {
      writer.uint32(34).string(message.streetName);
    }
    if (message.houseNumber !== "") {
      writer.uint32(42).string(message.houseNumber);
    }
    if (message.zipCode !== "") {
      writer.uint32(50).string(message.zipCode);
    }
    if (message.city !== "") {
      writer.uint32(58).string(message.city);
    }
    if (message.countryOfBirth !== "") {
      writer.uint32(66).string(message.countryOfBirth);
    }
    if (message.countryPrimCitizen !== "") {
      writer.uint32(74).string(message.countryPrimCitizen);
    }
    if (message.birthPlace !== "") {
      writer.uint32(82).string(message.birthPlace);
    }
    if (message.birthDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.birthDate),
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.taxNumber !== "") {
      writer.uint32(98).string(message.taxNumber);
    }
    if (message.countryTaxation !== "") {
      writer.uint32(106).string(message.countryTaxation);
    }
    if (message.isBlocked === true) {
      writer.uint32(112).bool(message.isBlocked);
    }
    if (message.isChurchMember === true) {
      writer.uint32(120).bool(message.isChurchMember);
    }
    if (message.refBankIban !== "") {
      writer.uint32(130).string(message.refBankIban);
    }
    if (message.sourceOfWealth !== 0) {
      writer.uint32(136).int32(message.sourceOfWealth);
    }
    if (message.refBankAccOwner !== "") {
      writer.uint32(146).string(message.refBankAccOwner);
    }
    if (message.countryCode !== "") {
      writer.uint32(154).string(message.countryCode);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UserBasicInformation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserBasicInformation } as UserBasicInformation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.firstName = reader.string();
          break;
        case 2:
          message.lastName = reader.string();
          break;
        case 3:
          message.gender = reader.string();
          break;
        case 4:
          message.streetName = reader.string();
          break;
        case 5:
          message.houseNumber = reader.string();
          break;
        case 6:
          message.zipCode = reader.string();
          break;
        case 7:
          message.city = reader.string();
          break;
        case 8:
          message.countryOfBirth = reader.string();
          break;
        case 9:
          message.countryPrimCitizen = reader.string();
          break;
        case 10:
          message.birthPlace = reader.string();
          break;
        case 11:
          message.birthDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.taxNumber = reader.string();
          break;
        case 13:
          message.countryTaxation = reader.string();
          break;
        case 14:
          message.isBlocked = reader.bool();
          break;
        case 15:
          message.isChurchMember = reader.bool();
          break;
        case 16:
          message.refBankIban = reader.string();
          break;
        case 17:
          message.sourceOfWealth = reader.int32() as any;
          break;
        case 18:
          message.refBankAccOwner = reader.string();
          break;
        case 19:
          message.countryCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserBasicInformation {
    const message = { ...baseUserBasicInformation } as UserBasicInformation;
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = String(object.firstName);
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = String(object.lastName);
    } else {
      message.lastName = "";
    }
    if (object.gender !== undefined && object.gender !== null) {
      message.gender = String(object.gender);
    } else {
      message.gender = "";
    }
    if (object.streetName !== undefined && object.streetName !== null) {
      message.streetName = String(object.streetName);
    } else {
      message.streetName = "";
    }
    if (object.houseNumber !== undefined && object.houseNumber !== null) {
      message.houseNumber = String(object.houseNumber);
    } else {
      message.houseNumber = "";
    }
    if (object.zipCode !== undefined && object.zipCode !== null) {
      message.zipCode = String(object.zipCode);
    } else {
      message.zipCode = "";
    }
    if (object.city !== undefined && object.city !== null) {
      message.city = String(object.city);
    } else {
      message.city = "";
    }
    if (object.countryOfBirth !== undefined && object.countryOfBirth !== null) {
      message.countryOfBirth = String(object.countryOfBirth);
    } else {
      message.countryOfBirth = "";
    }
    if (
      object.countryPrimCitizen !== undefined &&
      object.countryPrimCitizen !== null
    ) {
      message.countryPrimCitizen = String(object.countryPrimCitizen);
    } else {
      message.countryPrimCitizen = "";
    }
    if (object.birthPlace !== undefined && object.birthPlace !== null) {
      message.birthPlace = String(object.birthPlace);
    } else {
      message.birthPlace = "";
    }
    if (object.birthDate !== undefined && object.birthDate !== null) {
      message.birthDate = fromJsonTimestamp(object.birthDate);
    }
    if (object.taxNumber !== undefined && object.taxNumber !== null) {
      message.taxNumber = String(object.taxNumber);
    } else {
      message.taxNumber = "";
    }
    if (
      object.countryTaxation !== undefined &&
      object.countryTaxation !== null
    ) {
      message.countryTaxation = String(object.countryTaxation);
    } else {
      message.countryTaxation = "";
    }
    if (object.isBlocked !== undefined && object.isBlocked !== null) {
      message.isBlocked = Boolean(object.isBlocked);
    } else {
      message.isBlocked = false;
    }
    if (object.isChurchMember !== undefined && object.isChurchMember !== null) {
      message.isChurchMember = Boolean(object.isChurchMember);
    } else {
      message.isChurchMember = false;
    }
    if (object.refBankIban !== undefined && object.refBankIban !== null) {
      message.refBankIban = String(object.refBankIban);
    } else {
      message.refBankIban = "";
    }
    if (object.sourceOfWealth !== undefined && object.sourceOfWealth !== null) {
      message.sourceOfWealth = sourceOfWealthFromJSON(object.sourceOfWealth);
    } else {
      message.sourceOfWealth = 0;
    }
    if (
      object.refBankAccOwner !== undefined &&
      object.refBankAccOwner !== null
    ) {
      message.refBankAccOwner = String(object.refBankAccOwner);
    } else {
      message.refBankAccOwner = "";
    }
    if (object.countryCode !== undefined && object.countryCode !== null) {
      message.countryCode = String(object.countryCode);
    } else {
      message.countryCode = "";
    }
    return message;
  },

  toJSON(message: UserBasicInformation): unknown {
    const obj: any = {};
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.gender !== undefined && (obj.gender = message.gender);
    message.streetName !== undefined && (obj.streetName = message.streetName);
    message.houseNumber !== undefined &&
      (obj.houseNumber = message.houseNumber);
    message.zipCode !== undefined && (obj.zipCode = message.zipCode);
    message.city !== undefined && (obj.city = message.city);
    message.countryOfBirth !== undefined &&
      (obj.countryOfBirth = message.countryOfBirth);
    message.countryPrimCitizen !== undefined &&
      (obj.countryPrimCitizen = message.countryPrimCitizen);
    message.birthPlace !== undefined && (obj.birthPlace = message.birthPlace);
    message.birthDate !== undefined &&
      (obj.birthDate = message.birthDate.toISOString());
    message.taxNumber !== undefined && (obj.taxNumber = message.taxNumber);
    message.countryTaxation !== undefined &&
      (obj.countryTaxation = message.countryTaxation);
    message.isBlocked !== undefined && (obj.isBlocked = message.isBlocked);
    message.isChurchMember !== undefined &&
      (obj.isChurchMember = message.isChurchMember);
    message.refBankIban !== undefined &&
      (obj.refBankIban = message.refBankIban);
    message.sourceOfWealth !== undefined &&
      (obj.sourceOfWealth = sourceOfWealthToJSON(message.sourceOfWealth));
    message.refBankAccOwner !== undefined &&
      (obj.refBankAccOwner = message.refBankAccOwner);
    message.countryCode !== undefined &&
      (obj.countryCode = message.countryCode);
    return obj;
  },

  fromPartial(object: DeepPartial<UserBasicInformation>): UserBasicInformation {
    const message = { ...baseUserBasicInformation } as UserBasicInformation;
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = object.firstName;
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = object.lastName;
    } else {
      message.lastName = "";
    }
    if (object.gender !== undefined && object.gender !== null) {
      message.gender = object.gender;
    } else {
      message.gender = "";
    }
    if (object.streetName !== undefined && object.streetName !== null) {
      message.streetName = object.streetName;
    } else {
      message.streetName = "";
    }
    if (object.houseNumber !== undefined && object.houseNumber !== null) {
      message.houseNumber = object.houseNumber;
    } else {
      message.houseNumber = "";
    }
    if (object.zipCode !== undefined && object.zipCode !== null) {
      message.zipCode = object.zipCode;
    } else {
      message.zipCode = "";
    }
    if (object.city !== undefined && object.city !== null) {
      message.city = object.city;
    } else {
      message.city = "";
    }
    if (object.countryOfBirth !== undefined && object.countryOfBirth !== null) {
      message.countryOfBirth = object.countryOfBirth;
    } else {
      message.countryOfBirth = "";
    }
    if (
      object.countryPrimCitizen !== undefined &&
      object.countryPrimCitizen !== null
    ) {
      message.countryPrimCitizen = object.countryPrimCitizen;
    } else {
      message.countryPrimCitizen = "";
    }
    if (object.birthPlace !== undefined && object.birthPlace !== null) {
      message.birthPlace = object.birthPlace;
    } else {
      message.birthPlace = "";
    }
    if (object.birthDate !== undefined && object.birthDate !== null) {
      message.birthDate = object.birthDate;
    }
    if (object.taxNumber !== undefined && object.taxNumber !== null) {
      message.taxNumber = object.taxNumber;
    } else {
      message.taxNumber = "";
    }
    if (
      object.countryTaxation !== undefined &&
      object.countryTaxation !== null
    ) {
      message.countryTaxation = object.countryTaxation;
    } else {
      message.countryTaxation = "";
    }
    if (object.isBlocked !== undefined && object.isBlocked !== null) {
      message.isBlocked = object.isBlocked;
    } else {
      message.isBlocked = false;
    }
    if (object.isChurchMember !== undefined && object.isChurchMember !== null) {
      message.isChurchMember = object.isChurchMember;
    } else {
      message.isChurchMember = false;
    }
    if (object.refBankIban !== undefined && object.refBankIban !== null) {
      message.refBankIban = object.refBankIban;
    } else {
      message.refBankIban = "";
    }
    if (object.sourceOfWealth !== undefined && object.sourceOfWealth !== null) {
      message.sourceOfWealth = object.sourceOfWealth;
    } else {
      message.sourceOfWealth = 0;
    }
    if (
      object.refBankAccOwner !== undefined &&
      object.refBankAccOwner !== null
    ) {
      message.refBankAccOwner = object.refBankAccOwner;
    } else {
      message.refBankAccOwner = "";
    }
    if (object.countryCode !== undefined && object.countryCode !== null) {
      message.countryCode = object.countryCode;
    } else {
      message.countryCode = "";
    }
    return message;
  },
};

const baseUser: object = { id: "", extPartnerUserId: "" };

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.extPartnerUserId !== "") {
      writer.uint32(18).string(message.extPartnerUserId);
    }
    if (message.basicInformation !== undefined) {
      UserBasicInformation.encode(
        message.basicInformation,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.nuriInvestTncsAcceptedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.nuriInvestTncsAcceptedAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.extPartnerTncsAcceptedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.extPartnerTncsAcceptedAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUser } as User;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.extPartnerUserId = reader.string();
          break;
        case 3:
          message.basicInformation = UserBasicInformation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.nuriInvestTncsAcceptedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.extPartnerTncsAcceptedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.updatedAt = fromTimestamp(
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

  fromJSON(object: any): User {
    const message = { ...baseUser } as User;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (
      object.extPartnerUserId !== undefined &&
      object.extPartnerUserId !== null
    ) {
      message.extPartnerUserId = String(object.extPartnerUserId);
    } else {
      message.extPartnerUserId = "";
    }
    if (
      object.basicInformation !== undefined &&
      object.basicInformation !== null
    ) {
      message.basicInformation = UserBasicInformation.fromJSON(
        object.basicInformation
      );
    }
    if (
      object.nuriInvestTncsAcceptedAt !== undefined &&
      object.nuriInvestTncsAcceptedAt !== null
    ) {
      message.nuriInvestTncsAcceptedAt = fromJsonTimestamp(
        object.nuriInvestTncsAcceptedAt
      );
    }
    if (
      object.extPartnerTncsAcceptedAt !== undefined &&
      object.extPartnerTncsAcceptedAt !== null
    ) {
      message.extPartnerTncsAcceptedAt = fromJsonTimestamp(
        object.extPartnerTncsAcceptedAt
      );
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    }
    return message;
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.extPartnerUserId !== undefined &&
      (obj.extPartnerUserId = message.extPartnerUserId);
    message.basicInformation !== undefined &&
      (obj.basicInformation = message.basicInformation
        ? UserBasicInformation.toJSON(message.basicInformation)
        : undefined);
    message.nuriInvestTncsAcceptedAt !== undefined &&
      (obj.nuriInvestTncsAcceptedAt =
        message.nuriInvestTncsAcceptedAt.toISOString());
    message.extPartnerTncsAcceptedAt !== undefined &&
      (obj.extPartnerTncsAcceptedAt =
        message.extPartnerTncsAcceptedAt.toISOString());
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<User>): User {
    const message = { ...baseUser } as User;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (
      object.extPartnerUserId !== undefined &&
      object.extPartnerUserId !== null
    ) {
      message.extPartnerUserId = object.extPartnerUserId;
    } else {
      message.extPartnerUserId = "";
    }
    if (
      object.basicInformation !== undefined &&
      object.basicInformation !== null
    ) {
      message.basicInformation = UserBasicInformation.fromPartial(
        object.basicInformation
      );
    }
    if (
      object.nuriInvestTncsAcceptedAt !== undefined &&
      object.nuriInvestTncsAcceptedAt !== null
    ) {
      message.nuriInvestTncsAcceptedAt = object.nuriInvestTncsAcceptedAt;
    }
    if (
      object.extPartnerTncsAcceptedAt !== undefined &&
      object.extPartnerTncsAcceptedAt !== null
    ) {
      message.extPartnerTncsAcceptedAt = object.extPartnerTncsAcceptedAt;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    }
    return message;
  },
};

const baseGetUserRequest: object = { extPartnerUserId: "" };

export const GetUserRequest = {
  encode(
    message: GetUserRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.extPartnerUserId !== "") {
      writer.uint32(10).string(message.extPartnerUserId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUserRequest } as GetUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extPartnerUserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserRequest {
    const message = { ...baseGetUserRequest } as GetUserRequest;
    if (
      object.extPartnerUserId !== undefined &&
      object.extPartnerUserId !== null
    ) {
      message.extPartnerUserId = String(object.extPartnerUserId);
    } else {
      message.extPartnerUserId = "";
    }
    return message;
  },

  toJSON(message: GetUserRequest): unknown {
    const obj: any = {};
    message.extPartnerUserId !== undefined &&
      (obj.extPartnerUserId = message.extPartnerUserId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetUserRequest>): GetUserRequest {
    const message = { ...baseGetUserRequest } as GetUserRequest;
    if (
      object.extPartnerUserId !== undefined &&
      object.extPartnerUserId !== null
    ) {
      message.extPartnerUserId = object.extPartnerUserId;
    } else {
      message.extPartnerUserId = "";
    }
    return message;
  },
};

const baseGetUserResponse: object = {};

export const GetUserResponse = {
  encode(
    message: GetUserResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUserResponse } as GetUserResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserResponse {
    const message = { ...baseGetUserResponse } as GetUserResponse;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },

  toJSON(message: GetUserResponse): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetUserResponse>): GetUserResponse {
    const message = { ...baseGetUserResponse } as GetUserResponse;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },
};

const baseCreateUserRequest: object = {
  email: "",
  solarisAccountId: "",
  solarisPersonId: "",
};

export const CreateUserRequest = {
  encode(
    message: CreateUserRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.basicInformation !== undefined) {
      UserBasicInformation.encode(
        message.basicInformation,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.nuriInvestTncsAcceptedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.nuriInvestTncsAcceptedAt),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.extPartnerTncsAcceptedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.extPartnerTncsAcceptedAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    if (message.solarisAccountId !== "") {
      writer.uint32(42).string(message.solarisAccountId);
    }
    if (message.solarisPersonId !== "") {
      writer.uint32(50).string(message.solarisPersonId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateUserRequest } as CreateUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basicInformation = UserBasicInformation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.nuriInvestTncsAcceptedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.extPartnerTncsAcceptedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.email = reader.string();
          break;
        case 5:
          message.solarisAccountId = reader.string();
          break;
        case 6:
          message.solarisPersonId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateUserRequest {
    const message = { ...baseCreateUserRequest } as CreateUserRequest;
    if (
      object.basicInformation !== undefined &&
      object.basicInformation !== null
    ) {
      message.basicInformation = UserBasicInformation.fromJSON(
        object.basicInformation
      );
    }
    if (
      object.nuriInvestTncsAcceptedAt !== undefined &&
      object.nuriInvestTncsAcceptedAt !== null
    ) {
      message.nuriInvestTncsAcceptedAt = fromJsonTimestamp(
        object.nuriInvestTncsAcceptedAt
      );
    }
    if (
      object.extPartnerTncsAcceptedAt !== undefined &&
      object.extPartnerTncsAcceptedAt !== null
    ) {
      message.extPartnerTncsAcceptedAt = fromJsonTimestamp(
        object.extPartnerTncsAcceptedAt
      );
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (
      object.solarisAccountId !== undefined &&
      object.solarisAccountId !== null
    ) {
      message.solarisAccountId = String(object.solarisAccountId);
    } else {
      message.solarisAccountId = "";
    }
    if (
      object.solarisPersonId !== undefined &&
      object.solarisPersonId !== null
    ) {
      message.solarisPersonId = String(object.solarisPersonId);
    } else {
      message.solarisPersonId = "";
    }
    return message;
  },

  toJSON(message: CreateUserRequest): unknown {
    const obj: any = {};
    message.basicInformation !== undefined &&
      (obj.basicInformation = message.basicInformation
        ? UserBasicInformation.toJSON(message.basicInformation)
        : undefined);
    message.nuriInvestTncsAcceptedAt !== undefined &&
      (obj.nuriInvestTncsAcceptedAt =
        message.nuriInvestTncsAcceptedAt.toISOString());
    message.extPartnerTncsAcceptedAt !== undefined &&
      (obj.extPartnerTncsAcceptedAt =
        message.extPartnerTncsAcceptedAt.toISOString());
    message.email !== undefined && (obj.email = message.email);
    message.solarisAccountId !== undefined &&
      (obj.solarisAccountId = message.solarisAccountId);
    message.solarisPersonId !== undefined &&
      (obj.solarisPersonId = message.solarisPersonId);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateUserRequest>): CreateUserRequest {
    const message = { ...baseCreateUserRequest } as CreateUserRequest;
    if (
      object.basicInformation !== undefined &&
      object.basicInformation !== null
    ) {
      message.basicInformation = UserBasicInformation.fromPartial(
        object.basicInformation
      );
    }
    if (
      object.nuriInvestTncsAcceptedAt !== undefined &&
      object.nuriInvestTncsAcceptedAt !== null
    ) {
      message.nuriInvestTncsAcceptedAt = object.nuriInvestTncsAcceptedAt;
    }
    if (
      object.extPartnerTncsAcceptedAt !== undefined &&
      object.extPartnerTncsAcceptedAt !== null
    ) {
      message.extPartnerTncsAcceptedAt = object.extPartnerTncsAcceptedAt;
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (
      object.solarisAccountId !== undefined &&
      object.solarisAccountId !== null
    ) {
      message.solarisAccountId = object.solarisAccountId;
    } else {
      message.solarisAccountId = "";
    }
    if (
      object.solarisPersonId !== undefined &&
      object.solarisPersonId !== null
    ) {
      message.solarisPersonId = object.solarisPersonId;
    } else {
      message.solarisPersonId = "";
    }
    return message;
  },
};

const baseCreateUserResponse: object = { extPartnerUserId: "" };

export const CreateUserResponse = {
  encode(
    message: CreateUserResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.extPartnerUserId !== "") {
      writer.uint32(10).string(message.extPartnerUserId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateUserResponse } as CreateUserResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extPartnerUserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateUserResponse {
    const message = { ...baseCreateUserResponse } as CreateUserResponse;
    if (
      object.extPartnerUserId !== undefined &&
      object.extPartnerUserId !== null
    ) {
      message.extPartnerUserId = String(object.extPartnerUserId);
    } else {
      message.extPartnerUserId = "";
    }
    return message;
  },

  toJSON(message: CreateUserResponse): unknown {
    const obj: any = {};
    message.extPartnerUserId !== undefined &&
      (obj.extPartnerUserId = message.extPartnerUserId);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateUserResponse>): CreateUserResponse {
    const message = { ...baseCreateUserResponse } as CreateUserResponse;
    if (
      object.extPartnerUserId !== undefined &&
      object.extPartnerUserId !== null
    ) {
      message.extPartnerUserId = object.extPartnerUserId;
    } else {
      message.extPartnerUserId = "";
    }
    return message;
  },
};

const baseSetUserStatusRequest: object = {
  extPartnerUserId: "",
  isBlocked: false,
  reason: 0,
};

export const SetUserStatusRequest = {
  encode(
    message: SetUserStatusRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.extPartnerUserId !== "") {
      writer.uint32(10).string(message.extPartnerUserId);
    }
    if (message.isBlocked === true) {
      writer.uint32(16).bool(message.isBlocked);
    }
    if (message.reason !== 0) {
      writer.uint32(24).int32(message.reason);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetUserStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetUserStatusRequest } as SetUserStatusRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extPartnerUserId = reader.string();
          break;
        case 2:
          message.isBlocked = reader.bool();
          break;
        case 3:
          message.reason = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetUserStatusRequest {
    const message = { ...baseSetUserStatusRequest } as SetUserStatusRequest;
    if (
      object.extPartnerUserId !== undefined &&
      object.extPartnerUserId !== null
    ) {
      message.extPartnerUserId = String(object.extPartnerUserId);
    } else {
      message.extPartnerUserId = "";
    }
    if (object.isBlocked !== undefined && object.isBlocked !== null) {
      message.isBlocked = Boolean(object.isBlocked);
    } else {
      message.isBlocked = false;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = statusTransitionReasonFromJSON(object.reason);
    } else {
      message.reason = 0;
    }
    return message;
  },

  toJSON(message: SetUserStatusRequest): unknown {
    const obj: any = {};
    message.extPartnerUserId !== undefined &&
      (obj.extPartnerUserId = message.extPartnerUserId);
    message.isBlocked !== undefined && (obj.isBlocked = message.isBlocked);
    message.reason !== undefined &&
      (obj.reason = statusTransitionReasonToJSON(message.reason));
    return obj;
  },

  fromPartial(object: DeepPartial<SetUserStatusRequest>): SetUserStatusRequest {
    const message = { ...baseSetUserStatusRequest } as SetUserStatusRequest;
    if (
      object.extPartnerUserId !== undefined &&
      object.extPartnerUserId !== null
    ) {
      message.extPartnerUserId = object.extPartnerUserId;
    } else {
      message.extPartnerUserId = "";
    }
    if (object.isBlocked !== undefined && object.isBlocked !== null) {
      message.isBlocked = object.isBlocked;
    } else {
      message.isBlocked = false;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    } else {
      message.reason = 0;
    }
    return message;
  },
};

const baseSetUserStatusResponse: object = { isBlocked: false };

export const SetUserStatusResponse = {
  encode(
    message: SetUserStatusResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isBlocked === true) {
      writer.uint32(8).bool(message.isBlocked);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetUserStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetUserStatusResponse } as SetUserStatusResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isBlocked = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetUserStatusResponse {
    const message = { ...baseSetUserStatusResponse } as SetUserStatusResponse;
    if (object.isBlocked !== undefined && object.isBlocked !== null) {
      message.isBlocked = Boolean(object.isBlocked);
    } else {
      message.isBlocked = false;
    }
    return message;
  },

  toJSON(message: SetUserStatusResponse): unknown {
    const obj: any = {};
    message.isBlocked !== undefined && (obj.isBlocked = message.isBlocked);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetUserStatusResponse>
  ): SetUserStatusResponse {
    const message = { ...baseSetUserStatusResponse } as SetUserStatusResponse;
    if (object.isBlocked !== undefined && object.isBlocked !== null) {
      message.isBlocked = object.isBlocked;
    } else {
      message.isBlocked = false;
    }
    return message;
  },
};

const baseGetUserStatusRequest: object = { extPartnerUserId: "" };

export const GetUserStatusRequest = {
  encode(
    message: GetUserStatusRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.extPartnerUserId !== "") {
      writer.uint32(10).string(message.extPartnerUserId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetUserStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUserStatusRequest } as GetUserStatusRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extPartnerUserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserStatusRequest {
    const message = { ...baseGetUserStatusRequest } as GetUserStatusRequest;
    if (
      object.extPartnerUserId !== undefined &&
      object.extPartnerUserId !== null
    ) {
      message.extPartnerUserId = String(object.extPartnerUserId);
    } else {
      message.extPartnerUserId = "";
    }
    return message;
  },

  toJSON(message: GetUserStatusRequest): unknown {
    const obj: any = {};
    message.extPartnerUserId !== undefined &&
      (obj.extPartnerUserId = message.extPartnerUserId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetUserStatusRequest>): GetUserStatusRequest {
    const message = { ...baseGetUserStatusRequest } as GetUserStatusRequest;
    if (
      object.extPartnerUserId !== undefined &&
      object.extPartnerUserId !== null
    ) {
      message.extPartnerUserId = object.extPartnerUserId;
    } else {
      message.extPartnerUserId = "";
    }
    return message;
  },
};

const baseGetUserStatusResponse: object = { isBlocked: false, reason: 0 };

export const GetUserStatusResponse = {
  encode(
    message: GetUserStatusResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isBlocked === true) {
      writer.uint32(8).bool(message.isBlocked);
    }
    if (message.reason !== 0) {
      writer.uint32(16).int32(message.reason);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetUserStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUserStatusResponse } as GetUserStatusResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isBlocked = reader.bool();
          break;
        case 2:
          message.reason = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserStatusResponse {
    const message = { ...baseGetUserStatusResponse } as GetUserStatusResponse;
    if (object.isBlocked !== undefined && object.isBlocked !== null) {
      message.isBlocked = Boolean(object.isBlocked);
    } else {
      message.isBlocked = false;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = statusTransitionReasonFromJSON(object.reason);
    } else {
      message.reason = 0;
    }
    return message;
  },

  toJSON(message: GetUserStatusResponse): unknown {
    const obj: any = {};
    message.isBlocked !== undefined && (obj.isBlocked = message.isBlocked);
    message.reason !== undefined &&
      (obj.reason = statusTransitionReasonToJSON(message.reason));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetUserStatusResponse>
  ): GetUserStatusResponse {
    const message = { ...baseGetUserStatusResponse } as GetUserStatusResponse;
    if (object.isBlocked !== undefined && object.isBlocked !== null) {
      message.isBlocked = object.isBlocked;
    } else {
      message.isBlocked = false;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    } else {
      message.reason = 0;
    }
    return message;
  },
};

/** User Service Definition */
export const UsersService = {
  getUser: {
    path: "/users.v1.UsersService/GetUser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUserRequest) =>
      Buffer.from(GetUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUserRequest.decode(value),
    responseSerialize: (value: GetUserResponse) =>
      Buffer.from(GetUserResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetUserResponse.decode(value),
  },
  createUser: {
    path: "/users.v1.UsersService/CreateUser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateUserRequest) =>
      Buffer.from(CreateUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateUserRequest.decode(value),
    responseSerialize: (value: CreateUserResponse) =>
      Buffer.from(CreateUserResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateUserResponse.decode(value),
  },
  setUserStatus: {
    path: "/users.v1.UsersService/SetUserStatus",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetUserStatusRequest) =>
      Buffer.from(SetUserStatusRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetUserStatusRequest.decode(value),
    responseSerialize: (value: SetUserStatusResponse) =>
      Buffer.from(SetUserStatusResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SetUserStatusResponse.decode(value),
  },
  getUserStatus: {
    path: "/users.v1.UsersService/GetUserStatus",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUserStatusRequest) =>
      Buffer.from(GetUserStatusRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUserStatusRequest.decode(value),
    responseSerialize: (value: GetUserStatusResponse) =>
      Buffer.from(GetUserStatusResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetUserStatusResponse.decode(value),
  },
} as const;

export interface UsersServiceServer extends UntypedServiceImplementation {
  getUser: handleUnaryCall<GetUserRequest, GetUserResponse>;
  createUser: handleUnaryCall<CreateUserRequest, CreateUserResponse>;
  setUserStatus: handleUnaryCall<SetUserStatusRequest, SetUserStatusResponse>;
  getUserStatus: handleUnaryCall<GetUserStatusRequest, GetUserStatusResponse>;
}

export interface UsersServiceClient extends Client {
  getUser(
    request: GetUserRequest,
    callback: (error: ServiceError | null, response: GetUserResponse) => void
  ): ClientUnaryCall;
  getUser(
    request: GetUserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetUserResponse) => void
  ): ClientUnaryCall;
  getUser(
    request: GetUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetUserResponse) => void
  ): ClientUnaryCall;
  createUser(
    request: CreateUserRequest,
    callback: (error: ServiceError | null, response: CreateUserResponse) => void
  ): ClientUnaryCall;
  createUser(
    request: CreateUserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateUserResponse) => void
  ): ClientUnaryCall;
  createUser(
    request: CreateUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateUserResponse) => void
  ): ClientUnaryCall;
  setUserStatus(
    request: SetUserStatusRequest,
    callback: (
      error: ServiceError | null,
      response: SetUserStatusResponse
    ) => void
  ): ClientUnaryCall;
  setUserStatus(
    request: SetUserStatusRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: SetUserStatusResponse
    ) => void
  ): ClientUnaryCall;
  setUserStatus(
    request: SetUserStatusRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: SetUserStatusResponse
    ) => void
  ): ClientUnaryCall;
  getUserStatus(
    request: GetUserStatusRequest,
    callback: (
      error: ServiceError | null,
      response: GetUserStatusResponse
    ) => void
  ): ClientUnaryCall;
  getUserStatus(
    request: GetUserStatusRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetUserStatusResponse
    ) => void
  ): ClientUnaryCall;
  getUserStatus(
    request: GetUserStatusRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetUserStatusResponse
    ) => void
  ): ClientUnaryCall;
}

export const UsersServiceClient = makeGenericClientConstructor(
  UsersService,
  "users.v1.UsersService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): UsersServiceClient;
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
