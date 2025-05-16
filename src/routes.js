import {Router} from "express";

import SessionController from "./controllers/SessionController.js";
import HouseController from "./controllers/HouseController.js";
import DashboardController from "./controllers/DashboardController.js";
import ReserveController from "./controllers/ReserveController.js";

import multer from "multer";
import uploadConfig from "./config/uploads.js";

const routes = new Router();
const upload = multer(uploadConfig);



// Rota para cadastrar usuario
routes.post("/login", SessionController.cadastrandoUser); 

// Cadastrar casa
routes.post("/house", upload.single("thumbnail"),HouseController.cadastrandoCasa);

// Listar casas por disponibilidade
routes.get("/house", HouseController.listandoCasas);

// Editar casa
routes.put("/house/:house_id", upload.single("thumbnail"),HouseController.editandoCasa);

// Deletar casa
routes.delete("/house", HouseController.deletandoCasa);


// Listar casas no dashboard disponiveis
routes.get("/dashboard", DashboardController.listarCasasDisponiveis);

// Listar casas no dashboard reservadas por usuario
routes.get("/dashboard", DashboardController.listarCasasReservadas);

// Reservar casa
routes.post("/house/:house_id/reserve", ReserveController.reservandoCasa);


export default routes;
