/* eslint-disable no-useless-escape */
export const REGEX_NO_WHITESPACE_AT_START =    /^(?!\s)/;
export const REGEX_PHONE_NUMBER_E164 =         /^\+\d{7,15}$/;
export const REGEX_ISO8601 =                   /^(?:[1-9]\d{3}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[1-9]\d(?:0[48]|[2468][048]|[13579][26])|(?:[2468][048]|[13579][26])00)-02-29)T(?:[01]\d|2[0-3]):[0-5]\d:([0-5]\d|[0-5]\d\.\d\d\d)(?:Z|[+-][01]\d:[0-5]\d)$/;

export const REGEX_NAME_CHARS =                /^[A-ZÄÖÜß a-zäöü\-]+$/;
// https://docs.solarisbank.com/sbdf35fw/api/v1/#4ZiG4DJ7-supported-characters
export const REGEX_ADDRESS_FULL =              /^[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz¢ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖØÙÚÛÜÝßàáâãäåçèéêëìíîïñòóôõöøùúûüýÿ0123456789\s\-\.\+\|\&\!\*\,\%\_\?\:\#\'\"\/\@\=\÷\(\)\¡\¿\®\©\`\´]+$/;
export const REGEX_ADDRESS_LINE_CHARS =        /^[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz¢ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖØÙÚÛÜÝßàáâãäåçèéêëìíîïñòóôõöøùúûüýÿ0123456789\s\-\.\+\|\&\!\*\,\%\_\?\:\#\'\"\/]+$/;
export const REGEX_ADDRESS_LINE_CHARS_STRICT = /^[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz¢ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖØÙÚÛÜÝßàáâãäåçèéêëìíîïñòóôõöøùúûüýÿ0123456789\s\-\.\+\|\_\?\#\'\"\/]+$/;
export const REGEX_CITY_CHAR =                 /^[ABCDEFGHIJKLMNOPQRSTUVWXYZ £ÑÊ\^!Ó¡¾©\."&-+--§@\*\/ÁÄÅ³É¹ÍÌÖÜÏ¿ÓÔÞÒ¯ÙÚÈÝ½ÕÛßabcdefghijklmnopqrstuvwxyzäöüäáå\]}ïí~öó¦ôõüú`ûý0123456789_]+$/;
export const CARDHOLDER_NAME_CHARS =           /^[A-Z0-9-./\s]+$/; // Allow upper case letters, numbers, dots, whitespace, dash, slash
