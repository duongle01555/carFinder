export default {
	carItems: null,
	favoriteCarItems: null,
	activeCar: null,
	bestCar: null,
	carScore: null,
	carData: /* JSON.parse(Api_car_items.run()) */
	[
		{
			id: "1", name: "Toyota Cambri", price: 3500, buildYear: "2003", img: "https://i.imgur.com/0u5TLhb.jpeg", brand: "Toyota", note: "very reliable", favorite: false
		},
		{ 
			id: "2", name: "Mazda 2", price: 5000, buildYear: "2014", img: "https://img.pcauto.com/model/images/touPic/my/Mazda-2-Sedan_134.png", brand: "Mazda", note: "looks super cool", favorite: false
		},
		{
			id: "3", name: "Huyndai i30", price: 5500, buildYear: "2010", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/2018_Hyundai_i30_SE_Nav_T-GDi_1.3_Front.jpg/330px-2018_Hyundai_i30_SE_Nav_T-GDi_1.3_Front.jpg", brand: "Huyndai", note: "my friend Grace drives this car", favorite: true
		}
	]
}