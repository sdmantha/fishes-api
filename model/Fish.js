import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Fish = new Schema({
  "Population": { type: String },
  "Species Name": { type: String },
  "Scientific Name": { type: String },
  "Location": { type: String },
  "Taste": { type: String },
  "Texture": { type: String },
  "Color": { type: String }
});


export default mongoose.model("fishes", Fish);