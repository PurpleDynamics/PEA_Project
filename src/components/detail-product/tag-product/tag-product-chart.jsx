import styled from "styled-components";

import productList from "../../../libs/msw/database/products.json";
import { COLOR } from "../../../libs/styled-components";
import { getRecentNthMonthsArray } from "../../../utils";
import { PriceTrendChart } from "../../commons";
const TagProductChart = ({ findProduct }) => {
	//태그를 기준으로 제품을을 선택하고 제품별로 만들어진 날짜 (달)에따라서 나누고 나눈 제품들끼리에 가격을 합쳐서  각 달마다 배열을 만들고 보낸다
	const mainTag = findProduct.categoryList[0];
	const tagInProductList = productList.products.filter(
		(product) =>
			product.categoryList.includes(mainTag) &&
			product.id !== findProduct.id
	);
	const priceArr = [10000, 200000, 300000, 200000, 100000, 300000];

	return (
		<S.ChartWrapper>
			<S.ChartTextWrapper>
				<S.MainText>
					<S.ColorText>태그</S.ColorText> 상품 관련 시세
				</S.MainText>
				<S.DetailText>
					<S.AverageText>
						<S.ColorText>9</S.ColorText>월의 평균 거래가격은
						<S.ColorText>10,000</S.ColorText>원 입니다.
					</S.AverageText>
					<S.CompareText>
						현재 상품보다 <S.ColorText>1,190,000</S.ColorText>원
						쌉니다.
					</S.CompareText>
				</S.DetailText>
			</S.ChartTextWrapper>
			<PriceTrendChart
				width="95rem"
				height="55.6rem"
				barColor={COLOR.PALETTE.cyan.light}
				priceDataArr={priceArr}
				xaxisArray={getRecentNthMonthsArray({ NthMonth: 6 })}
				xaxisUnit="월"
			/>
		</S.ChartWrapper>
	);
};
export default TagProductChart;

const ChartWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 4rem;
`;
const ChartTextWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;
const MainText = styled.h2``;
const DetailText = styled.div``;
const AverageText = styled.h3``;
const CompareText = styled.h3``;
const ColorText = styled.span`
	color: ${COLOR.PALETTE.cyan.base};
	font-size: inherit;
`;
const S = {
	ChartWrapper,
	ChartTextWrapper,
	MainText,
	DetailText,
	AverageText,
	CompareText,
	ColorText,
};
