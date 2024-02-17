import { axiosInstance } from "./";

/**
 * @function
 * @parameter paymentMethod : "sale" | "free" - 거래형태 ("sale": 중고거래, "free": "무료나눔")
 * @description 거래에 따라 판매 중인, 상품 요약 정보를 반환합니다.
 */
export const getProductsByPaymentMethod = async ({ paymentMethod }) => {
	const response = await axiosInstance.get("/products", {
		params: {
			userId: "1",
			paymentMethod: paymentMethod,
		},
	});
	return response.data;
};
/**
 * @function
 * @parameter categories : Array<"디지털기기" | "생활가전" | "가전/인테리어" | "생활/주방" | "유아동" | "유아도서" | "여성의류" | "여성잡화" | "식물" | "남성패션/잡화" | "뷰티/미용" | "스포츠/레저" | "취미/게임/음반" | "도서" | "티켓/교환권" | "가공식품" | "반려동물용품" | "기타" > - 카테고리 배열
 * @description 전달된 카테고리 배열에 해당하는 상품 요약 정보를 반환합니다.
 */
export const getProductsByCategories = async ({ categories = ["기타"] }) => {
	const response = await axiosInstance.get("/products/search", {
		params: {
			userId: "1",
			categories: categories,
		},
	});
	return response.data;
};
/**
 * @function
 * @parameter productId : number - 상품의 고유 식별자
 * @description 해당 상품에 관련된 상세 정보를 반환합니다.
 */
export const getProductOne = async ({ productId }) => {
	const response = await axiosInstance.get(`/products/${productId}`, {
		params: {
			userId: "1",
		},
	});
	return response.data;
};
