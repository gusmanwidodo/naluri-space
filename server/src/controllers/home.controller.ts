import { Request, Response, Router } from 'express';
import Controller from '../interfaces/controller.interface';
import Spigot from '../lib/spigot';

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
    const result = Spigot.getPi();
    response.send(result);
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
