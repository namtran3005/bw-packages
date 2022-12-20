import fetch from 'node-fetch';
import { convertToAPIEndpoint } from './utils';

export const post = (url: string) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });
};

export const identificationStart = async (identificationUrl: string) => {
  return post(`${convertToAPIEndpoint(identificationUrl)}/start`);
};

export const identificationRequestVideoChat = (identificationUrl: string) => {
  return post(`${convertToAPIEndpoint(identificationUrl)}/requestVideoChat`);
};

export class Identifications {
  public start(identificationUrl: string) {
    const baseUrl = convertToAPIEndpoint(identificationUrl);
    return post(`${baseUrl}/start`);
  }

  public requestVideoChat(identificationUrl: string) {
    const baseUrl = convertToAPIEndpoint(identificationUrl);
    return post(`${baseUrl}/requestVideoChat`);
  }
}
