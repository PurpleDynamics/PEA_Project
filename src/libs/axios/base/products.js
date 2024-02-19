import { axiosInstance } from "./";

/**
 * @function
 * @parameter userId : number - 조회하는 사용자의 id
 * @parameter paymentMethod : "sale" | "free" - 거래형태 ("sale": 중고거래, "free": "무료나눔")
 * @description 거래에 따라 판매 중인, 상품 요약 정보를 반환합니다.
 */
export const getProductsByPaymentMethod = async ({ userId, paymentMethod }) => {
	const response = await axiosInstance.get("/products", {
		params: {
			userId: userId,
			paymentMethod: paymentMethod,
		},
	});
	return response.data;
};
/**
 * @function
 * @parameter userId : number - 조회하는 사용자의 id
 * @parameter categories : Array<"디지털기기" | "생활가전" | "가전/인테리어" | "생활/주방" | "유아동" | "유아도서" | "여성의류" | "여성잡화" | "식물" | "남성패션/잡화" | "뷰티/미용" | "스포츠/레저" | "취미/게임/음반" | "도서" | "티켓/교환권" | "가공식품" | "반려동물용품" | "기타중고물품" > - 카테고리 배열
 * @description 전달된 카테고리 배열에 해당하는 상품 요약 정보를 반환합니다.
 */
export const getProductsByCategories = async ({
	userId,
	categories = ["기타"],
}) => {
	const response = await axiosInstance.get("/products/search", {
		params: {
			userId: userId,
			categories: categories,
		},
	});
	return response.data;
};
/**
 * @function
 * @parameter userId : number - 조회하는 사용자의 id
 * @parameter productId : number - 조회된 상품의 id
 * @description 해당 상품에 관련된 상세 정보를 반환합니다.
 */
export const getProductOne = async ({ userId, productId }) => {
	const response = await axiosInstance.get(`/products/${productId}`, {
		params: {
			userId: userId,
		},
	});
	return response.data;
};
