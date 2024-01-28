let fruits = new Array("apple", "orange", "lemon", "apricot");
let i = 0;
while (i < fruits.length) {
	document.body.innerHTML += `<p>${fruits[i]}</p>`;
	console.log(fruits[i]);
	i = i + 1;
}
