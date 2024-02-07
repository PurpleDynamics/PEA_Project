import { products, users } from "../database";

const allProduct = products.products;
const allUser = users.users;

/**
 * @function
 */
export const findProductById = ({ productId }) => {
	return allProduct.find((product) => +product.id == +productId);
};

/**
 * @function
 */
export const findUserById = ({ userId }) => {
	return allUser.find((user) => +user.id == +userId);
};

/**
 * @function
 * 카테고리가 일치하는 상품의 id (배열) 를 반환합니다.
 */
export const getProductIdsByCategory = ({ category }) => {
	const suitableIds = [];
	allProduct.map((product) => {
		if (product.categoryList.includes(category))
			suitableIds.push(product.id);
	});
	return suitableIds;
};
