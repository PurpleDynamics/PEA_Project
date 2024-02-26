import { BsLightningFill } from "react-icons/bs";
import styled from "styled-components";

import productList from "../../../libs/msw/database/products.json";
import { COLOR, FONT_SIZE } from "../../../libs/styled-components";
import { EightProductGrid } from "../../commons";
import Button from "../../commons/button";
/**
 * @component
 * @parameter findProduct : object<특정된 상품데이터> - detail-product-page 에서 Params로id를 특정해 받아옴
 * @returns {JSX.Element}
 *
 * @description
 * - DetailProduct속 컴포넌트입니다.
 * - 특정된 제품의 product의 categoryList의 첫번째  category를 가지고 있는제품들을 보여지게 됩니다
 */
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
