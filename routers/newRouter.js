import express from "express";
import { addMessage } from "../app.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("form");
});
router.post("/", (req, res) => {
  addMessage({
    user: req.body.user,
    message: req.body.message,
    date: req.body.date,
  });
  res.redirect("/");
});

export { router as newRouter };
