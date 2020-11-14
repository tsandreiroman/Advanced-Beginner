import { expect } from 'chai';
import { helloWorld } from '@app/hello-world';

describe('hello-world.js', () => {
  it("Should return 'Hello world'", async () => {
    const expectedMessage = 'Hello world!';

    expect(helloWorld()).to.eql(expectedMessage);
  });
});
