import House from "../models/House.js";

class DashboardController {
  // Listar as casas disponiveis
  static async listarCasasDisponiveis(req, res) {
  const {status} = req.query; //pegando o status da casa
  try {
    const housesDisponiveis = await House.find({status: true})
    res.status(200).json({
      message: "Casas listadas com sucesso",
      housesDisponiveis
    });

  }catch(error){
    return res.status(400).json({error: "Erro ao listar as casas", error});
  }
  // Listar as casas reservadas pelo usuario
}

// listar casas reservadas pelo usuario
static async listarCasasReservadas(req, res) {
  const {user_id} = req.headers; //pegando o id do usuario
  try {
    const housesReservadas = await House.find({user: user_id})
    res.status(200).json({
      message: "Casas listadas com sucesso",
      housesReservadas
    });
  } catch(error){
    return res.status(400).json({error: "Erro ao listar as casas", error});
  }
}
}


export default  DashboardController;