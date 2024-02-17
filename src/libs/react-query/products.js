import { useQuery } from "react-query";

import {
	getProductsByCategories,
	getProductsByPaymentMethod,
} from "../axios/base";

// 상품 관련

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
