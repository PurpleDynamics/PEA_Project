import { axiosInstance } from "./";

export const getProductsByPaymentMethod = async ({ paymentMethod }) => {
	const response = await axiosInstance.get("/products", {
		params: {
			userId: "1",
			paymentMethod: paymentMethod,
		},
	});
	return response.data;
};

export const getProductsByCategories = async ({ categories = ["기타"] }) => {
	const response = await axiosInstance.get("/products/search", {
		params: {
			userId: "1",
			categories: categories,
		},
	});
	return response.data;
};
