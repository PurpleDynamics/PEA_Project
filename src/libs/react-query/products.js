import { useQuery } from "react-query";

import {
	getProductOne,
	getProductsByCategories,
	getProductsByPaymentMethod,
} from "../axios/base";

/**
 * @function
 * @parameter userId : number - 조회하는 사용자의 id
 * @parameter paymentMethod : "sale" | "free" - 거래형태 ("sale": 중고거래, "free": "무료나눔")
 */
export const useGetProductListByPaymentMethod = ({ userId, paymentMethod }) => {
	return useQuery({
		queryKey: "getProductListByPaymentMethodQueryKey",
		queryFn: () =>
			getProductsByPaymentMethod({
				userId: userId,
				paymentMethod: paymentMethod,
			}),
	});
};
/**
 * @function
 * @parameter userId : number - 조회하는 사용자의 id
 * @parameter categories : Array<"디지털기기" | "생활가전" | "가전/인테리어" | "생활/주방" | "유아동" | "유아도서" | "여성의류" | "여성잡화" | "식물" | "남성패션/잡화" | "뷰티/미용" | "스포츠/레저" | "취미/게임/음반" | "도서" | "티켓/교환권" | "가공식품" | "반려동물용품" | "기타" > - 카테고리 배열
 */
export const useGetProductListByCategories = ({ userId, categories }) => {
	return useQuery({
		queryKey: "getProductListByCategoryQueryKey",
		queryFn: () =>
			getProductsByCategories({
				userId: userId,
				categories: categories,
			}),
	});
};
/**
 * @function
 * @parameter userId : number - 조회하는 사용자의 id
 * @parameter productId : number - 조회된 상품의 id
 */
export const useGetProductOne = ({ userId, productId }) => {
	return useQuery({
		queryKey: "getProductOneQueryKey",
		queryFn: () =>
			getProductOne({
				userId: userId,
				productId: productId,
			}),
	});
};
