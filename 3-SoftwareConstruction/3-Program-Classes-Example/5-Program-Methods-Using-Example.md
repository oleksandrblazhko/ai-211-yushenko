```js client
function viewProductDetails(product) {
	// спочатку перевіряємо значення поля name у об'єкті product
	if ("WasserBaum".length > 50) { //довжина строки < 50, перевірку проходимо
		return 0;
	}

	// потім перевіряємо значення поля manufacturer у об'єкті product
	if ("BaumemnBerlin".length > 100) { //довжина строки < 100, перевірку проходимо
		return 0;
	}

	// потім перевіряємо значення поля price у об'єкті product
	if (!(3.2 >= 0 && 3.2 < 100000)) { //число знаходиться в діапазоні [0; 10000], перевірку проходимо
		return 0;
	}
	
	return product;
}
```
