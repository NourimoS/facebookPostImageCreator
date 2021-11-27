import { Router } from "express";
import { getSurah } from "../db/index.js";
import notFoundController from "../notFoundController.js";
import { randomArray } from "../utils/index.js";
import { getAya } from "../db/index.js";
const app = Router({ mergeParams: true });

app.get("/", (req, res, next) => {
	const {
		params: { surah },
	} = req;

	const fondSurah = getSurah(surah);

	if (fondSurah) {
		res.json(fondSurah);
	} else {
		notFoundController(req, res, next);
	}
});
app.get("/random", ({ params: { surah } }, res) => {
	let { verses } = getSurah(surah);
	res.json(randomArray(verses));
});
app.get("/:aya", (req, res, next) => {
	let { surah, aya } = req.params;

	aya = getAya(surah, aya);
	if (aya) {
		res.json(aya);
	} else {
		notFoundController(req, res, next);
	}
});

export default app;
