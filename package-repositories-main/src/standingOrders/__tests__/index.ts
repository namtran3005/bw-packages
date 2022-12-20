import { standingOrdersRepo } from '../index';
import { insertStandingOrder } from '../lib/insertStandingOrder';
import { findStandingOrders } from '../lib/findStandingOrders';

describe('Standing orders repo', () => {
  it('should export insertStandingOrder fn', () => {
    expect(standingOrdersRepo.insert).toBe(insertStandingOrder);
  });
  it('should export findStandingOrders fn', () => {
    expect(standingOrdersRepo.findStandingOrders).toBe(findStandingOrders);
  });
});
