import { useState } from "react";
import { BsWallet2 } from "react-icons/bs";
import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import {
	CenterBox,
	HighlightedText,
	PriceTrendChart,
	Spacer,
	TextSpacer,
} from "../commons";
import { TransactionsCard } from ".";
/**
 * @component
 * @parameter priceData : Object - 서버에서 넘어온 금액정보를 재가공해 받아온 유저의 금액data
 * @returns {JSX.Element}
 * @description
 * - user의 거래관련 금액에대한 정보를 보여주는 component입니다.
 * - 세가지의 TransactionsCard카드를 클릭하면 해당 내용과 관련된 금액 graph가 밑에 보여지게됩니다.
 */
const GraphSection = ({ priceData }) => {
	const CARD_TITLE_TEXT = ["총 금액", "판매 금액", "구매 금액"];
	const [isClicked, setIsClicked] = useState(0);
	const handleClick = ({ id }) => {
		setIsClicked(id);
	};
	return (
		<CenterBox>
			<S.MainWrapper>
				<S.TitleAndTotalPriceArea>
					<S.Title>최근 거래 내역</S.Title>
					<Spacer height={2} />
					<S.PrcieInformation>
						최근 6개월간 총 거래금액은
						<TextSpacer />
						<HighlightedText
							color={COLOR.PALETTE.cyan.weight}
							fontSize={FONT_SIZE.lg}
						>
							{price + "원"}
						</HighlightedText>
						<TextSpacer />
						입니다.
					</S.PrcieInformation>
				</S.TitleAndTotalPriceArea>
				<S.CardArea>
					{Array(3)
						.fill()
						.map((_, idx) => {
							return (
								<TransactionsCard
									key={idx}
									title={CARD_TITLE_TEXT[idx]}
									icon={<BsWallet2 size={FONT_SIZE.lg} />}
									month
									totalPrice
									monthlyPrice
									$isClicked={isClicked === idx + 1}
									onClick={() => handleClick({ id: idx + 1 })}
								/>
							);
						})}
				</S.CardArea>
				<S.ChartArea>
					<PriceTrendChart
						barColor={COLOR.PALETTE.cyan.light}
						priceDataArr
						xaxisArray
						xaxisUnit="월"
					/>
				</S.ChartArea>
			</S.MainWrapper>
		</CenterBox>
	);
};
export default GraphSection;

const MainWrapper = styled.div`
	width: 100%;
	height: 110rem;
	display: grid;
	grid-template-rows: 10rem 20rem 80rem;
	@media (max-width: 750px) {
		grid-template-rows: 10rem 40rem 70rem;
	}
`;
const TitleAndTotalPriceArea = styled.div`
	grid-row: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Title = styled.h2``;
const PrcieInformation = styled.h3``;
const CardArea = styled.div`
	grid-row: 2;
	width: 100%;
	height: 30rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 750px) {
		height: 70rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
`;
const ChartArea = styled.div`
	grid-row: 3;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 750px) {
		width: 80rem;
		height: 30rem;
	}
`;
const S = {
	MainWrapper,
	TitleAndTotalPriceArea,
	Title,
	PrcieInformation,
	CardArea,
	ChartArea,
};
