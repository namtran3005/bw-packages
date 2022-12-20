import { removeUrlsAndScripts } from '../removeUrlsAndScripts';

describe('removeUrlsAndScripts method', () => {
  it('should remove dots and triangular brackets from strings', () => {
    const testInputStringArray = [
      'this is not a url, nor a script. Just a harmless text.',
      'this is a dangerous <script></script>',
      'this is a url wwww.malicious.com',
      'this is also a url https://www.anothermaliciouswebsite.de',
      'even this could be a dangerous url hacker.io',
      null,
      undefined,
    ];
    const expectedOutcomeStringArray = [
      'this is not a url, nor a script. Just a harmless text.',
      'this is a dangerous  script  /script ',
      'this is a url wwww,malicious,com',
      'this is also a url  www,anothermaliciouswebsite,de',
      'even this could be a dangerous url hacker,io',
      null,
      undefined,
    ];
    const receivedOutcomeStringArray = testInputStringArray.map(string =>
      removeUrlsAndScripts(string)
    );
    expect(receivedOutcomeStringArray).toEqual(expectedOutcomeStringArray);
  });
});
