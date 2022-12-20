import { Address, Countries } from '@bitwala-cryptobank-squad/package-solaris';
import { generateAddressAsOneString } from '../generateAddressAsOneString';

const mockAddress = {
  line2: 'Trautenauer str. 6',
  postalCode: '13826',
  city: 'Berlin',
  country: Countries.DE,
};

describe('generateAddressAsOneString', () => {
  it('should generate right address when passed only required parameters for address', () => {
    expect(generateAddressAsOneString(mockAddress as Address)).toEqual(
      `Trautenauer str. 6 13826 Berlin DE`
    );
  });

  it('should return proper address when line1 is added to address', () => {
    expect(
      generateAddressAsOneString({
        line1: 'Projects EGR',
        ...mockAddress,
      } as Address)
    ).toEqual(`Projects EGR Trautenauer str. 6 13826 Berlin DE`);
  });

  it('shoudl return proper address when state is passed to address', () => {
    expect(
      generateAddressAsOneString({
        state: 'BE',
        ...mockAddress,
      } as Address)
    ).toEqual(`Trautenauer str. 6 13826 Berlin BE DE`);
  });
});
