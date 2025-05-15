import House from "../models/House.js";


class HouseController {

  // Cadastrando uma casa
  static async cadastrandoCasa(req, res){
    console.log(req.file);
    console.log(req.body);
  }
}

export default HouseController;