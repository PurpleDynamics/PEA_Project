import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import { HighlightedText, ProductCard } from "../commons";

const FreeShare = ({ data }) => {
	return (
		<>
			<S.Wrapper>
				<S.LocationTitleContainer>
					{data && (
						<S.LocationTitle>
							{data[0]?.location}{" "}
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
					{data?.map((item, index) => (
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
		</>
	);
};
export default FreeShare;

const Wrapper = styled.div`
	width: 100%;
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
	width: 115.2rem;
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
