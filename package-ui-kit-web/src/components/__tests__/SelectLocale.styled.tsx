import * as React from 'react';
import { shallow } from 'enzyme';
import {
  Root,
  ChevronDown,
  IconContainer,
  LocaleIconButton,
  LocaleIconButtonComponent,
  SelectLocaleMenu,
  SelectLocaleMenuComponent,
  SelectLocaleMenuItem,
  SelectLocaleMenuItemComponent,
} from '../SelectLocale/SelectLocale.styled';

describe('Select Locale', () => {
  it('should render root', () => {
    expect(shallow(<Root />)).toMatchSnapshot();
  });

  it('should render chevron down', () => {
    expect(shallow(<ChevronDown />)).toMatchSnapshot();
  });

  it('should render icon container', () => {
    expect(shallow(<IconContainer />)).toMatchSnapshot();
  });

  it('should render locale icon button', () => {
    expect(shallow(<LocaleIconButton />)).toMatchSnapshot();
  });

  it('should render locale icon button component', () => {
    expect(shallow(<LocaleIconButtonComponent />)).toMatchSnapshot();
  });

  it('should render menu', () => {
    expect(
      shallow(<SelectLocaleMenu dropdownHeight="small" />)
    ).toMatchSnapshot();
    expect(
      shallow(<SelectLocaleMenu dropdownHeight="medium" />)
    ).toMatchSnapshot();
    expect(
      shallow(<SelectLocaleMenu dropdownHeight="big" />)
    ).toMatchSnapshot();
  });

  it('should render menu component', () => {
    expect(shallow(<SelectLocaleMenuComponent />)).toMatchSnapshot();
  });

  it('should render menu item', () => {
    expect(shallow(<SelectLocaleMenuItem />)).toMatchSnapshot();
    expect(shallow(<SelectLocaleMenuItem highlighted />)).toMatchSnapshot();
    expect(shallow(<SelectLocaleMenuItem selected />)).toMatchSnapshot();
  });

  it('should render menu item component', () => {
    expect(shallow(<SelectLocaleMenuItemComponent />)).toMatchSnapshot();
  });
});
