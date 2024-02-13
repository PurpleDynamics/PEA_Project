import { http, HttpResponse } from "msw";

import { products } from "../database";
import {
	calculatePricePercentageDifference,
	findProductById,
	findUserById,
	getMonthlyPrices,
	getProductIdsByCategory,
} from "./";

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
				...allProduct.filter(
					(product) =>
						+product.price > 0 && product.isOnSale === "true"
				)
			);
		}
		/** 거래형태가 "나눔" 인 경우 */
		if (paymentMethod === "free") {
			suitableProducts.push(
				...allProduct.filter(
					(product) =>
						+product.price === 0 && product.isOnSale === "true"
				)
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
export const getProductOne = http.get(
	"products/:productId",
	({ params, request }) => {
		const { productId } = params;
		/** 상품 정보 */
		const product = findProductById({ productId: productId });
		/** 사용자 정보 */
		const url = new URL(request.url);
		const userId = url.searchParams.get("userId");
		const user = findUserById({ userId: userId });

		const mainCategory = product.categoryList[0];

		/** 조회한 달(month) */
		const currentMonth = new Date().getMonth() + 1;
		const monthlyMarketInfo = getMonthlyPrices({
			category: mainCategory,
		});
		/** 월별 가격정보 */
		const monthlyPrices = monthlyMarketInfo.monthlyAveragePrices;
		/** 해당 달의 동일 카테고리 평균 가격 */
		const currentMonthAveragePrice =
			monthlyMarketInfo.monthlyAveragePrices[currentMonth - 1];
		/** 상품의 가격 차이 (백분율) */
		const pricePercentageDifference = calculatePricePercentageDifference({
			productPrice: product.price,
			marketPrice: currentMonthAveragePrice,
		});
		const sameCategoryProductList = [];
		user.productList.map((productId) => {
			const usersProduct = findProductById({ productId: productId });
			if (usersProduct.categoryList.includes(mainCategory))
				sameCategoryProductList.push(productId);
		});

		const result = {
			id: product.id,
			categoryList: product.categoryList,
			imageSrcList: product.imageSrcList,
			title: product.title,
			location: product.location,
			price: product.price,
			detail: product.detail,
			createAt: product.createAt,
			interestCount: product.interestCount,
			chattingCount: product.chattingCount,

			mannerTemperature: user.mannerTemperature, // 판매자 매너온도
			numberOfSellersProducts: user.productList.length, // 판매자가 등록한 상품 갯수
			numberOfSellersSameCategoryProductList:
				sameCategoryProductList.length, // 판매자가 등록한 동일 카테고리 상품 갯수
			SellersChatCount: user.chattingCount, // 판매자와 채팅을 나눴던 사용자 수

			currentMonth: currentMonth, // 이번 달
			monthlyPrices: monthlyPrices, // 월 별, 동일 카테고리 가격
			currentMonthAveragePrice: currentMonthAveragePrice, // 동일 달(month), 동일 카테고리 평균 가격
			priceDifference: pricePercentageDifference, // 가격 차 (백분율)
		};

		return HttpResponse.json(result);
	}
);
