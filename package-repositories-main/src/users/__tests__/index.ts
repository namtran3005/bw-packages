import { usersRepo } from '../index';

import { attachAccountId } from '../lib/attachAccountId';
import { attachPersonId } from '../lib/attachPersonId';
import { getUserById } from '../lib/getUserById';
import { toggleFreeze } from '../lib/toggleFreeze';
import { attachSecret } from '../lib/attachSecret';
import { setUTM } from '../lib/setUTM';

describe('User repo entry point', () => {
  it('should export attachAccountId fn', () => {
    expect(usersRepo.attachAccountId).toBe(attachAccountId);
  });
  it('should export attachPersonId fn', () => {
    expect(usersRepo.attachPersonId).toBe(attachPersonId);
  });
  it('should export getUserById fn', () => {
    expect(usersRepo.getUserById).toBe(getUserById);
  });
  it('should export toggleFreeze fn', () => {
    expect(usersRepo.toggleFreeze).toBe(toggleFreeze);
  });
  it('should export attachSecret fn', () => {
    expect(usersRepo.attachSecret).toBe(attachSecret);
  });
  it('should export setUTM fn', () => {
    expect(usersRepo.setUTM).toBe(setUTM);
  });
});
