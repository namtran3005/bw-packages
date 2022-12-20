import * as querystring from 'querystring';
import * as cookie from 'cookie';
import merge from 'deepmerge';

const decode = decodeURIComponent;

interface Options {
  initialPrefix?: string;
  lastPrefix?: string;
  defaults?: boolean;
  prefix?: string;
  saveInitial?: boolean;
  params?: string[];
  data?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
  path?: string;
  domain?: string | null;
  timeout?: number;
}

export const attribution = (opts: Options) => {
  let options: Options = {
    defaults: true,
    prefix: '',
    saveInitial: false,
    initialPrefix: 'initial_',
    lastPrefix: '',
    params: [
      'utm_campaign',
      'utm_source',
      'utm_medium',
      'utm_term',
      'utm_content',
    ],
    data: {
      referrer: document.referrer !== '' ? document.referrer : 'direct',
    },
    path: '/',
    domain: null,
    timeout: 30,
  };

  const pageQueryString = getQueryString();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let data: { [key: string]: any } = {};
  let cookieOptions = {};
  const now = new Date();
  let expires: Date;

  // Remove default parameters if necessary
  if (typeof opts === 'object') {
    if (typeof opts.defaults !== 'undefined' && opts.defaults === false) {
      options.params = [];
    }
  }

  // Merge opts onto options
  if (typeof opts === 'object') {
    options = merge(options, opts);
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const dataKeys = Object.keys(options.data!);

  // Set default cookie options
  cookieOptions = {
    domain: options.domain,
    path: options.path,
  };

  // Set cookie expiration and advance expiration for existing cookies
  if (options.timeout) {
    expires = new Date(now.setMinutes(now.getMinutes() + options.timeout));

    // querystring param cookies
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    options.params!.forEach(key => {
      updateExpiration(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        options.prefix! + options.lastPrefix + key,
        expires,
        cookieOptions
      );
    });

    // data object cookies
    if (dataKeys.length !== 0) {
      dataKeys.forEach(key => {
        updateExpiration(
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          options.prefix! + options.lastPrefix + key,
          expires,
          cookieOptions
        );
      });
    }
  }

  // Parse the query string
  if (pageQueryString.length !== 0) {
    data = querystring.parse(pageQueryString);
  }

  // Create initial cookies
  if (options.saveInitial) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    options.params!.forEach(key => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      if (!getCookie(options.prefix! + options.initialPrefix + key)) {
        setCookie(
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          options.prefix! + options.initialPrefix + key,
          data[key] || 'null',
          merge(cookieOptions, {
            expires: new Date('Tue 19 Jan 2038 03:14:07 GMT'),
          })
        );
      }
    });
  }

  // Create the cookies
  let removed = false;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  options.params!.forEach(key => {
    if (data[key]) {
      // param found in querystring so remove all necessary existing cookies first
      if (!removed) {
        removeCookies(options, cookieOptions);
        removed = true;
      }

      // Merge expires in to prevent the following error:
      // Uncaught TypeError: opt.expires.toUTCString is not a function
      setCookie(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        options.prefix! + options.lastPrefix + key,
        data[key],
        merge(cookieOptions, {
          expires,
        })
      );
    }
  });

  // Save the data object
  if (dataKeys.length !== 0) {
    dataKeys.forEach(key => {
      // Skip undefined, null, or empty values
      if (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        typeof options.data![key] === 'undefined' ||
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        options.data![key] === null ||
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        options.data![key] === ''
      ) {
        return;
      }

      // Create initial cookies
      if (options.saveInitial) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (!getCookie(options.prefix! + options.initialPrefix + key)) {
          setCookie(
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            options.prefix! + options.initialPrefix + key,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            options.data![key],
            merge(cookieOptions, {
              expires: new Date('Tue 19 Jan 2038 03:14:07 GMT'),
            })
          );
        }
      }

      // Create session cookies if they don't exist
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      if (!getCookie(options.prefix! + options.lastPrefix + key)) {
        setCookie(
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          options.prefix! + options.lastPrefix + key,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          options.data![key],
          merge(cookieOptions, {
            expires,
          })
        );
      }
    });
  }
};

const removeCookies = (options: Options, cookieOptions: object) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  options.params!.forEach(key => {
    document.cookie = cookie.serialize(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      options.prefix! + options.lastPrefix + key,
      '',
      merge(cookieOptions, {
        expires: new Date('Thu, 01 Jan 1970 00:00:00 GMT'),
      })
    );
  });
};

/**
 * Returns the query string without its initial question mark.
 *
 * E.g. foo=bar&baz=qux
 *
 * @return {string}
 * @private
 */
const getQueryString = () => {
  const hash = window.location.hash;
  const query = window.location.search.substring(1);

  if (hash) {
    const possibleQuery = hash.split('?')[1];
    return possibleQuery || query;
  }

  return query;
};

const setCookie = (name: string, value: string, options: object) => {
  document.cookie = cookie.serialize(name, value, options);
};

const getCookie = (name: string) => {
  const match = document.cookie.match(`(?:^|; )${name}=([^;]+)`);

  if (match) {
    return decode(match[1]);
  }
  return null;
};

const updateExpiration = (name: string, expires: Date, options: object) => {
  const existingValue = getCookie(name);

  if (existingValue) {
    setCookie(
      name,
      existingValue,
      merge(options, {
        expires,
      })
    );
  }
};
