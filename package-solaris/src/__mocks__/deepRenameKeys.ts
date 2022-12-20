/* eslint-disable @typescript-eslint/no-explicit-any*/

const rename = jest.fn().mockImplementation((x: any) => x);

export default rename;
