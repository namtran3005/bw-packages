/*
 * Util for external use
 * Might experience some performance slowdown due to using JS to
 * get media properties
 */

import { useState, useEffect } from 'react';

import { defaultSizes } from './defaultSizes';

export const useSizes = () => {
  const [sizes, setSizes] = useState(
    defaultSizes({ canUseDOM: true, width: innerWidth, height: innerHeight })
  );

  useEffect(() => {
    const resizeCallback = () => {
      setSizes(
        defaultSizes({
          canUseDOM: true,
          width: innerWidth,
          height: innerHeight,
        })
      );
    };

    addEventListener('resize', resizeCallback);

    return () => removeEventListener('resize', resizeCallback);
  }, []);

  return sizes;
};
