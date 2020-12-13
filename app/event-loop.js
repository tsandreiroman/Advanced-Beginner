const axios = require('axios');

const runForLoopForNTimes = (times) => {
  for (let i = 0; i < times; i++) {
    console.log('C')
  }
}

const runWhileLoopForNSeconds = (secs) => {
  let start = Date.now();
  let now = start;

  while (now - start < (secs * 1000)) {
    now = Date.now();
  }
}

const eventLoopWithForLoop = async () => {
  console.log('A')
  setTimeout(() => console.log('B'), 0);
  runForLoopForNTimes(1);
  console.log('D');
};

const eventLoopWithWhileLoop = async () => {
  console.log('A')
  setTimeout(() => console.log('B'), 0);
  runWhileLoopForNSeconds(1);
  console.log('D');
};

const eventLoopWithApiCall = () => {
  console.log('A')
  axios.get('https://jsonplaceholder.typicode.com/users').then(() => console.log('B'));
  console.log('C');
}

const eventLoopWithAsyncApiCall = async () => {
  console.log('A')
  await axios.get('https://jsonplaceholder.typicode.com/users').then(() => console.log('B'));
  console.log('C');
}

module.exports = { eventLoopWithForLoop, eventLoopWithWhileLoop, eventLoopWithApiCall, eventLoopWithAsyncApiCall };