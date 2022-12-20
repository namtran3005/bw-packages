import { defaultTheme } from '../themes/default';

describe('packages/Themes', () => {
  it('should get the bg colors', () => {
    expect(defaultTheme.colors.bg.default).toBe('#F0F0F0');
    expect(defaultTheme.colors.bg.alt).toBe('#FFFFFF');
    expect(defaultTheme.colors.bg.altInverse).toBe('#000000');
  });
  it('should get the text colors', () => {
    expect(defaultTheme.colors.text.default).toBe('#2C232E');
    expect(defaultTheme.colors.text.light).toBe('#FFFFFF');
    expect(defaultTheme.colors.text.subline).toBe('#6D6D86');
  });
  it('should get the graph colors', () => {
    expect(defaultTheme.colors.graphs.general).toBe('#0038FF');
    expect(defaultTheme.colors.graphs.bitcoin).toBe('#7AAEA5');
    expect(defaultTheme.colors.graphs.bia).toBe('#418284');
  });
});
