export default {
	init () {
		data.carItems = appsmith.store.carItems || Api_car_items.data;
		app.refreshfavoriteCarItems(),
			data.activeCar = appsmith.store.activeCar || 1;
		data.carScore = appsmith.store.carScore || "not available";
		data.bestCar = appsmith.store.bestCar || {name: "Not available", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtqlFt5SZfpRi-jda556o-QKgpYfj5Cy24jg&s"};
		console.log(data.carItems);
	},
	refreshfavoriteCarItems () {
		data.favoriteCarItems = data.carItems.filter((carItem) => carItem.favorite == true);
	},
	updateCar (id, update) {
		data.carItems = [...data.carItems[id], ...update];
		storeValue('carItems', data.carItems);
	},
	addFavorite (id) {
		if (data.carItems[id-1].favorite == false) {
			data.carItems[id-1].favorite = true;
			storeValue('carItems', data.carItems);
			app.refreshfavoriteCarItems();
		}
	},
	editNote (id, note) {
		data.carItems[id].note = note;
		storeValue('carItems', data.carItems);
		app.refreshfavoriteCarItems();
	},
	removeFavorite (id) {
		if (data.carItems[id-1].favorite == true) {
			data.carItems[id-1].favorite = false;
			storeValue('carItems', data.carItems);
			app.refreshfavoriteCarItems();
		}
	},
	calculateBestCar () {
		const toyotaRate = 90;
		const huyndaiRate = 80;
		const mazdaRate = 70;
		const idealPrice = 6000;
		function brandConverter (carItem) {
			var brand;
			if (carItem.brand == "Toyota") {brand = toyotaRate}
			else if (carItem.brand == "Mazda") {brand = mazdaRate}
			else {brand = huyndaiRate};
			return brand;
		}
		function priceConverter (carItem) {
			var priceScore;
			if (carItem.price <= idealPrice) {
				priceScore = (idealPrice - carItem.price) / idealPrice * 100;
			}
			else {
				priceScore = Math.max((0, 100 - (carItem.price - idealPrice) / 100));
			}
			return priceScore;
		}
		var i = 0;
		var bestScore = 0;
		while (i < data.favoriteCarItems.length) {
			var carItem = data.favoriteCarItems[i];
			var Score = 0.6*priceConverter(carItem) + 0.4*brandConverter(carItem);
			if (Score > bestScore) {
				bestScore = Score;
				data.bestCar = data.favoriteCarItems[i];
			};
			i += 1;
		}
		storeValue('carScore', String(bestScore));
		storeValue('bestCar', data.bestCar);
	}
}