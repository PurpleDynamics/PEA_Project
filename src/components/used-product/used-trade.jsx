import styled from "styled-components";

import { BREAK_POINT, COLOR, FONT_SIZE } from "../../libs/styled-components";
import { HighlightedText, ProductCard } from "../commons";

/**
 * @component
 * @parameter usedData : array<중고상품데이터> - used-product페이지안에  usedProductsData 데이터를 받아옵니다.
 * @returns {JSX.Element}
 *
 * @description
 * - used-product-page 에서 사용되는 컴포넌트입니다.
 * - 중고거래에 해당하는 productCard를 보여주는 컴포넌트입니다.
 */
const UsedTrade = ({ usedData }) => {
	return (
		<S.Wrapper>
			<S.LocationTitleContainer>
				{usedData && (
					<S.LocationTitle>
						{usedData[0]?.location}{" "}
						<HighlightedText
							color={COLOR.PALETTE.orange.weight}
							fontSize={FONT_SIZE.bg}
						>
							중고거래
						</HighlightedText>
					</S.LocationTitle>
				)}
			</S.LocationTitleContainer>
			<S.ProductCardWrapper>
				{usedData?.map((item, index) => (
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
export default UsedTrade;

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
};
