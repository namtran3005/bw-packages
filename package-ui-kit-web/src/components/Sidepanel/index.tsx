import React from 'react';

import {
  SidepanelContent as SidepanelContentComponent,
  SidepanelContentProps,
} from '../SidepanelContent';
import {
  SidepanelFooter as SidepanelFooterComponent,
  SidepanelFooterProps,
} from '../SidepanelFooter';
import { Sidepanel as SidepanelComponent, SidepanelProps } from './Sidepanel';

function Sidepanel(props: Partial<SidepanelProps>): React.ReactElement {
  return <SidepanelComponent {...props} />;
}

function SidepanelContent(props: SidepanelContentProps): React.ReactElement {
  return <SidepanelContentComponent {...props} />;
}

function SidepanelFooter(props: SidepanelFooterProps): React.ReactElement {
  return <SidepanelFooterComponent {...props} />;
}

Sidepanel.prototype.Content = SidepanelContent;
Sidepanel.Content = Sidepanel.prototype.Content;
Sidepanel.prototype.Footer = SidepanelFooter;
Sidepanel.Footer = Sidepanel.prototype.Footer;

export { Sidepanel, SidepanelProps };
