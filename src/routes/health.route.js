import express from "express";
const router = express.Router();

router.get("/health", (req, res) => {
  return res.status(200).json("healthy");
});

router.get("/ready", (req, res) => {
  return res.status(200).json("ready");
});

router.get("/live", (req, res) => {
  return res.status(200).json("live");
});

export default router;
