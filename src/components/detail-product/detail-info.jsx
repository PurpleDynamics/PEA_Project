import { useState } from "react";
import styled from "styled-components";

import { FONT_SIZE } from "../../libs/styled-components";

const DetailInfo = () => {
	const [categoryData, setCategoryData] = useState([]);
	return (
		<S.ProductInfoContainer>
			{categoryData.map(() => {
				<S.ProductTag></S.ProductTag>;
			})}
		</S.ProductInfoContainer>
	);
};
export default DetailInfo;

const ProductInfoContainer = styled.div``;
const ProductTag = styled.p`
	font-size: ${FONT_SIZE.ti};
`;
const S = {
	ProductInfoContainer,
	ProductTag,
};
