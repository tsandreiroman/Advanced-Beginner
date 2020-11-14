import { expect } from 'chai';
import { 
  toBoolean,
  toNumber,
  toString,
  compareDifferentTypes,
 } from '@app/coercion';

describe('>>> coercion.js <<<', () => {

  describe('toBoolean()', () => {

      it('Should be a FALSY value: 0', async () => {
        const input = 0;
    
        const result = toBoolean(input);
    
        expect(result).to.eql(false);
      });

      it("Should be a FALSY value: ''", async () => {
        const input = '';
    
        const result = toBoolean(input);
    
        expect(result).to.eql(false);
      });

    it("Should be a FALSY value: null", async () => {
      const input = null;

      const result = toBoolean(input);

      expect(result).to.eql(false);
    });

    it("Should be a FALSY value: NaN", async () => {
      const input = NaN;

      const result = toBoolean(input);

      expect(result).to.eql(false);
    });

    it("Should be a FALSY value: undefined", async () => {
      const input = undefined;

      const result = toBoolean(input);

      expect(result).to.eql(false);
    });
  })
  
  describe('toNumber()', () => {

    it("Should coerce to 0 the following value: ''", async () => {
      const input = '';

      const result = toNumber(input);

      expect(result).to.eql(0);
    });

    it("Should coerce to 0 the following value: null", async () => {
      const input = null;

      const result = toNumber(input);

      expect(result).to.eql(0);
    });

    it("Should coerce to 0 the following value: []", async () => {
      const input = [];

      const result = toNumber(input);

      expect(result).to.eql(0);
    });

    it("Should coerce to 0 the following value: [undefined]", async () => {
      const input = [undefined];

      const result = toNumber(input);

      expect(result).to.eql(0);
    });

    it("Should coerce to NaN the following value: {}", async () => {
      const input = {};

      const result = toNumber(input);

      expect(result).to.eql(NaN);
    });

    it("Should coerce to NaN the following value: undefined", async () => {
      const input = undefined;

      const result = toNumber(input);

      expect(result).to.eql(NaN);
    });
  })

  describe('toString()', () => {

    it("Should coerce to '0' the following value: -0", async () => {
      const input = -0;

      const result = toString(input);

      expect(result).to.eql('0');
    });

    it("Should coerce to '[object Object]' the following value: {}", async () => {
      const input = {};

      const result = toString(input);

      expect(result).to.eql('[object Object]');
    });

    it("Should coerce to '' the following value: [undefined]", async () => {
      const input = [undefined];

      const result = toString(input);

      expect(result).to.eql('');
    });

    it("Should coerce to 'undefined' the following value: undefined", async () => {
      const input = undefined;

      const result = toString(input);

      expect(result).to.eql('undefined');
    });
  });

  describe('compareDifferentTypes()', () => {

    it("Should return TRUE when doing: 1 == '1'", async () => {
      const value1 = 1, value2 = '1';

      const result = compareDifferentTypes(value1, value2);

      expect(result).to.eql(true);
    });

    it('Should return TRUE when doing: 1 == [1]', async () => {
      const value1 = 1, value2 = [1];

      const result = compareDifferentTypes(value1, value2);

      expect(result).to.eql(true);
    })

    it('Should return TRUE when doing: [] == ![]', async () => {
      const value1 = [], value2 = ![];

      const result = compareDifferentTypes(value1, value2);

      expect(result).to.eql(true);
      // How:
      // [] == false
      // "" == false
      // 0 == false
      // 0 === 0
    })

    it('Should return FALSE when doing: [] == true', async () => {
      const value1 = [], value2 = true;

      const result = compareDifferentTypes(value1, value2);

      expect(result).to.eql(false);
      // How:
      // "" == true
      // 0 === 1
    })
  })
});
