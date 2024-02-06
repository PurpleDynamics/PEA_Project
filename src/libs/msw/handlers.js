import {
	getProductsByCategories,
	getProductsByPaymentMethod,
} from "./services/products";

export const handlers = [getProductsByPaymentMethod, getProductsByCategories];
