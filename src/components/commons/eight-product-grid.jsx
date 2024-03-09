import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { CATEGORIES_ARRAY } from "../../constants";
import { BREAK_POINT, COLOR, FONT_SIZE } from "../../libs/styled-components";
import { ProductCard } from "./";

/**
 * @component
 * @parameter productData : array<상품데이터> - product data를 받아옵니다.
 * @returns {JSX.Element}
 *
 * @description 상품데이터를 받아와 8개의 product card를 보여주는 component입니다.
 */

const EightProductGrid = ({ productData }) => {
	const navigate = useNavigate();
	const eightProductDataSlice = productData.slice(0, 8);
	const handleNavigateProductClick = (e) => {
		navigate(`/detail-product/${e}`);
	};
	return (
		<S.Wrapper>
			{eightProductDataSlice.length ? (
				<S.ProductList>
					{eightProductDataSlice.map((productOne) => {
						// 카테고리 배열 추출
						const categoryArray = productOne.ProductsTags.map(
							(tagInfo) => {
								const category = tagInfo.Tag.tag;
								if (CATEGORIES_ARRAY.includes(category))
									return category;
								else return "기타중고물품";
							}
						);
						return (
							<ProductCard
								key={productOne.idx}
								productId={productOne.idx}
								imgUrl={productOne.img_url}
								title={productOne.title}
								price={productOne.price}
								createdAt={productOne.createdAt}
								categoriesArray={[...new Set(categoryArray)]}
								interestCount={productOne.interestCount}
								chattingCount={productOne.chattingCount}
								initIsInterest={productOne.initIsInterest}
								onClickInterestButton={() => {}} // product card 안에 관심 버튼 클릭 시 발동하는 이벤트 함수
								disabled={productOne.state == "판매중"}
								onClick={() =>
									handleNavigateProductClick(data.idx)
								} // product card 클릭 시 발동하는 이벤트 함수
							/>
						);
					})}
				</S.ProductList>
			) : (
				<S.NoDataText>등록된 상품이 없습니다.</S.NoDataText>
			)}
		</S.Wrapper>
	);
};

export default EightProductGrid;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 0;
`;

const TextWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding-bottom: 4rem;
`;

const LocationText = styled.p`
	font-size: ${FONT_SIZE.bg};
`;

const UsedFreeText = styled.span`
	font-size: ${FONT_SIZE.bg};
	color: ${COLOR.SUB[600]};
`;

const ProductList = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 7.5rem;
	@media (max-width: ${BREAK_POINT.lg}) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 700px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
`;

const NoDataText = styled.h1`
	padding: 25rem;
`;

const S = {
	Wrapper,
	TextWrapper,
	LocationText,
	UsedFreeText,
	NoDataText,
	ProductList,
};
