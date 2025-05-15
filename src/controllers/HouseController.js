import House from "../models/House.js";
import User from "../models/User.js";


class HouseController {

  // Listando todas as casas
  static async listandoCasas(req, res){
    const {status} = req.query; //pegando o status da casa

    try{
      const houses = await House.find({status})
      res.status(200).json({
        message: "Casas listadas com sucesso",
        houses
      });


    }catch(error){
      return res.status(400).json({error: "Erro ao listar as casas", error});
    }
  }

  // Cadastrando uma casa
  static async cadastrandoCasa(req, res){
    const {filename} = req.file; //pegando a foto
    const {  description, price, location, status } = req.body; //pegando os dados do body
    const {user_id} = req.headers; //pegando o id do usuario

    try {
      const house = await House.create({
        user: user_id,
        thumbnail: filename,
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

  // Editando uma casa
  static async editandoCasa(req, res){
    const {house_id} = req.params; //pegando o id da casa
    const {filename} = req.file; //pegando a foto
    const {  description, price, location, status } = req.body; //pegando os dados do body
    const {user_id} = req.headers; //pegando o id do usuario

    const user = await User.findById(user_id); //verificando se o usuario existe
    const house = await House.findById(house_id); //verificando se a casa existe

    if (String(user._id) !== String(house.user)) {
      return res.status(401).json({error: "Usuario não autorizado a editar essa casa"});

    }

    try{
      await House.updateOne({_id: house_id,}, {
        user: user_id,
        thumbnail: filename,
        description,
        location,
        price,
        status
      })

      res.status(200).json({
        message: "Casa editada com sucesso"
      });
    }
    catch(error){
      return res.status(400).json({error: "Erro ao editar a casa", error});
    }
  }

  // Deletando uma casa
  static async deletandoCasa(req, res) {
  const { house_id } = req.body; // Pegando o ID da casa
  const { user_id } = req.headers; // Pegando o ID do usuário

 const user = await User.findById(user_id); //verificando se o usuario existe
    const house = await House.findById(house_id); //verificando se a casa existe

    if (String(user._id) !== String(house.user)) {
      return res.status(401).json({error: "Usuario não autorizado a excluir essa casa"});

    }

  try {
    // Deletar a casa
    await House.deleteOne({ _id: house_id });

    res.status(200).json({
      message: "Casa deletada com sucesso",
    });
  } catch (error) {
    return res.status(400).json({ error: "Erro ao deletar a casa", details: error });
  }
}
}

export default HouseController;