import * as React from 'react';
import styled from 'styled-components';
import { Spacing, Colors, ColorsType } from '@bitwala-cryptobank-squad/package-theme';

interface SidepanelHelpDividerProps {
  background?: ColorsType;
  backgroundAlpha?: number;
}

const getDividerColor = ({
  background = 'primaryLilac',
  backgroundAlpha,
}: SidepanelHelpDividerProps) => {
  if (backgroundAlpha) {
    return Colors.getWithAlpha(background, backgroundAlpha);
  } else {
    return Colors.get(background);
  }
};

const SidepanelHelpDivider: React.FC = styled('hr').withConfig({
  shouldForwardProp: (prop) =>
    !['background', 'backgroundAlpha'].includes(prop),
})<SidepanelHelpDividerProps>`
  height: ${Spacing.unit / 2}px;
  width: ${Spacing.base}px;
  background-color: ${getDividerColor};
  margin: ${Spacing.small}px 0;
  border: none;
`;

export { SidepanelHelpDivider, SidepanelHelpDividerProps };
