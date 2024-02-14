import styled from "styled-components";

import DetailImages from "./detail-image";
import DetailInfo from "./detail-info";

const DetailProduct = ({ findProduct }) => {
	return (
		<S.ProductContainer>
			<DetailImages findProduct={findProduct} />
			<DetailInfo />
		</S.ProductContainer>
	);
};
export default DetailProduct;
const ProductContainer = styled.div`
	height: auto;
	display: flex;
	gap: 70rem;
`;
const S = {
	ProductContainer,
};
