import { expect } from 'chai';
import personal from '@mocks/personal';
import { 
  organizeEmployessInfo,
  objectToMap,
  mapToObject,
  iterableToSet
} from '@app/map-set';

describe('>>> map-set.js <<<', () => {
  describe('Map', () => {
    it('Should return a Map object with objects as keys and values', async () => {
      const expectedResultKeys = [
        { name: 'Employee Name', age: 25 },
        { name: 'Employee Name2', age: 29 },
        { name: 'Employee Name3', age: 22 },
        { name: 'Employee Name4', age: 34 },
        { name: 'Employee Name5', age: 21 },
        { name: 'Employee Name6', age: 28 },
        { name: 'Employee Name7', age: 31 },
        { name: 'Employee Name8', age: 39 },
      ];
      let resultKeys = [];
  
      const result = organizeEmployessInfo(personal);
  
      for (let obj of result.keys()) {
        resultKeys = [...resultKeys, obj];
      }
  
      expect(result instanceof Map).to.equal(true);
      expect(resultKeys).to.deep.equal(expectedResultKeys);
    });
  
    it('Should create a Map out of an Object', async () => {
      const input = {
        name: 'name',
        age: 1,
        position: 'position',
      };
      const expectedResult = new Map();
      expectedResult
        .set('name', 'name')
        .set('age', 1)
        .set('position', 'position')
  
      const result = objectToMap(input);
  
      expect(result).to.deep.equal(expectedResult);
    });
  
    it('Should create an Object out of a Map', async () => {
      const input = new Map([
        ['name', 'name'],
        ['age', 1],
        ['position', 'position'],
      ]);
      const expectedResult = {
        name: 'name',
        age: 1,
        position: 'position'
      }
  
      const result = mapToObject(input);
  
      expect(result).to.deep.equal(expectedResult);
    });
  })
  describe('Set', () => {
    it('Should return a Set out of an iterable with duplicates', async () => {
      const input = ['a', 'b', 'c', 'a', 'b'];
      const expectedResult = new Set();
      input.forEach((element) => expectedResult.add(element));

      const result = iterableToSet(input);

      expect(result).to.deep.equal(expectedResult);
      expect(result.size).to.equal(3);
    });
  })
});