import { TemplateNames } from '@bitwala-cryptobank-squad/package-emails';
import {
    BulkDestination,
    BulkEmailData,
    BulkTemplatedEmailsInterface, RawEmailInterfaceSimple,
    RawEmailInterfaceWithAttachment,
    SendEmailInterface
} from './interfaces';
export interface EmailCommunicationsInterface {
    SES: AWS.SES;
  
    sendEmail({
      to,
      bccAddress,
      ccAddress,
      userId,
      templateName,
      locale,
      mailEnv,
      variables,
    }: SendEmailInterface): Promise<void | null>;
  
    sendRawEmailWithAttachment({
      to,
      subject,
      from,
      html,
      plaintext,
      rawMessage,
      attachmentName,
      attachmentContentType,
    }: RawEmailInterfaceWithAttachment): Promise<void>;
  
    sendRawEmail({
      to,
      subject,
      from,
      html,
      plaintext,
    }: // eslint-disable-next-line @typescript-eslint/no-explicit-any
    RawEmailInterfaceSimple): Promise<any>;
  
    sendBulkTemplateMail({
      destination, // list of the emails with the vars. Can be unlimited, the fn will batch the requests
      templateName,
      locale,
      mailEnv,
    }: BulkTemplatedEmailsInterface): Promise<void> | null;
  
    prepareBulkEmail(
      destination: BulkDestination[],
      templateName: TemplateNames,
      locale: string,
      mailEnv: string
    ): BulkEmailData[];
  }
