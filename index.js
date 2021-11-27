import express from "express";
import router from "./router/index.js";
import volleyball from "volleyball";
const app = express();
app.use(volleyball);
app.set("view engine", "pug");
app.set("views", "views");
app.use(express.static("public"));

app.use("/", router);

app.listen(5000, (err) =>
	err ? console.error(err) : console.log("listening on port 5000")
);
