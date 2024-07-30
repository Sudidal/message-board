import express from "express";
import { getMessages } from "../app.js";

const router = express.Router();

router.get("/", (req, res) => {
  const messages = getMessages();
  res.render("index", { messages });
});

export { router as indexRouter };
