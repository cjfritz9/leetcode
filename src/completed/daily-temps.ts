function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [];
  const result = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    let t = temperatures[i];
    console.log({ stack, t, i });

    while (stack.length > 0 && temperatures[stack[stack.length - 1]] < t) {
      console.log({t, t2: temperatures[stack[stack.length - 1]]})
      let p = stack.pop() as number;
      result[p] = i - p;
    }
    stack.push(i);
  }
  // let p = i + 1;
  // while (i < temperatures.length) {
  //   if (temperatures[i] < temperatures[p]) {
  //     temperatures[i] = p - i;
  //     p++;
  //     break;
  //   } else {
  //     if (p === temperatures.length) {
  //       temperatures[i] = 0;
  //       break;
  //     }
  //   }
  //   p++;
  // }

  return result;
}

// function dailyTemperatures2(temperatures: number[]): number[] {
//   console.time('f2');
//   let stack = [];
//   let output = new Array(temperatures.length).fill(0);

//   for (let i = 0; i < temperatures.length; i++) {
//     let currentTemp = temperatures[i];
//     while (stack.length > 0 && currentTemp > stack[stack.length - 1].val) {
//       let { ind } = stack.pop() as { val: number; ind: number };
//       output[ind] = i - ind;
//     }
//     stack.push({ val: currentTemp, ind: i });
//   }
//   console.timeEnd('f2');
//   return output;
// }

console.log({
  RES: dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]),
  EXP: [1, 1, 4, 2, 1, 1, 0, 0]
});
// console.log({
//   RES: dailyTemperatures2([
//     73, 74, 75, 71, 69, 72, 76, 73, 73, 74, 75, 71, 69, 72, 76, 73, 73, 74, 75,
//     71, 69, 72, 76, 73, 73, 74, 75, 71, 69, 72, 76, 73, 73, 74, 75, 71, 69, 72,
//     76, 73, 73, 74, 75, 71, 69, 72, 76, 73, 73, 74, 75, 71, 69, 72, 76, 73, 73,
//     74, 75, 71, 69, 72, 76, 73, 73, 74, 75, 71, 69, 72, 76, 73, 73, 74, 75, 71,
//     69, 72, 76, 73, 73, 74, 75, 71, 69, 72, 76, 73, 73, 74, 75, 71, 69, 72, 76,
//     73, 73, 74, 75, 71, 69, 72, 76, 73, 73, 74, 75, 71, 69, 72, 76, 73, 73, 74,
//     75, 71, 69, 72, 76, 73, 73, 74, 75, 71, 69, 72, 76, 73, 73, 74, 75, 71, 69,
//     72, 76, 73, 73, 74, 75, 71, 69, 72, 76, 73, 73, 74, 75, 71, 69, 72, 76, 73,
//     73, 74, 75, 71, 69, 72, 76, 73, 73, 74, 75, 71, 69, 72, 76, 73, 73, 74, 75,
//     71, 69, 72, 76, 73, 73, 74, 75, 71, 69, 72, 76, 73, 73, 74, 75, 71, 69, 72,
//     76, 73, 73, 74, 75, 71, 69, 72, 76, 73, 73, 74, 75, 71, 69, 72, 76, 73, 73,
//     74, 75, 71, 69, 72, 76, 73, 73, 74, 75, 71, 69, 72, 76, 73, 73, 74, 75, 71,
//     69, 72, 76, 73, 73, 74, 75, 71, 69, 72, 76, 73, 73, 74, 75, 71, 69, 72, 76,
//     73, 73, 74, 75, 71, 69, 72, 76, 73
//   ]),
//   EXP: [1, 1, 4, 2, 1, 1, 0, 0]
// });
