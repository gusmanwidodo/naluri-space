import { Request, Response, NextFunction, Router } from 'express';
import Controller from '../interfaces/controller.interface';

class HomeController implements Controller {
  public path = '/';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getHome);
  }

  private getHome = async (request: Request, response: Response) => {
    response.send('home');
  }
}

export default HomeController;
