import House from "../models/House.js";


class HouseController {

  // Cadastrando uma casa
  static async cadastrandoCasa(req, res){
    const {filename} = req.file; //pegando a foto
    const {  description, price, location, status } = req.body; //pegando os dados do body
    const {user_id} = req.headers; //pegando o id do usuario

    try {
      const house = await House.create({
        user: user_id,
        thumbanail: filename,
        description,
        location,
        price,
        status
      })

      res.status(201).json({
        message: "Casa cadastrada com sucesso",
        house
      });
    }catch(error){
      return res.status(400).json({error: "Erro ao cadastrar a casa", error});
    }
  }
}

export default HouseController;