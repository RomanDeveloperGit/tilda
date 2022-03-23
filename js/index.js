const elements = {
	loading: document.querySelector( ".product-page__loading" ),
	productsBasketCount: document.querySelector( ".product-page__basket-counter" ),
	productItem: document.querySelector( ".product-item" )
};

const API_URL = "https://store.tildacdn.com/api/tgetproduct/";

let productsBasketCount = 0;
const productData = {
	title: "",
	description: "",
	currentPrice: 0,
	oldPrice: 0,
	quantityCount: 0,
	images: [],
	currentImageIndex: 0
};

const updateProductsBasket = newCount => {
	productsBasketCount = newCount;

	elements.productsBasketCount.innerHTML = productsBasketCount;
};

const updateProductData = ( title, description, currentPrice, oldPrice, quantityCount, images ) => {
	productData.title = title;
	productData.description = description;
	productData.currentPrice = currentPrice;
	productData.oldPrice = oldPrice;
	productData.quantityCount = quantityCount;
	productData.images = images.map( obj => obj.img );
	productData.currentImageIndex = 0;
};

const setLoading = isActive => {
	if (isActive) {
		elements.loading.style.display = "block";
		elements.productItem.style.display = "none";
	}
	else {
		elements.loading.style.display = "none";
		elements.productItem.style.display = "block";
	}
};

const initProductPage = () => {
	setLoading( true );

	setTimeout( () => setLoading( false ), 1000 );
	updateProductsBasket( 0 );
	
	updateProductData(
		"Studio Headphones",
		"When we first checked out our new headphones, we noticed the box said 'improved bass by cool. We had to wonder, is this marketing jargon, or the real thing? But it only took a moment to realize that bass was not kidding.",
		1195,
		1940,
		10,
		[
			{
				img: "https://static.tildacdn.com/tild3235-6561-4364-a534-623132376536/HDTwo_AngleUp_OnGray.jpeg"
			},
			{
				img: "https://static.tildacdn.com/tild3036-3464-4130-b033-376664633332/HDTwo_Rotated_OnGray.jpeg"
			}
		]
	);
};

console.log( productData );

initProductPage();

console.log( productData );