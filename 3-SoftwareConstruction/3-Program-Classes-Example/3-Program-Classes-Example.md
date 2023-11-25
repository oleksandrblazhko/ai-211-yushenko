```js client
class User {
	#login;
	#password;
	#name;

	constructor(login, password, name) {
		this.#login = login;
		this.#password = password;
		this.#name = name;
	}
}

class Consumer extends User{
	#order;

	makeOrder(Order) {}
	viewProductDetails(Product) {}
}

class Seller extends User{
	viewOrder() {}
}

class Courier extends User {
	viewOrder() { }
	viewConsumer() { }
}

class Order {
	#active;
	#count;
	#price;
	#product;

	constructor(active, count, price, product) {
		this.#active = active;
		this.#count = count;
		this.#price = price;
		this.#product = product;
	}

	viewOrder(Order) {}
}

class Product {
	#name;
	#manufacturer;
	#price;

	constructor(name, manufacturer, price, product) {
		this.#name = name;
		this.#manufacturer = manufacturer;
		this.#price = price;
	}

	veiwProductDetails(product) {}
}
```
