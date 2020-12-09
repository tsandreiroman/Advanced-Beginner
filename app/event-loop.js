const runForLoopForNTimes = (times) => {
  for (let i = 0; i < times; i++) {
    console.log('C')
  }
}

eventLoop = async () => {
  console.log('A')
  setTimeout(() => console.log('B'), 0);
  runForLoopForNTimes(3);
  console.log('D');
};

// const runWhileLoopForNSeconds = (secs) => {
//   let start = Date.now();
//   let now = start;

//   while (now - start < (secs * 1000)) {
//     now = Date.now();
//   }
// }

module.exports = { eventLoop };