import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import { HighlightedText, ProductCard } from "../commons";

/**
 * @component
 * @parameter freeData : array<무료상품데이터> - used-product페이지안에  freeProductsData 데이터를 받아옵니다.
 * @returns {JSX.Element}
 *
 * @description
 * - used-product-page 에서 사용되는 컴포넌트입니다.
 * - 무료나눔에 해당하는 productCard를 보여주는 컴포넌트입니다.
 */

const FreeShare = ({ freeData }) => {
	return (
		<S.Wrapper>
			<S.LocationTitleContainer>
				{freeData && (
					<S.LocationTitle>
						{freeData[0]?.location}{" "}
						<HighlightedText
							color={COLOR.PALETTE.mint.weight}
							fontSize={FONT_SIZE.bg}
						>
							무료나눔
						</HighlightedText>
					</S.LocationTitle>
				)}
			</S.LocationTitleContainer>
			<S.ProductCardWrapper>
				{freeData?.map((item, index) => (
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
export default FreeShare;

const Wrapper = styled.div`
	width: 115.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
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
`;

const S = {
	Wrapper,
	LocationTitle,
	LocationTitleContainer,
	ProductCardWrapper,
};
