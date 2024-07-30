import express from "express";
import path from "path";
import { indexRouter } from "./routers/indexRouter.js";
import { newRouter } from "./routers/newRouter.js";

const app = express();
const PORT = 3000;
const messages = [];

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(PORT, () => {
  console.log("server listening at port: " + PORT);
});

function addMessage(message) {
  messages.push(message);
}
function getMessages() {
  return messages;
}

export { addMessage, getMessages };
