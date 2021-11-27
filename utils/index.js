export const randomArray = (a) =>
	a instanceof Array
		? a[Math.round(Math.random() * (a.length - 1))]
		: console.error("argument must be an Array");
