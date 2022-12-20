import {
  TreatmentWithConfig,
  TreatmentsWithConfig,
} from '@splitsoftware/splitio/types/splitio';
import { splitIo, SplitIo } from '../splitio';

describe('splitIo', () => {
  afterEach(() => jest.clearAllMocks());

  it('should be an instance of SplitIo', () => {
    expect(splitIo).toBeInstanceOf(SplitIo);
  });

  it("should return null if getTreatmentWithConfig couldn't find the split by name", () => {
    Object.defineProperty(splitIo, 'client', {
      value: {
        ...splitIo.client,
        getTreatmentWithConfig: jest.fn().mockReturnValue(null),
      },
      configurable: true
    });

    const result = splitIo.getTreatmentWithConfig('FOO');

    expect(splitIo.client?.getTreatmentWithConfig).toBeCalledTimes(1);
    expect(splitIo.client?.getTreatmentWithConfig).toHaveBeenCalledWith(
      'user',
      'FOO'
    );
    expect(result).toEqual(null);
  });

  it('should return treatment with config when call getTreatmentWithConfig', () => {
    const mockData: TreatmentWithConfig = {
      treatment: 'on',
      config: JSON.stringify({
        foo: 'bar',
      }),
    };

    Object.defineProperty(splitIo, 'client', {
      value: {
        ...splitIo.client,
        getTreatmentWithConfig: jest.fn().mockReturnValue(mockData),
      },
      configurable: true,
    });

    const result = splitIo.getTreatmentWithConfig('FOO');

    expect(splitIo.client?.getTreatmentWithConfig).toBeCalledTimes(1);
    expect(splitIo.client?.getTreatmentWithConfig).toHaveBeenCalledWith(
      'user',
      'FOO'
    );
    expect(result).toEqual(mockData);
  });

  it('should return multiple treatment with config when call getTreatmentsWithConfig', () => {
    const mockData: TreatmentsWithConfig = {
      FOO: {
        treatment: 'on',
        config: JSON.stringify({
          foo: 'foo',
        }),
      },
      BAR: {
        treatment: 'on',
        config: JSON.stringify({
          foo: 'bar',
        }),
      },
    };

    Date.now = jest.fn(() => 1487076708000);

    Object.defineProperty(splitIo, 'client', {
      value: {
        ...splitIo.client,
        getTreatmentsWithConfig: jest.fn().mockReturnValue(mockData),
      },
      configurable: true,
    });

    const result = splitIo.getTreatmentsWithConfig(['FOO', 'BAR']);

    expect(splitIo.client?.getTreatmentsWithConfig).toBeCalledTimes(1);
    expect(splitIo.client?.getTreatmentsWithConfig).toHaveBeenCalledWith(
      'user',
      ['FOO', 'BAR'],
      { system_time: 1487076708000 }
    );
    expect(result).toEqual(mockData);
  });
});
