import Reserve from "../models/Reserve.js";
import House from "../models/House.js";
import User from "../models/User.js";



class ReserveController {

  // Fazendo uma reserva
static async reservandoCasa(req, res) {

  const { house_id } = req.params; // Pegando o ID da casa
  const { user_id } = req.headers; // Pegando o ID do usuário
  const { data } = req.body; // Pegando a data da reserva

  const house = await House.findById(house_id); // Verificando se a casa existe
  if(!house){
    return res.status(404).json({ error: "Casa não existe" });
  }

  if(house.status !== true){
    return res.status(401).json({ error: "Casa não disponível" });
  }

  const user = await User.findById(user_id); // Verificando se o usuário existe
  if(String(user._id) === String (house.user)){
    return res.status(401).json({ error: "Você não pode reservar sua própria casa" });
  }

  try {
    const reserve = await Reserve.create({
      user: user_id,
      house: house_id,
      data: data,
    });

    // Populando os campos "user" e "house"
    await reserve.populate("user");
    await reserve.populate("house");

    res.status(201).json({
      message: "Reserva feita com sucesso",
      reserve,
    });
  } catch (error) {
    return res.status(400).json({ error: "Erro ao reservar a casa", details: error });
  }
}

// Listando as reservas do usuário
static async listarReservas(req, res){
  const {user_id} = req.headers; // Pegando o ID do usuário

  try{
    const reservas = await Reserve.find({ user: user_id})
    .populate("house")

    res.status(200).json({
      message: "Reservas listadas com sucesso",
      reservas,
    });
  } catch(error){
    return res.status(400).json({error: "Erro ao listar as reservas", error});
  }
}

// Deletando uma reserva
static async deletandoReserva(req, res){
  const {reserve_id} = req.body; // Pegando o ID da reserva
  // const user = await User.findById(user_id); // Verificando se o usuário existe
  // const reserve = await Reserve.findById(user); // Usuario que fez a reserva

  // if(String(user._id) !== String(reserve.user)){
  //   return res.status(401).json({error: "Usuario não autorizado a deletar essa reserva"});
  // }

  try {
    await Reserve.deleteOne({_id: reserve_id});
    res.send({message: "Reserva deletada com sucesso"});

  }catch(error){
    return res.status(400).json({error: "Erro ao deletar a reserva", error});
  }

}
}


export default ReserveController;