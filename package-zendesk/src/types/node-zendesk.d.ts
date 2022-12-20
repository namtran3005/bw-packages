import 'node-zendesk';

declare module 'node-zendesk' {
  namespace TicketFields {
    interface Methods {
      show(
        ticketId: ZendeskID,
        cb: ZendeskCallback<unknown, unknown>
      ): ResponsePayload;
      show(userId: ZendeskID): Promise<ResponsePayload>;
    }

    interface ResponsePayload extends AuditableModel {
      readonly active: boolean;
      readonly agent_description: string | null;
      readonly collapsed_for_agents: boolean;
      readonly created_at: string;
      readonly custom_field_options: {
        id: number;
        name: string;
        raw_name: string;
        value: string;
        default: boolean;
      }[];
      readonly description: string;
      readonly editable_in_portal: boolean;
      readonly id: number;
      readonly position: number;
      readonly raw_description: string;
      readonly raw_title_in_portal: string;
      readonly raw_title: string;
      readonly regexp_for_validation: string | null;
      readonly removable: boolean;
      readonly required_in_portal: boolean;
      readonly required: boolean;
      readonly tag: string | null;
      readonly title_in_portal: string;
      readonly title: string;
      readonly type: string;
      readonly updated_at: string;
      readonly url: string;
      readonly visible_in_portal: boolean;
    }
  }

  namespace DynamicContent {
    interface Methods {
      listAllItems(cb: ZendeskCallback<unknown, unknown>): ResponsePayload;
      listAllItems(): Promise<ResponsePayload>;
    }

    interface DynamicContentVariant {
      url: string;
      id: number;
      content: string;
      locale_id: number;
      outdated: boolean;
      active: boolean;
      default: boolean;
      created_at: string;
      updated_at: string;
    }

    interface DynamicContent extends AuditableModel {
      url: string;
      id: number;
      name: string;
      placeholder: string;
      default_locale_id: number;
      outdated: boolean;
      created_at: string;
      updated_at: string;
      variants: DynamicContentVariant[];
    }

    type ResponsePayload = AuditableModel & DynamicContent[];
  }

  export interface PatchedClient
    extends Omit<Client, 'ticketfields' | 'dynamiccontent'> {
    ticketfields: TicketFields.Methods;
    dynamiccontent: DynamicContent.Methods;
  }

  export function createClient(config: ClientOptions): PatchedClient;
}
