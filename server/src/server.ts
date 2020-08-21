import 'dotenv/config';
import App from './app';
import HomeController from './controllers/home.controller';

const app = new App(
  [
    new HomeController(),
  ],
);

app.listen();
