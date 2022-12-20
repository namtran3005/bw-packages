import * as UIKitWeb from '../';

describe('packages/Index', () => {
  it('should check UIKitWeb exports', () => {
    expect(typeof UIKitWeb.Button).toBe('function');
    expect(typeof UIKitWeb.ButtonGroup).toBe('function');
    expect(typeof UIKitWeb.Checkbox).toBe('function');
    expect(typeof UIKitWeb.Content).toBe('function');
    expect(typeof UIKitWeb.FormControl).toBe('function');
    expect(typeof UIKitWeb.Grid).toBe('function');
    expect(typeof UIKitWeb.List).toBe('function');
    expect(typeof UIKitWeb.Logo).toBe('function');
    expect(typeof UIKitWeb.Paper).toBe('function');
    expect(typeof UIKitWeb.Radio).toBe('function');
    expect(typeof UIKitWeb.RadioGroup).toBe('function');
    expect(typeof UIKitWeb.SelectLocale).toBe('function');
    expect(typeof UIKitWeb.Switch).toBe('function');
    expect(typeof UIKitWeb.Table).toBe('function');
    expect(typeof UIKitWeb.TextField).toBe('function');
    expect(typeof UIKitWeb.Tooltip).toBeTruthy();
    expect(typeof UIKitWeb.Typography).toBe('function');
  });
});
