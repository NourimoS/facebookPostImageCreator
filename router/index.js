import { Router } from "express";
import createPostContoller from "../createPostContoller.js";
import { getQuran, getSurahsNames } from "../db/index.js";
import notFoundController from "../notFoundController.js";
import { randomArray } from "../utils/index.js";
const app = Router({ mergeParams: true });
import surahRouter from "./surahRouter.js";

app.get("/surahsData", (req, res) => {
	const surahNames = getSurahsNames();
	res.json(surahNames);
});
app.get("/quran", (req, res) => {
	res.json(getQuran());
});
app.get("/createPost/:surah/:aya", createPostContoller);
app.get("/randomSurah", (req, res) => res.json(randomArray(getQuran())));
app.get("/randomAya", (req, res) => {
	const { name, verses } = randomArray(getQuran());
	res.json({ name, ...randomArray(verses) });
});
app.use("/:surah", surahRouter);
app.use(notFoundController);
export default app;
