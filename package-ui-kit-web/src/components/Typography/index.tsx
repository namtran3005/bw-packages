/* eslint-disable react-hooks/rules-of-hooks */
// Deactived because hooks can actually be used inside classes when used in a function component
import * as React from 'react';
import { Typing } from '../Typing';

import {
  Caption as CaptionComponent,
  StyledTypographyProps as TypographyProps,
  Header1 as Header1Component,
  Header2 as Header2Component,
  Header3 as Header3Component,
  Header4 as Header4Component,
  Subtitle as SubtitleComponent,
  Body as BodyComponent,
  SmallBody as SmallBodyComponent,
  Small as SmallComponent,
  Link as LinkComponent,
  ButtonXL as ButtonXLComponent,
  ButtonL as ButtonLComponent,
  ButtonM as ButtonMComponent,
  ButtonS as ButtonSComponent,
} from './Typography';

const Caption: React.FC<TypographyProps> = (props) => {
  return <CaptionComponent {...props} />;
};

const Header1: React.FC<TypographyProps> = (props) => {
  return <Header1Component {...props} />;
};

const Header2: React.FC<TypographyProps> = (props) => {
  return <Header2Component {...props} />;
};

const Header3: React.FC<TypographyProps> = (props) => {
  return <Header3Component {...props} />;
};

const Header4: React.FC<TypographyProps> = (props) => {
  return <Header4Component {...props} />;
};

const Subtitle: React.FC<TypographyProps> = (props) => {
  return <SubtitleComponent {...props} />;
};

const Body: React.FC<TypographyProps> = (props) => {
  return <BodyComponent {...props} />;
};

const SmallBody: React.FC<TypographyProps> = (props) => {
  return <SmallBodyComponent {...props} />;
};

const Small: React.FC<TypographyProps> = (props) => {
  return <SmallComponent {...props} />;
};

const Link: React.FC<TypographyProps> = (props) => {
  return <LinkComponent {...props} />;
};

const ButtonXL: React.FC<TypographyProps> = (props) => {
  return <ButtonXLComponent {...props} />;
};

const ButtonL: React.FC<TypographyProps> = (props) => {
  return <ButtonLComponent {...props} />;
};

const ButtonM: React.FC<TypographyProps> = (props) => {
  return <ButtonMComponent {...props} />;
};

const ButtonS: React.FC<TypographyProps> = (props) => {
  return <ButtonSComponent {...props} />;
};
class Typography extends React.Component<TypographyProps> {
  public static Caption = Caption;
  public static Header1 = Header1;
  public static Header2 = Header2;
  public static Header3 = Header3;
  public static Header4 = Header4;
  public static Subtitle = Subtitle;
  public static Body = Body;
  public static SmallBody = SmallBody;
  public static Small = Small;
  public static Link = Link;
  public static ButtonXL = ButtonXL;
  public static ButtonL = ButtonL;
  public static ButtonM = ButtonM;
  public static ButtonS = ButtonS;
  public static Typing = Typing;

  public render(): JSX.Element {
    return <Body {...this.props} />;
  }
}

export { Typography, TypographyProps };
