import { Request, Response, Router } from 'express';
import Controller from '../interfaces/controller.interface';
import Spigot from '../lib/spigot';
import piCalculationModel from '../models/picalculation.model';

class HomeController implements Controller {
  public path = '';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/pi`, this.getPi);
    this.router.post(`${this.path}/pi/calculate`, this.calculatePi);
  }

  private getPi = async (request: Request, response: Response) => {
    let result = {
      lastUpdated: new Date(),
      currentPi: '0',
    };

    const data = await piCalculationModel.findOne().sort({ _id: -1 }).limit(1);

    if (data) {
      result = {
        lastUpdated: data.lastUpdated,
        currentPi: data.currentPi,
      };
    }

    response.send({
      lastUpdated: result.lastUpdated,
      currentPi: result.currentPi,
    });
  }

  private calculatePi = async (request: Request, response: Response) => {
    const payload = request.body;

    if (payload.start) {
      Spigot.start();
    } else {
      Spigot.stop();
    }

    response.send({
      isStarted: payload.start,
    });
  }
}

export default HomeController;
