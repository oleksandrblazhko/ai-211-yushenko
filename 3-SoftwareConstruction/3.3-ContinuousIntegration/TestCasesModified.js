function viewProductDetails(product) {
        // спочатку перевіряємо значення поля name у об'єкті product
        if product.name.length > 50) { //довжина строки < 50, перевірку проходимо
                return 0;
        }

        // потім перевіряємо значення поля manufacturer у об'єкті product
        if (product.manufacturer.length > 100) { //довжина строки < 100, перевірку проходимо
                return 0;
        }

        // потім перевіряємо значення поля price у об'єкті product
        if (!(product.price >= 0 && product.price < 100000)) { //число знаходиться в діапазоні [0; 10000], перевірку проходимо
                return 0;
        }

        return product;
}


let result = viewProductDetails({
        name: "WasserBlanche"
        manufacturer: "GamburgWasser"
        price: 3.2
})

if result == 0) console.log("TC1.1: Failed")
else console.log("TC1.1: Passed")

result = viewProductDetails({
        name: "BelrineLakeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        manufacturer: "LakeLake",
        price: 5.6,
})

if (result != 0) console.log("TC1.2: Failed")
else console.log("TC1.2: Passed")

result = viewProductDetails({
        name: "GoodenWasser",
        manufacturer: "BaumLukkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkke",
        price: 2.5,
})

if (result != 0) console.log("TC1.3: Failed")
else console.log("TC1.3: Passed")

result = viewProductDetails({
        name: "GimbergenGurden",
        manufacturer: "GardenLaka",
        price: -1000,
})

if (result != 0) console.log("TC1.4: Failed")
else console.log("TC1.4: Passed")
