class RecentCounter {
  queue: number[] = [];

  constructor() {}

  ping(t: number): number {
    this.queue.push(t);

    while (this.queue[0] < t - 3000) {
      this.queue.shift();
    }

    return this.queue.length;
  }
}
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

const times = [0, 1, 3000, 3001, 4000, 7000, 12000]
const out = [];

const counter = new RecentCounter();

for (let time of times) {
  out.push(counter.ping(time))
}

console.log(out)