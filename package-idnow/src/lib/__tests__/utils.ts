import { convertToAPIEndpoint } from '../utils';

const identificationUrlMock =
  'https://go.test.idnow.de/solarisbankvideoidentsandbox/identifications/85d2fe36df3d9397fa84f542a37d400acidt';
const apiEndpointMock =
  'https://go.test.idnow.de/api/v1/solarisbankvideoidentsandbox/identifications/85d2fe36df3d9397fa84f542a37d400acidt';

describe('convertToAPIEndpoint function', () => {
  it('Should return correct value', () => {
    expect(convertToAPIEndpoint(identificationUrlMock)).toEqual(
      apiEndpointMock
    );
  });
});
