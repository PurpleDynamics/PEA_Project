import styled from "styled-components";

import DetailImages from "./detail-image";
import DetailInfo from "./detail-info";

const DetailProduct = ({ findProduct }) => {
	return (
		<S.Wrapper>
			<S.ProductWrapper>
				<DetailImages findProduct={findProduct} />
				<DetailInfo findProduct={findProduct} />
			</S.ProductWrapper>
		</S.Wrapper>
	);
};
export default DetailProduct;

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
	Wrapper,
	ProductWrapper,
};
