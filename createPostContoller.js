import { getAya } from "./db/index.js";

export default function (req, res) {
	let { surah, aya } = req.params;
	// console.log(surah, aya);
	const data = getAya(surah, aya);

	res.render("post", {
		title: `سورة ${data.surahName} الآية ${data.id}`,
		text: data.text,
	});
	res.json(data);
}
