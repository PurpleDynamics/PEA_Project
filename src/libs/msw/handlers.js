import {
	getProductsByCategories,
	getProductsByPaymentMethod,
} from "./services";

export const handlers = [getProductsByPaymentMethod, getProductsByCategories];
