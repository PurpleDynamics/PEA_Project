import { http, HttpResponse } from "msw";

import { products } from "../database";
import { findProductById, findUserById, getProductIdsByCategory } from "./";

const allProduct = products.products;

export const getProductsByPaymentMethod = http.get(
	"/products",
	({ request }) => {
		const url = new URL(request.url);

		const paymentMethod = url.searchParams.get("paymentMethod");
		const userId = url.searchParams.get("userId");
		const user = findUserById({ userId: userId });

		/** 요청받은 거래 방법에 적절한 상품데이터 배열 */
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
		const result = suitableProducts.map((product) => {
			if (user.wishList.includes(product.id))
				return {
					id: product.id,
					title: product.title,
					price: product.price,
					categoryList: product.categoryList,
					location: product.location,
					interestCount: product.interestCount,
					chattingCount: product.chattingCount,
					isOnSale: product.isOnSale,
					createAt: product.createAt,
					imageSrc: product.imageSrcList[0],
					isInterest: true,
				};
			else
				return {
					id: product.id,
					title: product.title,
					price: product.price,
					categoryList: product.categoryList,
					location: product.location,
					interestCount: product.interestCount,
					chattingCount: product.chattingCount,
					isOnSale: product.isOnSale,
					createAt: product.createAt,
					imageSrc: product.imageSrcList[0],
					isInterest: false,
				};
		});
		return HttpResponse.json(result);
	}
);
export const getProductsByCategories = http.get(
	"/products/search",
	({ request }) => {
		const url = new URL(request.url);
		const categories = url.searchParams.getAll("categories")[0].split(",");
		const userId = url.searchParams.get("userId");
		const user = findUserById({ userId: userId });

		/** 카테고리에 맞는 상품 아이디 배열 (중복 가능) */
		const suitableIdsDuplicatePossible = [];
		categories.forEach((category) => {
			suitableIdsDuplicatePossible.push(
				...getProductIdsByCategory({ category: category })
			);
		});

		// 카테고리에 맞는 상품이 없는 경우, 빈 배열 반환
		if (!suitableIdsDuplicatePossible.length) return HttpResponse.json([]);

		/** 카테고리에 맞는 상품 아이디 배열 (중복 없음) */
		const suitableIdsNoDuplicate = [
			...new Set(suitableIdsDuplicatePossible),
		];

		const result = suitableIdsNoDuplicate.map((productId) => {
			const product = findProductById({ productId: productId });
			if (user.wishList.includes(productId))
				return {
					id: product.id,
					title: product.title,
					price: product.price,
					categoryList: product.categoryList,
					location: product.location,
					interestCount: product.interestCount,
					chattingCount: product.chattingCount,
					isOnSale: product.isOnSale,
					createAt: product.createAt,
					imageSrc: product.imageSrcList[0],
					isInterest: true,
				};
			else
				return {
					id: product.id,
					title: product.title,
					price: product.price,
					categoryList: product.categoryList,
					location: product.location,
					interestCount: product.interestCount,
					chattingCount: product.chattingCount,
					isOnSale: product.isOnSale,
					createAt: product.createAt,
					imageSrc: product.imageSrcList[0],
					isInterest: false,
				};
		});
		return HttpResponse.json(result);
	}
);
export const getProductOneDetail = http.get("product/:id", ({ params }) => {
	const { id } = params;
});
