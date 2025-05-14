import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  }
})


// Usuario vai acessar apenas com email

export default mongoose.model("User", UserSchema)