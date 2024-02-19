import styled from "styled-components";

import DetailImages from "./detail-image";
import DetailInfo from "./detail-info";
import SellerBanner from "./seller-banner";

const DetailProduct = ({ findProduct }) => {
	return (
		<div>
			<S.ProductContainer>
				<DetailImages findProduct={findProduct} />
				<DetailInfo findProduct={findProduct} />
			</S.ProductContainer>
			<SellerBanner findProduct={findProduct} />
		</div>
	);
};
export default DetailProduct;
const ProductContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-between;
	gap: 7rem;
`;
const S = {
	ProductContainer,
};
