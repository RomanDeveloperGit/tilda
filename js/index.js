const elements = {
	loading: document.querySelector( ".product-page__loading" ),
	productsBasketCount: document.querySelector( ".product-page__basket-counter" ),
	productItem: document.querySelector( ".product-item" ),
	productImageBox: document.querySelector( ".product-item__img-box" ),
	productTitle: document.querySelector( ".product-item__title" ),
	productDescription: document.querySelector( ".product-item__description" ),
	productCurrentPrice: document.querySelector( ".product-item__current-price" ),
	productOldPrice: document.querySelector( ".product-item__old-price" ),
	productQuantityCount: document.querySelector( ".product-item__quantity-count" ),
	productBasketButton: document.querySelector( ".product-item__basket-button" )
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

const setProductsBasket = newCount => {
	productsBasketCount = newCount;

	elements.productsBasketCount.innerHTML = productsBasketCount;
};

const setCurrentImageIndex = newIndex => {
	const maxImageIndex = productData.images.length - 1;

	if (newIndex < 0) newIndex = maxImageIndex;
	else if (newIndex > maxImageIndex) newIndex = 0;

	productData.currentImageIndex = newIndex;
};

const setProductData = ( title, description, currentPrice, oldPrice, quantityCount, images ) => {
	productData.title = title;
	productData.description = description;
	productData.currentPrice = currentPrice;
	productData.oldPrice = oldPrice;
	productData.quantityCount = quantityCount;
	productData.images = images.map( obj => obj.img );

	// Если осталось 0 товара, то кнопку в disabled бросаем.

	setCurrentImageIndex( 0 );
};

const initProductPage = async() => {
	setLoading( true );

	try {
		const response = await fetch( API_URL );
		const data = await response.json();

		setProductsBasket( 0 );
		setProductData( data.title, data.descr, data.price, data.oldprice, data.quantity, JSON.parse( data.images ) );
	}
	catch (error) {
		console.error( error );
	}
	finally {
		setLoading( false );
	}
};

initProductPage();