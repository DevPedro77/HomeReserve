import {Router} from "express";
import SessionController from "./controllers/SessionController.js";

const routes = new Router();

// rota teste
routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});


// Rota para cadastrar usuario
routes.post("/login", SessionController.cadastrandoUser); 

export default routes;
