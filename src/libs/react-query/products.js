import { useQuery } from "react-query";

import { getProductsByPaymentMethod } from "../axios/base";

// 상품 관련

export const useGetProductList = ({ axiosParams }) => {
	console.log(axiosParams);
	return useQuery({
		queryKey: "getProductListQueryKey",
		queryFn: () => getProductsByPaymentMethod({ ...axiosParams }),
	});
};
