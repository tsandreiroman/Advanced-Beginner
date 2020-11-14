import { expect } from 'chai';
import { 
  functionDeclarationHoisting,
  functionExpressionHoisting,
  varHoisting,
  letHoisting
 } from '@app/hoisting-tdz';

describe('>>> hoisting-tdz.js <<<', () => {

  describe('Examples of hoisting:', () => {

    it('Should hoist: function declaration', async () => {
      const result = functionDeclarationHoisting();
  
      expect(result).to.eql('I was hoisted');
    });

    it('Should NOT hoist: function expression', async () => {
      const result = functionExpressionHoisting();
  
      expect(result).to.eql(undefined);
    });

    it('Should hoist: when declared with var keyword', async () => {
      const result = varHoisting();
  
      expect(result).to.eql(2);
    });
  })

  describe('Example of TDZ:', () => {

    it('Should NOT hoist: when declared with let/const keyword', async () => {
      const result = letHoisting();
  
      expect(result).to.eql(1);
    });

  })
});
