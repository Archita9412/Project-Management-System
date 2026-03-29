import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/protected", verifyJWT, (req, res) => {
  res.json({
    message: "You are authenticated",
    user: req.user,
  });
});

export default router;