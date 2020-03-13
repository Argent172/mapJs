var prod_title = new Map();
var price_prod = new Map();
var time_prod = new Map();
var prod = ["Edelveys","Five","Exadel", "Roumer"];
for (var i = 0; i < prod.length; i++) {
	prod_title.set(prod[i],"Product"+(i+1));
}
var prod_title_keys = prod_title.keys();

for (var i = 0; i < prod_title.size; i++) {
	price_prod.set(i+100, prod_title_keys.next())
}
var prod_title_keys = prod_title.keys();
for (var i = 0; i < prod_title.size; i++) {
	time_prod.set(i+1, prod_title_keys.next())
}

var obj = new Object();
var inf = [Infinity, -Infinity]

for (var statusId = 0; statusId < inf.length; statusId++) {
	var price_prod_keys = price_prod.keys()
		var time_prod_keys = time_prod.keys()
	var price = inf[statusId];
	for (var i = 0; i < price_prod.size; i++) {
		var next_key = price_prod_keys.next();
		if (next_key.value < price && inf[statusId] == Infinity) {
			price = next_key.value;
		}
		else if (next_key.value > price && inf[statusId] == -Infinity){
			price = next_key.value;
		}
	}
	var time;
	for (var j = 0; j < time_prod.size; j++) {
		var next_key_time_prod =  time_prod_keys.next();
		if (time_prod.get(next_key_time_prod.value).value == price_prod.get(price).value) {
			time = next_key_time_prod.value;
			break;
		}
	}
	obj[prod_title.get(price_prod.get(price).value)] = price + " " + price_prod.get(price).value + " " + time;
}

obj1 = new Object();
for (var statusId = 0; statusId < inf.length; statusId++) {
	prod_title_keys = prod_title.keys();
	price_prod_keys = price_prod.keys();
	time_prod_keys = time_prod.keys();
	var time = inf[statusId];
	for (var i = 0; i < time_prod.size; i++) {
		var next_key = time_prod_keys.next()
		if (next_key.value < time && inf[statusId] == Infinity){
			time = next_key.value;
		}
		else if(next_key.value > time && inf[statusId] == -Infinity){
			time = next_key.value;
		}
		console.log(time);
	}
	var producer = time_prod.get(time).value;
	var title = prod_title.get(producer);
	var price;
	for (var i = 0; i < price_prod.size; i++) {
		var next_key = price_prod_keys.next();
		if (price_prod.get(next_key.value) == producer){
			price = next_key.value;
			break
		}
	}
	obj1[title] = price + " " + producer + " " + time;
}



console.log(obj);
console.log(obj1);
