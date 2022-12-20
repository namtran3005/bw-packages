import { Media } from '../';

describe('packages/Media', () => {
  it('should get media string for media and up', () => {
    expect(Media.up('md')).toBe('@media (min-width: 960px)');
    expect(Media.up('xs')).toBe('@media (min-width: 0px)');
  });
  it('should get media string for media and down', () => {
    expect(Media.down('sm')).toBe('@media (max-width: 600px)');
    expect(Media.down('xl')).toBe('@media (max-width: 1920px)');
  });
  it('should get media string for media between', () => {
    expect(Media.between('sm', 'lg')).toBe(
      '@media (min-width: 600px) and (max-width: 1280px)'
    );
  });
});
