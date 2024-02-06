import styled from "styled-components";

import { BREAK_POINT, COLOR, FONT_SIZE } from "../../libs/styled-components";
import { CompressionContainer, ProductCard } from "../commons";

/**
 * @component
 * @parameter userData : object - user data를 받아옵니다 (ex) location필요)
 * @parameter eightProductData : array - product data를 받아옵니다.
 * @parameter salesCategory : string - "중고거래" || "무료나눔" 둘 중 하나로 보내줘야합니다.
 * @returns {JSX.Element}
 *
 * @description
 * - salesCategory에 중고거래 || 무료나눔을 입력받아 8개의 product card를 보여주는 컴포넌트입니다.
 * - userData의 location 값으로 어느 지역인지 보여줍니다
 * - eightProductData로 8개의 product data를 받아와서 보여줍니다
 */

const EightProductGrid = ({ userData, eightProductData, salesCategory }) => {
	const locationMatchData = eightProductData.filter(
		(data) => data.location === userData.location
	);

	return (
		<CompressionContainer tb="4rem">
			<S.Container>
				<S.TextWrapper>
					<S.LocationText>
						{userData.location}
						<S.UsedFreeText> {salesCategory}</S.UsedFreeText>
					</S.LocationText>
				</S.TextWrapper>
				{locationMatchData.length > 0 ? (
					<S.ProductList>
						{locationMatchData.map((data, index) => (
							<ProductCard key={index} title={data.title} />
						))}
					</S.ProductList>
				) : (
					<S.NoDataText>등록된 상품이 없습니다.</S.NoDataText>
				)}
			</S.Container>
		</CompressionContainer>
	);
};

export default EightProductGrid;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const TextWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
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
	Container,
	TextWrapper,
	LocationText,
	UsedFreeText,
	NoDataText,
	ProductList,
};
