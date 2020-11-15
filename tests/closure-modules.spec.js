import { expect } from 'chai';
import { 
  charLoggerWithVar,
  charLoggerWithLet,
  timeLogger 
} from '@app/closure-modules';

describe('>>> closure-modules.js <<<', () => {

  it("Should return an array with same 3 elements", async () => {
    const log = charLoggerWithVar();
    const result = [log[0](), log[1](), log[2]()];
    const expectedResult = [4,4,4]

    expect(result).to.deep.equal(expectedResult);
  });

  it("Should return an array with 3 ascending elements", async () => {
    const log = charLoggerWithLet();
    const result = [log[0](), log[1](), log[2]()];
    const expectedResult = [1,2,3]

    expect(result).to.deep.equal(expectedResult);
  });

  it("Should return the current formatted date", async () => {
    const inputDate = new Date();
    const year = inputDate.getFullYear();
    const month = inputDate.getMonth();
    const day = inputDate.getDate();

    const buildTimeLog = timeLogger(inputDate).logTime();

    const expectedTimeLog = `Today is ${day}.${month}.${year}`;

    expect(buildTimeLog).to.eql(expectedTimeLog);
  });
});
