import * as Presets from '../presets';

const date = new Date('2019-01-01T00:00:00.000Z');

describe('Time series preset factory', () => {
  beforeAll(() => {
    jest.spyOn(Presets, 'getNow').mockImplementation(() => date);
  });

  beforeEach(() => {
    process.env.TZ = 'UTC';
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
    process.env.TZ = 'UTC';
  });

  describe('DAY preset', () => {
    it('should $match all docs, containing data, starting from the SoD of the current date in Europe/Berlin TZ till current moment', () => {
      const p = Presets.presets[Presets.PresetName.DAY]();

      expect(p.match.date.$gte).toEqual(new Date('2018-12-31T00:00:00.000Z'));

      expect(p.match.date.$lt).toEqual(new Date('2019-01-01T22:59:59.999Z'));
    });

    it('should filter out entries, starting from SoD and ending at EoD in Europe/Berlin TZ', () => {
      const p = Presets.presets[Presets.PresetName.DAY]();

      expect(p.filter.t.$gte).toEqual(new Date('2018-12-31T23:00:00.000Z'));

      expect(p.filter.t.$lt).toEqual(new Date('2019-01-01T22:59:59.999Z'));
    });

    it('should not depend on server TZ settings', () => {
      process.env.TZ = 'UTC';
      const utcOutput = Presets.presets[Presets.PresetName.DAY]();
      process.env.TZ = 'Europe/Berlin';
      const localTzOutput = Presets.presets[Presets.PresetName.DAY]();

      expect(utcOutput).toEqual(localTzOutput);
    });
  });

  describe('WEEK preset', () => {
    it('should $match all docs, containing data, starting from 1 week ago in Europe/Berlin TZ till current moment', () => {
      const p = Presets.presets[Presets.PresetName.WEEK]();

      expect(p.match.date.$gte).toEqual(new Date('2018-12-24T00:00:00.000Z'));

      expect(p.match.date.$lt).toEqual(new Date('2019-01-01T22:59:59.999Z'));
    });

    it('should filter out entries, starting from SoD 1 week ago and ending at the current moment in Europe/Berlin TZ', () => {
      const p = Presets.presets[Presets.PresetName.WEEK]();

      expect(p.filter.t.$gte).toEqual(new Date('2018-12-24T23:00:00.000Z'));

      expect(p.filter.t.$lt).toEqual(new Date('2018-12-31T23:00:00.000Z'));
    });

    it('should not depend on server TZ settings', () => {
      process.env.TZ = 'UTC';
      const utcOutput = Presets.presets[Presets.PresetName.WEEK]();
      process.env.TZ = 'Europe/Berlin';
      const localTzOutput = Presets.presets[Presets.PresetName.WEEK]();

      expect(utcOutput).toEqual(localTzOutput);
    });
  });

  describe('MONTH preset', () => {
    it('should $match all docs, containing data, starting from 1 month ago in Europe/Berlin TZ till SoD of current date', () => {
      const p = Presets.presets[Presets.PresetName.MONTH]();

      expect(p.match.date.$gte).toEqual(new Date('2018-11-30T00:00:00.000Z'));

      expect(p.match.date.$lt).toEqual(new Date('2018-12-31T23:00:00.000Z'));
    });

    it('should filter out entries, starting from SoD 1 month ago and ending at the SoD of current date in Europe/Berlin TZ', () => {
      const p = Presets.presets[Presets.PresetName.MONTH]();

      expect(p.filter.t.$gte).toEqual(new Date('2018-11-30T23:00:00.000Z'));

      expect(p.filter.t.$lt).toEqual(new Date('2018-12-31T23:00:00.000Z'));
    });

    it('should not depend on server TZ settings', () => {
      process.env.TZ = 'UTC';
      const utcOutput = Presets.presets[Presets.PresetName.MONTH]();
      process.env.TZ = 'Europe/Berlin';
      const localTzOutput = Presets.presets[Presets.PresetName.MONTH]();

      expect(utcOutput).toEqual(localTzOutput);
    });
  });

  describe('YEAR preset', () => {
    it('should $match all docs, containing data, starting from 1 year ago in Europe/Berlin TZ till SoD of current date', () => {
      const p = Presets.presets[Presets.PresetName.YEAR]();

      expect(p.match.date.$gte).toEqual(new Date('2017-12-31T00:00:00.000Z'));

      expect(p.match.date.$lt).toEqual(new Date('2018-12-31T23:00:00.000Z'));
    });

    it('should filter out entries, starting from SoD 1 year ago and ending at the SoD of current date in Europe/Berlin TZ', () => {
      const p = Presets.presets[Presets.PresetName.YEAR]();

      expect(p.filter.t.$gte).toEqual(new Date('2017-12-31T23:00:00.000Z'));

      expect(p.filter.t.$lt).toEqual(new Date('2018-12-31T23:00:00.000Z'));
    });

    it('should not depend on server TZ settings', () => {
      process.env.TZ = 'UTC';
      const utcOutput = Presets.presets[Presets.PresetName.YEAR]();
      process.env.TZ = 'Europe/Berlin';
      const localTzOutput = Presets.presets[Presets.PresetName.YEAR]();

      expect(utcOutput).toEqual(localTzOutput);
    });
  });
});
