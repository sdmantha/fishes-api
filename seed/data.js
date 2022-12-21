import db from "../db/connection.js";
import fishes from './fishes.json' assert{type: 'json'}
import fish from "../model/Fish.js";
// import mongoose from 'mongoose'



let fishData = fishes.map( item=> {
    const fish={}
    fish["Population"]= item["Population"]
    fish['Species Name']= item['Species Name']
    fish['Scientific Name']=item['Scientific Name']
    fish['Location']= item['Location']
    fish['Taste']= item['Taste']
    fish['Texture']= item['Texture']
    fish['Color']= item['Color']
    console.log(item['Species Name'])
    return fish
})


const insertData = async () => {
    await fish.deleteMany({})

    await fish.create(fishData);

    await db.close();
  };

  insertData();

  