import { expect } from 'chai';
import { 
  simpleGenerator,
  parentGenerator,
  parentGeneratorWithReturn,
  argumentsGenerator,
  apiDataGenerator
 } from '@app/generators';

describe('>>> generators.js <<<', () => {

  it("Should return only the first yield value if the generator is called without a wrapper", async () => {
    const expectedResult = "I'm";

    const firstIteration = simpleGenerator().next(), secondIteration = simpleGenerator().next(), thirdIteration = simpleGenerator().next();

    expect(firstIteration.value).to.eql(expectedResult);
    expect(secondIteration.value).to.eql(expectedResult);
    expect(thirdIteration.value).to.eql(expectedResult);
  });

  it("Should return 'I'm a simple generator' out of 2 composed generators", async () => {
    let result = '';
    const expectedResult = "I'm a simple generator";

    const generator = parentGenerator();

    for (let word of generator ) {
      result += `${word} `
    }

    expect(result.trim()).to.eql(expectedResult);
  });

  it("Should return 'I'm a simple' out of 2 composed generators having return statement before the last yield", async () => {
    let result = '';
    const expectedResult = "I'm a simple";

    const generator = parentGeneratorWithReturn();

    for (let word of generator ) {
      result += `${word} `
    }

    expect(result.trim()).to.eql(expectedResult);
  });

  it("Should return arguments of a function after iterating with yield* over its arguments", async () => {
    const generator = argumentsGenerator(1,2,3);

    const firstIteration = generator.next(), secondIteration = generator.next(), thirdIteration = generator.next();

    expect(firstIteration.value).to.eql(1);
    expect(secondIteration.value).to.eql(2);
    expect(thirdIteration.value).to.eql(3);
  });

  it("Should return the data received through a fake api call using Promises", async () => {
    const generator = apiDataGenerator();

    const expectedResult = 'mockData';

    const result = await generator.next().value.then((res) => res.data);

    expect(result).to.eql(expectedResult);
  });
});
