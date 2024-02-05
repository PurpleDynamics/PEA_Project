import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import { CompressionContainer, ProductCard } from "../commons";

/**
 * @parameter userData : object - user data를 받아옵니다 (ex) location필요)
 * @parameter eightProductData : array - product data를 받아옵니다.
 * @parameter salesCategory : string - "증고거래" || "무료나눔" 둘 중 하나로 보내줘야합니다.
 * @returns
 */

const EightProductGrid = ({ userData, eightProductData, salesCategory }) => {
	const locationMatchData = eightProductData.filter(
		(data) => data.location === userData.location
	);

	return (
		<>
			<CompressionContainer tb="12rem">
				<S.Container>
					<S.TextWrppaer>
						<S.LocationText>
							{userData.location}
							<S.UesdFreeText> {salesCategory}</S.UesdFreeText>
						</S.LocationText>
					</S.TextWrppaer>
					<S.ProductList>
						{locationMatchData.length > 0 ? (
							locationMatchData.map((data, index) => (
								<ProductCard key={index} title={data.title} />
							))
						) : (
							<S.NoDataText>No matching data found</S.NoDataText>
						)}
					</S.ProductList>
				</S.Container>
			</CompressionContainer>
		</>
	);
};

export default EightProductGrid;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const TextWrppaer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3rem;
`;

const LocationText = styled.p`
	font-size: ${FONT_SIZE.bg};
`;

const UesdFreeText = styled.span`
	font-size: ${FONT_SIZE.bg};
	color: ${COLOR.SUB[600]};
`;

const ProductList = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 7.5rem;
`;

const NoDataText = styled.h1``;

const S = {
	Container,
	TextWrppaer,
	LocationText,
	UesdFreeText,
	NoDataText,
	ProductList,
};
