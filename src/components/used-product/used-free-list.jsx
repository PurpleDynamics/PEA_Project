import { useEffect, useState } from "react";
import styled from "styled-components";

import { BREAK_POINT, COLOR, FONT_SIZE } from "../../libs/styled-components";
import { HighlightedText, ProductCard, TextSpacer } from "../commons";

/**
 * @component
 * @parameter productData : array<상품데이터> - used-product페이지안에  usedProductsData 데이터를 받아옵니다.
 * @parameter type : string - 표시할 상품유형 | usedTrade | freeShare
 * @returns {JSX.Element}
 *
 * @description
 * - used-product-page 에서 사용되는 컴포넌트입니다.
 * - 중고거래/무료나눔에 해당하는 productCard를 보여줍니다.
 */
const UsedFreeList = ({ productData, type }) => {
	const [title, setTitle] = useState("");
	const [$color, setColor] = useState("");

	//중고거래/무료나눔 버튼 클릭시, 색상 변경
	useEffect(() => {
		if (type === "usedTrade") {
			setTitle("중고거래");
			setColor(COLOR.PALETTE.orange.weight);
		} else {
			setTitle("무료나눔");
			setColor(COLOR.PALETTE.mint.weight);
		}
	}, []);

	return (
		<S.Wrapper>
			<S.LocationTitleContainer>
				{productData && productData.length > 0 ? (
					<S.LocationTitle>
						{productData[0]?.location}
						<TextSpacer />
						<HighlightedText color={$color} fontSize={FONT_SIZE.bg}>
							{title}
						</HighlightedText>
					</S.LocationTitle>
				) : (
					<S.NoDataText>등록된 상품이 없습니다</S.NoDataText>
				)}
			</S.LocationTitleContainer>
			<S.ProductCardWrapper>
				{productData?.map((item, index) => (
					<ProductCard
						key={index}
						productId={index}
						title={item?.title}
						imgUrl="https://source.unsplash.com/random/?pigeon"
						createdAt="2023-03-26"
						price={item?.price}
						interestCount={10}
						chattingCount={20}
						categoriesArray={["사람", "기타"]}
					/>
				))}
			</S.ProductCardWrapper>
		</S.Wrapper>
	);
};
export default UsedFreeList;

const Wrapper = styled.div`
	width: 115.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	@media (max-width: ${BREAK_POINT.lg}) {
		width: 90rem;
	}
`;

const LocationTitle = styled.div`
	font-size: ${FONT_SIZE.bg};
	text-align: center;
`;
const LocationTitleContainer = styled.div`
	padding: 3.5rem 0;
`;
const NoDataText = styled.h1`
	padding: 25rem;
`;
const ProductCardWrapper = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	row-gap: 2rem;
	@media (max-width: ${BREAK_POINT.lg}) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const S = {
	Wrapper,
	LocationTitle,
	LocationTitleContainer,
	ProductCardWrapper,
	NoDataText,
};
