import { BsLightningFill } from "react-icons/bs";
import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../../libs/styled-components";
import { EightProductGrid } from "../../commons";
import Button from "../../commons/button";
/**
 * @component
 * @parameter relatedProductData : array<상품데이터> - 특정제품의 MinTag를 보유한제품들 data가옵니다
 * @returns {JSX.Element}
 *
 * @description 판매 상품의 mainTag 와 일치하는 제품들을 보여주는 DetailProduct Page 내부 category 컴포넌트 부분입니다.
 */
const TagProducts = ({ relatedProductData }) => {
	return (
		<S.Wrapper>
			<S.TagProductsTexts>
				<TagProductsTitle>같은 카테고리의 상품</TagProductsTitle>
				<TagProductsCount>
					총 {relatedProductData.length}건
				</TagProductsCount>
			</S.TagProductsTexts>
			<EightProductGrid productData={relatedProductData} />
			<Button width="15rem" icon={BsLightningFill}>
				더보러가기
			</Button>
		</S.Wrapper>
	);
};

export default TagProducts;
const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const TagProductsTexts = styled.div`
	width: 100%;
	padding: 0 4rem;
	display: flex;
	justify-content: space-between;
`;
const TagProductsTitle = styled.div`
	font-size: ${FONT_SIZE.lg};
`;
const TagProductsCount = styled.div`
	font-size: ${FONT_SIZE.bg};
	color: ${COLOR.COMMON[600]};
`;
const S = {
	Wrapper,
	TagProductsTexts,
};
