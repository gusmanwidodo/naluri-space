import * as mongoose from 'mongoose';

interface PiCalculation {
  q: string;
  r: string;
  t: string;
  k: string;
  n: string;
  l: string;
  nn: string;
  nr: string;
  firstrun: boolean;
  currentPi: string;
  lastUpdated: Date;
}

const piCalculationSchema = new mongoose.Schema({
  q: String,
  r: String,
  t: String,
  k: String,
  n: String,
  l: String,
  nn: String,
  nr: String,
  firstrun: Boolean,
  currentPi: String,
  lastUpdated: Date,
});

const piCalculationModel = mongoose.model<PiCalculation & mongoose.Document>('PiCalculation', piCalculationSchema);

export default piCalculationModel;
