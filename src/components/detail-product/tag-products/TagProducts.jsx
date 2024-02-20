import { BsLightningFill } from "react-icons/bs";
import styled from "styled-components";

import productList from "../../../libs/msw/database/products.json";
import { COLOR, FONT_SIZE } from "../../../libs/styled-components";
import { EightProductGrid } from "../../commons";
import Button from "./../../commons/button";
const TagProducts = ({ findProduct }) => {
	const mainTag = findProduct.categoryList[0];
	const TagInProductList = productList.products.filter(
		(product) =>
			product.categoryList.includes(mainTag) &&
			product.id !== findProduct.id
	);

	return (
		<S.Wrapper>
			<S.TagProductsTexts>
				<TagProductsTitle>같은 카테고리의 상품</TagProductsTitle>
				{/*사이즈 조절실패 */}
				<TagProductsCount>
					총 {TagInProductList.length}건
				</TagProductsCount>
			</S.TagProductsTexts>
			<EightProductGrid productData={TagInProductList} />
			<Button width="15rem" icon={BsLightningFill}>
				더보러가기
			</Button>
		</S.Wrapper>
	);
};

export default TagProducts;
const Wrapper = styled.div`
	width: 115.2rem;
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
