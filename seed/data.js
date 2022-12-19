// import db from "../db/connection.js";

// import Fish from "../model/Fish.js";
// import fishes from "./fishes.json" assert { type: "json" };


// const insertData = async () => {
//   await db.dropDatabase();
//   await Fish.create(fishes);
//   await db.close();
// };

// insertData();
import data from './fishes.json' assert{type: 'json'}
import mongoose from "mongoose"
import fish from '../model/Fish.js'

let fishData =data.map( item=> {
    const fish={}
    fishSpeciesName= item["Species Name"]
    fishTaste= item.Taste
    fishPopulationStatus= item["Population Status"]
    fishscientificname: item[
        Scientific Name]
  fishspeciesAliases: item.speciesAliases
  
  fishtexture: item.Texture
  fishcolor: item.Color


})
