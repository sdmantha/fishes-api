import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Fish = new Schema({
  population: { type: String },
  speciesName: { type: String },
  populationStatus: { type: String },
  scientificname: { type: String },
  speciesAliases: { type: String },
  taste: { type: String },
  texture: { type: String },
  color: {type: String}
});


export default mongoose.model("fishes", Fish);