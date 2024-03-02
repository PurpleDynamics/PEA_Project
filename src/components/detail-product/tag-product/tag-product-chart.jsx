import styled from "styled-components";

import { COLOR } from "../../../libs/styled-components";
import { getRecentNthMonthsArray } from "../../../utils";
import { PriceTrendChart } from "../../commons";
/**
 * @component
 * @parameter findProduct : object<특정된 상품데이터> - detail-product-page 에서 Params로id를 특정해 받아옴
 * @returns {JSX.Element}
 *
 * @description
 * - 판매 상품의 mainTag와 일치하는 제품들의 월별 시세와 비교값을 보여주는 DetailProduct Page 내부의 차트 컴포넌트입니다.
 * - PriceTrendChart 를 통해 icon 및 ui를 보여집니다
 */
const TagProductChart = ({ findProduct }) => {
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
