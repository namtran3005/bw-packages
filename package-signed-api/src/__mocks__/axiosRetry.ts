/* eslint-disable @typescript-eslint/no-explicit-any */

const axiosRetry = jest.fn().mockImplementation((x: any) => x);
export default axiosRetry;
