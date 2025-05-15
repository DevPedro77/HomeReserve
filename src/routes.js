import {Router} from "express";
import SessionController from "./controllers/SessionController.js";
import HouseController from "./controllers/HouseController.js";
import multer from "multer";
import uploadConfig from "./config/uploads.js";

const routes = new Router();
const upload = multer(uploadConfig);


// rota teste
routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});
// Rota para cadastrar usuario
routes.post("/login", SessionController.cadastrandoUser); 

// Cadastrar casa
routes.post("/house", upload.single("thumbanail"),HouseController.cadastrandoCasa);

export default routes;
