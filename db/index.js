import { readFileSync } from "fs";

let quran = JSON.parse(
	readFileSync("./db/quran.json", {
		encoding: "utf-8",
		type: "application/json",
	})
);
export const getQuran = () => quran;
export const getSurah = (surah) => {
	return quran.find(({ name }) => name === surah);
};
export const getAya = (surah, aya) => {
	const { verses, name } = getSurah(surah);
	aya = verses.find((v) => Number(v.id) === Number(aya));
	return { ...aya, surahName: name };
};
export const getSurahsNames = () =>
	quran.map(({ name, total_verses }) => ({
		name,
		total_verses,
	}));
const db = {
	getSurahsNames,
	getSurah,
	getAya,
};
export default db;
