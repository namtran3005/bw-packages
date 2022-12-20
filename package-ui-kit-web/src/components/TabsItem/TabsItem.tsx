import * as React from 'react';

interface TabsItemProps {
  children?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  label: React.ReactChild;
  disabled?: boolean;
}

const TabsItem: React.FunctionComponent<TabsItemProps> = ({
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  label,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  disabled,
  ...cleanProps
}) => <div {...cleanProps} />;

export { TabsItem, TabsItemProps };
