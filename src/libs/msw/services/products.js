import { http, HttpResponse } from "msw";

import { products } from "../database";

const allProduct = products.products;

/** id 값으로 상품 찾아줍니다.  */
const findProductById = (id) => {
	return allProduct.find((product) => +product.id === +id);
};
/** 카테고리가 일치하는 상품의 id (배열) 를 반환합니다. */
const getProductIdsByCategory = (category) => {
	const suitableIds = [];
	allProduct.forEach((product) => {
		if (product.categoryList.includes(category))
			suitableIds.push(product.id);
	});
	return suitableIds;
};

export const getProductsByPaymentMethod = http.get(
	"/products/:payment_method",
	({ params }) => {
		const { payment_method: paymentMethod } = params;
		/** 반환될 배열 */
		const suitableProducts = [];
		/** 거래형태가 "중고" 인 경우 */
		if (paymentMethod === "sale") {
			suitableProducts.push(
				...allProduct.filter((product) => +product.price > 0)
			);
		}
		/** 거래형태가 "나눔" 인 경우 */
		if (paymentMethod === "free") {
			suitableProducts.push(
				...allProduct.filter((product) => +product.price === 0)
			);
		}
		return HttpResponse.json(suitableProducts);
	}
);
export const getProductsByCategories = http.get("/products", ({ request }) => {
	const categories = new URL(request.url).searchParams
		.getAll("categories")[0]
		.split(",");
	/** 카테고리에 맞는 상품 아이디 배열 (중복 가능) */
	const suitableIdsDuplicatePossible = [];
	categories.forEach((category) => {
		suitableIdsDuplicatePossible.push(...getProductIdsByCategory(category));
	});
	// 카테고리에 맞는 상품이 없는 경우, 빈 배열 반환
	if (!suitableIdsDuplicatePossible.length) return HttpResponse.json([]);
	/** 카테고리에 맞는 상품 아이디 배열 (중복 없음) */
	const suitableIdsNoDuplicate = [...new Set(suitableIdsDuplicatePossible)];
	const suitableProducts = [];
	suitableIdsNoDuplicate.forEach((id) => {
		const foundProducts = findProductById(id);
		suitableProducts.push({
			imageSrc: foundProducts.imageSrcList[0],
			categoryList: foundProducts.categoryList,
			title: foundProducts.title,
			createAt: foundProducts.createAt,
			price: foundProducts.price,
			interestCount: foundProducts.interestCount,
			chattingCount: foundProducts.chattingCount,
		});
	});
	return HttpResponse.json(suitableProducts);
});
export const getProductOneDetail = http.get("product/:id", ({ params }) => {
	const { id } = params;
});
