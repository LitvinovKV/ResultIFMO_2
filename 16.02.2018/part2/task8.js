console.time();
setTimeout(function tick() {
  console.timeEnd();
  console.time();
  setTimeout(function tick() {
      console.timeEnd();
      console.time();
      setTimeout(function tick() {
          console.timeEnd();
      }, 10000);
  }, 7000);
}, 3000);