import { useQuery } from "react-query";

import { GET_PRODUCT_LIST } from "../../constants";
import { getProduct } from "../axios/base";

export const useProductList = () =>
	useQuery({
		queryKey: GET_PRODUCT_LIST,
		queryFn: getProduct,
	});
