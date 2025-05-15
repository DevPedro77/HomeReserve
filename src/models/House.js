import mongoose from 'mongoose';

const HouseSchema = new mongoose.Schema({
  thumbanail: String,
  description: String,
  price: Number,
  location: String,
  status: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
  })


// Usuario vai acessar apenas com email

export default mongoose.model("House", HouseSchema)