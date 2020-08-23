// tslint:disable
import piCalculationModel from '../models/picalculation.model';

const BigInteger = require('jsbn').BigInteger;

const bi = (n: any, b = 10) => new BigInteger(n.toString(), b);

let isStarted = false;

const calculatePi = async () => {

  let currentPi = '';
  let lastUpdated = new Date();

  let q = bi(1);
  let r = bi(0);
  let t = bi(1);
  let k = bi(1);
  let n = bi(3);
  let l = bi(3);
  let nn = 0;
  let nr = 0;
  let firstrun = true;

  const lastCalculation = await piCalculationModel.findOne().sort({ _id: -1 }).limit(1);

  if (lastCalculation) {
    q = bi(lastCalculation.q);
    r = bi(lastCalculation.r);
    t = bi(lastCalculation.t);
    k = bi(lastCalculation.k);
    n = bi(lastCalculation.n);
    l = bi(lastCalculation.l);
    nn = bi(lastCalculation.nn);
    nr = bi(lastCalculation.nr);
    firstrun = false;

    currentPi = lastCalculation.currentPi;
    lastUpdated = new Date(lastCalculation.lastUpdated);
  }

  const one = bi(1);
  const two = bi(2);
  const three = bi(3);
  const four = bi(4);
  const seven = bi(7);
  const ten = bi(10);

  const write = async (s: string, q?: string, r?: string, t?: string, k?: string, n?: string, l?: string) => {
    currentPi += s;
    lastUpdated = new Date();

    const storeCalculation = new piCalculationModel({
      q,
      r,
      t,
      k,
      n,
      l,
      nn,
      nr,
      firstrun,
      currentPi,
      lastUpdated,
    });

    await storeCalculation.save();
  };

  const recursiveCalculatePi = (q: any, r: any, t: any, k: any, n: any, l: any) => {
    while (isStarted) {
      // (4 * q + r - t) < n * t
      if (q.multiply(four).add(r).subtract(t).compareTo(n.multiply(t)) < 0) {

        // update the digit of pi
        const s = n.toString();

        nr = (r.subtract(n.multiply(t))).multiply(ten); // (r - (n * t)) * 10
        n = (q.multiply(three).add(r)).multiply(ten).divide(t).subtract(n.multiply(ten)); // (q * 3 + r) * 10 / t - (n * 10)
        q = q.multiply(ten); // q * 10
        r = nr;

        write(s, q.toString(), r.toString(), t.toString(), k.toString(), n.toString(), l.toString());

        if (firstrun) {
          write('.');
          firstrun = false;
        }

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

export default {
  start,
  stop,
};
