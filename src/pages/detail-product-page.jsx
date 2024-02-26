import { useParams } from "react-router-dom";
import styled from "styled-components";

import {
	DetailImages,
	DetailInfo,
	SellerBanner,
} from "../components/detail-product";
import { TagProducts } from "../components/detail-product/tag-product";
import productList from "../libs/msw/database/products.json";

/**
 * @component
 * @returns {JSX.Element}
 * @description
 * - detail-product-page 입니다.
 * - useParams를 통해서 product id를 특정한뒤product를 관리합니다
 */
const DetailProductPage = () => {
	const { productId } = useParams();
	const findProduct = productList.products.find(
		(product) => product.id === productId.toString()
	); //삭제? useParams를 통해서 특정 제품 데이터를 가져오는건데(api사용하면 삭제할예정?)
	return (
		<S.TagWrapper>
			<S.Wrapper>
				<S.ProductWrapper>
					<DetailImages findProduct={findProduct} />
					<DetailInfo findProduct={findProduct} />
				</S.ProductWrapper>
			</S.Wrapper>
			<SellerBanner findProduct={findProduct} />
			<TagProducts findProduct={findProduct} />
		</S.TagWrapper>
	);
};
export default DetailProductPage;
const TagWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Wrapper = styled.div`
	width: 115.2rem;
`;
const ProductWrapper = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-between;
	gap: 7rem;
`;
const S = {
	TagWrapper,
	Wrapper,
	ProductWrapper,
};
