import { axiosInstance } from "./axios-instance";

export const getProductsByPaymentMethod = async ({ paymentMethod }) => {
	const response = await axiosInstance.get(`/products/${paymentMethod}`, {
		params: {
			userId: "1",
		},
	});
	return response.data;
};
