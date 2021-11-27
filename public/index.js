const baseUrl = "http://localhost:5000";
window.onload = async () => {
	const form = document.querySelector("#dataform");
	const surahSelect = document.querySelector("#surah");
	const ayaSelect = document.querySelector("#aya");
	const quranData = await getQuranData();
	quranData.forEach((surah) => {
		const opt = document.createElement("option");
		opt.value = surah.name;
		opt.innerHTML = surah.name;
		surahSelect.appendChild(opt);
	});
	ayaSelect.setAttribute("max", quranData[0].total_verses);
	surahSelect.onchange = (e) => {
		const surah = e.target.value;
		const fondSurah = quranData.find((v) => v.name === surah);
		ayaSelect.setAttribute("max", fondSurah.total_verses);
	};
	const result = document.querySelector("#result");

	async function getAya(e) {
		e.preventDefault();
		const fd = new FormData(form);
		const [surah, aya] = fd.values();
		const data = await fetch(`${baseUrl}/${surah}/${aya}`, {
			method: "GET",
		});
		const resp = await data.json();
		result.innerHTML = `
	<p>﴿${resp?.text}﴾</p>
	<p>${resp?.surahName} ${resp?.id}</p>
	`;
	}
	form.onsubmit = getAya;
};

async function getQuranData() {
	return (await fetch(`${baseUrl}/surahsData`, { method: "GET" })).json();
}
