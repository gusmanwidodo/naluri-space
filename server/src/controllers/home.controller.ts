import { Request, Response, NextFunction, Router } from 'express';
import Controller from '../interfaces/controller.interface';
import Circle from '../lib/circle';

class HomeController implements Controller {
  public path = '';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/pi`, this.getPi);
  }

  private getPi = async (request: Request, response: Response) => {
    const circle = new Circle(14);
    const pi = circle.getPi();

    response.send({
      pi,
    });
  }
}

export default HomeController;
