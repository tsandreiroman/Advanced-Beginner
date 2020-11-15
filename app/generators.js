export const simpleGenerator = function* () {
  yield "I'm";
  yield 'a';
  yield 'simple';
};

const simpleGeneratorWithReturn = function* () {
  yield "I'm";
  yield 'a';
  yield 'simple';
  return;
  yield 'generator';
}

const fakeApiCall = () => new Promise((resolve) => resolve({ data: 'mockData' }));

export const parentGenerator = function* () {
  yield* simpleGenerator();
  yield 'generator';
};

export const parentGeneratorWithReturn = function* () {
  yield* simpleGeneratorWithReturn();
};

export const argumentsGenerator = function* () {
  yield* arguments;
};

export const apiDataGenerator = function* () {
  yield fakeApiCall();
}
