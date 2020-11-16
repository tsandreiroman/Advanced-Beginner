export const macsInventory = [
  {id: '1', year: 2015, ram: 8, hasSsd: true},
  {id: '2', year: 2017, ram: 16, hasSsd: true},
  {id: '3', year: 2017, ram: 32, hasSsd: true},
  {id: '4', year: 2015, ram: 8, hasSsd: false},
  {id: '5', year: 2015, ram: 8, hasSsd: false},
];

export const getByYear = (macs, year) => macs.filter((mac) => mac.year == year);

export const getBySsd = (macs) => macs.filter((mac) => mac.hasSsd);

export const maxRam = (macs) => Math.max(...macs.map((mac) => mac.ram));

export const minRam = (macs) => Math.min(...macs.map((mac) => mac.ram));

export const average = (macs, parameter) => macs.reduce((acc, currValue) => (acc + currValue[parameter]), 0) / macs.length;
