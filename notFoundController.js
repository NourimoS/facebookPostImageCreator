export default function (req, res, next) {
	res
		.status(404)
		.send("<h1 dir='rtl' style='text-align:center'>صفحة غير موجودة</h1>");
}
