import User from "../models/User.js";
import * as Yup from "yup"; // Importando o Yup para validação de dados
class SessionController {

  // Criando Login para aplicacao
  static async cadastrandoUser(req, res){
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    })

    if(!(await schema.isValid(req.body))){
      return res.status(401).json({error: "Erro na validação dos dados"});
    }

    const {email} = req.body;

    try{  
      let user = await User.create({email})
      return res.status(201).json(user);


    }catch(err){
      return res.status(401).json({error: "Usuario ja existe"});
    }
  }
}

export default SessionController;