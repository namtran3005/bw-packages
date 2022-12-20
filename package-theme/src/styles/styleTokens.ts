/**
 * Style tokens. Should not be used directly. Use the reactive palette instead.
 *
 * Styles taken from https://www.figma.com/file/bs426HgznQQRTecCyrsR9W/Design-System---WIP-Color?node-id=385%3A8399
 * If you notice any changes there, please update the styles in this file.
 */
export const styleTokens = {
  borderWidth: {
    XS: 1.4,
    S: 2,
    M: 2.67,
    L: 10,
  },
  borderRadius: {
    XS: 2,
    S: 4,
    M: 8,
    L: 16,
  },
  boxShadow: {
    S: [
      {
        x: 0,
        y: 1,
        blur: 2,
        color: '#000000',
        opacity: 0.6,
      },
      {
        x: 0,
        y: 1,
        blur: 3,
        color: '#000000',
        opacity: 0.1,
      },
    ],
    M: [
      {
        x: 0,
        y: 2,
        blur: 7,
        color: '#000000',
        opacity: 0.4,
      },
      {
        x: 0,
        y: 4,
        blur: 6,
        color: '#000000',
        opacity: 0.5,
      },
    ],
    L: [
      {
        x: 0,
        y: 10,
        blur: 15,
        color: '#000000',
        opacity: 0.1,
      },
      {
        x: 0,
        y: 4,
        blur: 6,
        color: '#000000',
        opacity: 0.5,
      },
    ],
    XL: [
      {
        x: 0,
        y: 20,
        blur: 25,
        color: '#000000',
        opacity: 0.1,
      },
      {
        x: 0,
        y: 10,
        blur: 10,
        color: '#000000',
        opacity: 0.4,
      },
    ],
    XXL: [
      {
        x: 0,
        y: 25,
        blur: 50,
        color: '#000000',
        opacity: 0.1,
      },
    ],
  },
};
