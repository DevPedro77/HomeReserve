import mongoose from 'mongoose';

const ReserveSchema = new mongoose.Schema({
  data: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  house:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "House",
  }
})


export default mongoose.model("Reserve", ReserveSchema)