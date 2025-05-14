import express from 'express';
import mongoose from 'mongoose';
import routes from './routes.js';



class App{
  constructor(){
    this.server = express();

    const uri = "mongodb+srv://admin:Pedrocastro99@homereserve.alufdaa.mongodb.net/?retryWrites=true&w=majority&appName=homeReserve";

    mongoose.connect(uri, {
  
    }).then(() => {
      console.log("MongoDB connected");
    }).catch((err) => {
      console.log("MongoDB connection error: ", err);
    });

    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes)
  }
}


export default new App().server;