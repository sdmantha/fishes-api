import Fish from "../model/Fish.js";



export const getFishes = async (req, res) => {
  try {
    const fish = await Fish.find();
    res.json(fish);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const getFish = async (req, res) => {
  try {
    const { id } = req.params;
    const fish = await Fish.findById(id);

    if (fish) {
      return res.json(fish);
    }

    res.status(404).json({ message: "Fish not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createFish = async (req, res) => {
  try {
    const fish = new Fish(req.body);
    await fish.save();
    res.status(201).json(fish);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateFish = async (req, res) => {
  try {
    const { id } = req.params;
    const fish = await Fish.findByIdAndUpdate(id, req.body);
    res.status(201).json(fish);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteFish = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Character.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Fishes deleted!");
    }

    throw new Error("Fish not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};