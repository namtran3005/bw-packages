import moxios from 'moxios';
import Coinfirm from '../index';
import { CoinfirmOptions, CoinfirmReportType } from '../types';

const apiUrl: string = 'https://api.coinfirm.com';
const apiToken: string = 'dummyToken';
const dummyAddress: string = 'n4VQ5YdHf7hLQ2gWQYYrcxoE5B7nWuDFNF';
const dummyReportId: string = 'be22313e2ce209431919b4a07720b6583';
const validOptions: CoinfirmOptions = {
  apiUrl,
  apiToken,
};
const invalidOptions: CoinfirmOptions = {
  apiUrl: '',
  apiToken: 'non-valid token',
};

const mockReport = {
  report_info_section: {
    report_id: 'be22313e2ce209431919b4a07720b6583',
    version: '3.2',
    address: '4e1b32cb147edfe07622c88b90f1ea0df00b6aed',
    address_type: 'BTC',
    address_subtype: 'BTC',
    report_type: 'basic',
    report_time: '2018-12-01T00:00:00.000Z',
    report_block_height: 7270534,
    address_used: true,
    is_smart_contract: false,
    whitelist: false,
  },
  cscore_section: {
    cscore: 46,
  },
};

const mockPDF = Buffer.from('Dummy');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validApi: any = new Coinfirm(validOptions);

describe('Coinfirm API Tests', () => {
  beforeEach(() => {
    moxios.install(validApi.client);
  });

  afterEach(() => {
    moxios.uninstall(validApi.client);
  });

  describe('Constructor', () => {
    it('should be Coinfirm API instance', () => {
      expect(validApi).toBeInstanceOf(Coinfirm);
    });
  });

  describe('Run basic AML report for valid address', () => {
    it('Should return a valid basic AML report', async () => {
      expect.assertions(5);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: mockReport,
        });

        expect(request.url).toBe(
          `${apiUrl}/v3/reports/aml/${CoinfirmReportType.BASIC}/${dummyAddress}`
        );
      });

      const reportJson = await validApi.getAMLReportBasic(
        dummyAddress,
        CoinfirmReportType.BASIC
      );

      expect(reportJson.report_info_section.report_id).toBe(dummyReportId);
      expect(reportJson.report_info_section.report_type).toEqual(
        CoinfirmReportType.BASIC
      );
      expect(reportJson.report_info_section.address_type).toEqual('BTC');
      expect(reportJson.cscore_section.cscore).toBeGreaterThan(0);
    });
  });

  describe('Get AML report PDF', () => {
    it('Should return a PDF data buffer', async () => {
      expect.assertions(2);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: mockPDF,
        });

        expect(request.url).toBe(
          `${apiUrl}/v3/reports/aml/${dummyReportId}/pdf`
        );
      });

      const reportData = await validApi.getAMLReportPDF(dummyReportId);
      const expected = mockPDF.toString();
      const incoming = reportData.toString();
      expect(incoming).toMatch(expected);
    });
  });

  describe('Error cases', () => {
    it('Call with empty url and token token should throw error', async () => {
      expect(() => new Coinfirm(invalidOptions)).toThrowError(
        'API Url and Token should be provided.'
      );
    });

    it('Call with non-valid address should return error', async () => {
      // eslint-disable-next-line jest/valid-expect
      expect(validApi.getAMLReportBasic('')).rejects.toThrow(/invalid json/);
    });
  });
});
