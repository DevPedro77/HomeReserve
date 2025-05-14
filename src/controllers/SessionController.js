import User from "../models/User.js";

class SessionController {

  // Criando Login para aplicacao
  static async cadastrandoUser(req, res){
    const {email} = req.body;

    try{  
      let user = await User.create({email})
      return res.status(200).json(user);


    }catch(err){
      return res.status(400).json({error: "User nao encontrado"});
    }
  }
}

export default SessionController;