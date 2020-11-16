import { expect } from 'chai';
import {
  macsInventory, 
  getByYear,
  getBySsd,
  maxRam,
  minRam,
  average
 } from '@app/higher-order-functions.js';

describe('>>> higher-order-functions.js <<<', () => {
  it("Should return the correct calculated data with required paremeters", async () => {
    const highestRamWithSsd = maxRam(getBySsd(macsInventory));
    const lowestRamWithSsd = minRam(getBySsd(macsInventory));
    const ramAverageOfThoseWithSsd = Math.round(average(getBySsd(macsInventory), 'ram'));
    const ramAverageOf2017MacsWithSsd = Math.round(average(getByYear(getBySsd(macsInventory), 2017), 'ram'));

    expect(highestRamWithSsd).to.eql(32);
    expect(lowestRamWithSsd).to.eql(8);
    expect(ramAverageOfThoseWithSsd).to.eql(19);
    expect(ramAverageOf2017MacsWithSsd).to.eql(24);
  });
});
