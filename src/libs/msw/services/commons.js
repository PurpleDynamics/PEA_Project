import { marketConditions, products, users } from "../database";

const allProduct = products.products;
const allUser = users.users;
const allMarketCondition = marketConditions.marketConditions;

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

/** 카테고리가 일치하는 상품의 id (배열) 를 반환합니다. */
export const getProductIdsByCategory = ({ category }) => {
	const suitableIds = [];
	allProduct.map((product) => {
		if (product.categoryList.includes(category))
			suitableIds.push(product.id);
	});
	return suitableIds;
};
/** 특정 카테고리 상품에 대한 특정 달 평균 시세를 반환합니다. */
export const getAveragePriceForCategoryAndMonth = ({ month, category }) => {
	const market = allMarketCondition.find(
		(marketCondition) => marketCondition.category == category
	);
	if (!market) return -1;
	return market.monthlyAveragePrices[month - 1];
};
/** 상품 가격과 시장 가격의 차이 (백분율) 를 반환합니다. */
export const calculatePricePercentageDifference = ({
	productPrice,
	marketPrice,
}) => {
	const priceDifference = productPrice - marketPrice;
	const priceDifferencePercentage = (priceDifference / marketPrice) * 100;
	return priceDifferencePercentage.toFixed(2);
};
/** 특정 카테고리에 대한 월 별 시장 정보를 반환합니다. */
export const getMonthlyPrices = ({ category }) => {
	const market = allMarketCondition.find(
		(marketCondition) => marketCondition.category == category
	);

	if (!market)
		return {
			category: category,
			monthlyAveragePrices: new Array(12).fill(0),
		};
	return market;
};
