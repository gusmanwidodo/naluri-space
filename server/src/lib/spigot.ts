// tslint:disable
const BigInteger = require('jsbn').BigInteger;

let currentPi = '';
let lastUpdated = new Date();
let isStarted = false;

const bi = (n: any, b = 10) => new BigInteger(n.toString(), b);

const calculatePi = () => {
  let q = bi(1);
  let r = bi(0);
  let t = bi(1);
  let k = bi(1);
  let n = bi(3);
  let l = bi(3);

  const one = bi(1);
  const two = bi(2);
  const three = bi(3);
  const four = bi(4);
  const seven = bi(7);
  const ten = bi(10);

  let nn = 0;
  let nr = 0;
  let firstrun = 1;

  const write = (s: string) => {
    currentPi += s;
    lastUpdated = new Date();
    console.log(currentPi);
  };

  const recursiveCalculatePi = (q: any, r: any, t: any, k: any, n: any, l: any) => {
    while (isStarted) {
      // (4 * q + r - t) < n * t
      if (q.multiply(four).add(r).subtract(t).compareTo(n.multiply(t)) < 0) {

        // update the digit of pi
        write(n.toString());

        if (firstrun === 1) {
          write('.');
          firstrun = 0;
        }

        nr = (r.subtract(n.multiply(t))).multiply(ten); // (r - (n * t)) * 10
        n = (q.multiply(three).add(r)).multiply(ten).divide(t).subtract(n.multiply(ten)); // (q * 3 + r) * 10 / t - (n * 10)
        q = q.multiply(ten); // q * 10
        r = nr;

        return setTimeout(() => {
          recursiveCalculatePi(q, r, t, k, n, l);
        }, 1000);

      } else {

        nr = q.multiply(two).add(r).multiply(l); // (q * 2 + r) * l
        nn = q.multiply(k).multiply(seven).add(two).add(r.multiply(l)).divide(t.multiply(l)); // q * (k * 7 + 2) + (r * l) / (t * l)

        q = q.multiply(k); // q * k
        t = t.multiply(l); // t * l
        l = l.add(two); // l + 2
        k = k.add(one); // k + 1
        n = nn;
        r = nr;
      }
    }
  };

  recursiveCalculatePi(q, r, t, k, n, l);
};

const start = () => {
  isStarted = true;
  calculatePi();
};

const stop = () => {
  isStarted = false;
};

const getPi = () => {
  return {
    lastUpdated,
    currentPi,
  };
};

export default {
  getPi,
  start,
  stop,
};
