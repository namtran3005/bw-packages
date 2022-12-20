import {
  ChangeRequest,
  ResolvedChangeRequest,
  AuthorizeChangeRequestSolarisHandlerInput,
  ConfirmChangeRequestSolarisHandlerInput,
} from '../../types/entities/lib/changeRequests';

import { Handler } from '../handler';

export class ChangeRequestsHandler extends Handler {
  /* Depending on the payload that we send, the authorize method is either used to initiate
   a SMS TAN change request process or a device binding one. For SMS TAN we send the personId
   along a deliveryMethod with a value of either `mobile_number` or `static`.
   For device binding change request, we send a `deviceId` and deliverymMethod with a value of  
   `device_signing` (no `static` deliveryMethod is possible).
   For further reference, visit: https://docs.solarisbank.com/sbdf35fw/api/v1/#6mKSxOVA-post-authorize-a-change-request      
*/
  public authorize(
    input: AuthorizeChangeRequestSolarisHandlerInput
  ): Promise<ChangeRequest> {
    return this.client.post({
      url: `/change_requests/${input.changeRequestId}/authorize`,
      data: input.personId
        ? { personId: input.personId, deliveryMethod: input.deliveryMethod }
        : { deviceId: input.deviceId, deliveryMethod: input.deliveryMethod },
    });
  }

  /* Depending on the payload that we send, the confirm method is either used to confirm
   a SMS TAN change request or a device binding one. For SMS TAN we send the personId
   along the `tan`.
   For confirming device binding change request, we send a `deviceId` and the signature
   we got from the device. 
   For further reference, visit: https://docs.solarisbank.com/sbdf35fw/api/v1/#5KdSSUPx-post-confirm-change-request     
*/
  public confirm(
    input: ConfirmChangeRequestSolarisHandlerInput
  ): Promise<ResolvedChangeRequest> {
    return this.client.post({
      url: `/change_requests/${input.changeRequestId}/confirm`,
      data: input.personId
        ? { personId: input.personId, tan: input.tan }
        : { deviceId: input.deviceId, signature: input.signature },
    });
  }
}
