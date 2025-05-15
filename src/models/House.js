import mongoose from 'mongoose';

const HouseSchema = new mongoose.Schema({
  thumbnail: String,
  description: String,
  price: Number,
  location: String,
  status: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
  },{
    toJSON: {
      virtuals: true,
    }, //colocar a variavel virtual no json
  });

  HouseSchema.virtual("thumbnail_url").get(function () {
    return `http://localhost:5555/files/${this.thumbnail}`;
  }); //passando prop url para  o front-end


// Usuario vai acessar apenas com email

export default mongoose.model("House", HouseSchema)