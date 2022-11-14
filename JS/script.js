class Menu {
	constructor(image, title, desc, id, ing) {
		this.image = image;
		this.title = title;
		this.desc = desc;
		this.id = id;
		this.ing = ing;
	}
}

let listCofs = [];
console.log(listCofs.length);

fetch("coffee.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (products) {
		let placeholder = document.querySelector("#data-output");
		let out = "";
		//console.log(products);
		for (let product of products) {
			//console.log(product);
			out += `
			<tr>
				<td> <img src='${product.image}'> </td>
				<td>${product.title}</td>
				<td>${product.description}</td>
				<td>${product.id}</td>
				<td>${product.ingredients.sort()}</td>
			</tr>
		`;
			const cof = new Menu(product.image, product.title, product.description, product.id, product.ingredients);
			listCofs.push(cof);
		}

		placeholder.innerHTML = out;
	});




console.log("listCofs");

const l = function () {
	console.log(listCofs);
}




//for(int i= 0; i<)


let result = document.querySelector(".qq");
let chooseIng = [];
let checks = document.querySelectorAll('.checkbox');

//console.log(checks);


const f = function(){
	for (let k of listCofs){

		let ing = k.ing;
		let ddd = ing.filter(key => !chooseIng.includes(key)).concat(chooseIng.filter(x => !ing.includes(x)));

		console.log(k.id + " айди");
		console.log(ddd);

		if(ddd.length === 0){
			result.innerHTML = `
			<div class="cofdiv">
				<img class="image" src='${k.image}'>
				<p class="p-title">${k.title}</p>
				<p class="p-desc">${k.desc}</p>
			</div>`;
			break;
		}
		else{
			result.innerHTML = ``;
		}

	}
}


for (let check of checks) {
	check.addEventListener('click', function () {

		//f();
		if (this.checked == true) {
			chooseIng.push(this.value);

			/*result.innerHTML = `
			<div class="cofdiv">
				<img class="image" src='${listCofs[5].image}'>
				<p class="p-title">${listCofs[3].title}</p>
				<p class="p-desc">${listCofs[3].desc}</p>
			</div>`;*/

			console.log(chooseIng);
			chooseIng.sort();

			f();


		} else {
			chooseIng = chooseIng.filter(e => e !== this.value);
			//result.innerHTML = ``;
			f();
			console.log(chooseIng.sort());
		}


	})
}

//console.log(chooseIng);