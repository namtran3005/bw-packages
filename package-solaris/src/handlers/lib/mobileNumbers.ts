import { MobileNumber } from '../../types/entities/lib/mobileNumbers';

import { Handler } from '../handler';

import { personInputShape } from '../../validations/schemas/persons';
import { ChangeRequest } from '../../types';

export class MobileNumbersHandler extends Handler {
  public getOne(personId: string): Promise<MobileNumber> {
    return this.client.get({
      url: `/persons/${personId}/mobile_number`,
    });
  }

  public setNumber(
    personId: string,
    mobileNumber: string
  ): Promise<MobileNumber> {
    personInputShape.mobileNumber.validateSync(mobileNumber);
    return this.client.post({
      url: `/persons/${personId}/mobile_number`,
      data: { number: mobileNumber },
    });
  }

  public removeNumber(
    personId: string,
    mobileNumber: string
  ): Promise<MobileNumber | ChangeRequest> {
    personInputShape.mobileNumber.validateSync(mobileNumber);
    return this.client.delete({
      url: `/persons/${personId}/mobile_number`,
      data: { number: mobileNumber },
    });
  }

  public requestAuthorization(
    personId: string,
    mobileNumber: string
  ): Promise<ChangeRequest> {
    personInputShape.mobileNumber.validateSync(mobileNumber);
    return this.client.post({
      url: `/persons/${personId}/mobile_number/authorize`,
      data: { number: mobileNumber },
    });
  }

  public completeAuthorization(
    personId: string,
    mobileNumber: string,
    token: string
  ): Promise<MobileNumber> {
    return this.client.post({
      url: `/persons/${personId}/mobile_number/confirm`,
      data: { number: mobileNumber, token },
    });
  }
}
