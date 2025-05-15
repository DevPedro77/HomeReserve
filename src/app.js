import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import routes from './routes.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Simular __dirname no ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class App {
  constructor() {
    this.server = express();

    const uri =
      'mongodb+srv://admin:Pedrocastro99@homereserve.alufdaa.mongodb.net/?retryWrites=true&w=majority&appName=homeReserve';

    mongoose
      .connect(uri, {})
      .then(() => {
        console.log('MongoDB connected');
      })
      .catch((err) => {
        console.log('MongoDB connection error: ', err);
      });

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );

    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
