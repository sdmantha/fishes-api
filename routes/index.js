import { Router } from "express";
import fishRoutes from "./fishes.js";

const router = Router();


router.get("/", (req, res) => {
  res.send("This is the api root!");
});
router.use("/houses", fishRoutes);


export default router;