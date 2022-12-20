/* eslint-disable @typescript-eslint/no-explicit-any */
import { comparePostcodes } from '../mapsAPIUtils';

describe('mapsAPIUtils', () => {
  it('should return true if passed the same postcode - 1', () => {
    const isEqual = comparePostcodes('LV-2169', 'lv-2169', null as any);
    expect(isEqual).toEqual(true);
  });
  it('should return true if passed the same postcode - 2', () => {
    const isEqual = comparePostcodes('LV-2169', 'lv 2169', null as any);
    expect(isEqual).toEqual(true);
  });
  it('should return true if passed the same postcode - 3', () => {
    const isEqual = comparePostcodes('LV-2169', '2169', null as any);
    expect(isEqual).toEqual(true);
  });

  it('should return true if passed the same postcode - 4', () => {
    const isEqual = comparePostcodes('2169', 'LV-2169', null as any);
    expect(isEqual).toEqual(true);
  });
  it('should return true if passed the same postcode - 5', () => {
    const isEqual = comparePostcodes('2169', 'lv-2169', null as any);
    expect(isEqual).toEqual(true);
  });
  it('should return true if passed the same postcode - 6', () => {
    const isEqual = comparePostcodes('2169', 'lv 2169', null as any);
    expect(isEqual).toEqual(true);
  });

  it('should return false if passed the same postcode - 7', () => {
    const isEqual = comparePostcodes('LV-2169', 'LV', null as any);
    expect(isEqual).toEqual(false);
  });
  it('should return false if passed the same postcode - 8', () => {
    const isEqual = comparePostcodes('LV-2169', 'LV-21691', null as any);
    expect(isEqual).toEqual(false);
  });
  it('should return false if passed the same postcode - 9', () => {
    const isEqual = comparePostcodes('LV-2169', '21691', null as any);
    expect(isEqual).toEqual(false);
  });
  it('should return false if passed the same postcode - 10', () => {
    const isEqual = comparePostcodes('LV-21691', 'LV-2169', null as any);
    expect(isEqual).toEqual(false);
  });
  it('should return false if passed the same postcode - 11', () => {
    const isEqual = comparePostcodes('LV-21691', '2169', null as any);
    expect(isEqual).toEqual(false);
  });
});
