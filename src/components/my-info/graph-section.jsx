import { useState } from "react";
import { BsWallet2 } from "react-icons/bs";
import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import { CompressionWrapper, HighlightedText, Spacer } from "../commons";
import { TransactionsCard } from ".";

const GraphSection = ({ price = "3,800,000" }) => {
	const CARD_TITLE_TEXT = ["총 금액", "판매 금액", "구매 금액"];
	const [isClicked, setIsClicked] = useState(false);
	const handleClick = ({ id }) => {
		setIsClicked(id);
	};
	return (
		<CompressionWrapper lr="15%">
			<S.MainWrapper>
				<S.TitleAndTotalPriceArea>
					<S.Title>최근 거래 내역</S.Title>
					<Spacer height={2} />
					<S.PrcieInformation>
						최근 6개월간 총 거래금액은
						<HighlightedText
							color={COLOR.PALETTE.cyan.weight}
							fontSize={FONT_SIZE.lg}
						>
							{price + "원"}
						</HighlightedText>
						입니다.
					</S.PrcieInformation>
				</S.TitleAndTotalPriceArea>
				<S.CardArea>
					{Array(3)
						.fill()
						.map((_, idx) => {
							return (
								<TransactionsCard
									title={CARD_TITLE_TEXT[idx]}
									icon={<BsWallet2 size={FONT_SIZE.lg} />}
									month="1월"
									totalPrice="3,000,000원"
									monthlyPrice="690,000원"
									id={1}
									isClicked={isClicked === idx + 1}
									onClick={() => handleClick({ id: idx + 1 })}
								/>
							);
						})}
				</S.CardArea>
				<S.ChartArea>
					<S.Chart />
				</S.ChartArea>
			</S.MainWrapper>
		</CompressionWrapper>
	);
};
export default GraphSection;

const MainWrapper = styled.div`
	width: 100%;
	height: 80rem;
	display: grid;
	grid-template-rows: 2fr 2fr 6fr;
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
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const ChartArea = styled.div`
	grid-row: 3;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Chart = styled.div`
	width: 100rem;
	height: 40rem;
	background-color: blue;
`;
const S = {
	MainWrapper,
	TitleAndTotalPriceArea,
	Title,
	PrcieInformation,
	CardArea,
	ChartArea,
	Chart,
};
