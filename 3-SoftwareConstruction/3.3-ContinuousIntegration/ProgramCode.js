function viewProductDetails(product) {
	// спочатку перевіряємо значення поля name у об'єкті product
	if (product.name.length > 50) {
		return 0;
	}

	// потім перевіряємо значення поля manufacturer у об'єкті product
	if (product.manufacturer.length > 100) {
		return 0;
	}

	// спочатку перевіряємо значення поля price у об'єкті product
	if (!(product.price >= 0 & product.price < 100000)) {
		return 0;
	}
	//якщо одна із цих перевірок виконається, то програма поверне значення 0
	//це означає, що є помлка

	// якщо всі провірки не пройли, то все правильно
	//функція повертає значення product
	return product;
}
