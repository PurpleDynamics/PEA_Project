import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import { HighlightedText } from "../commons";
/**
 * @component
 * @parameter title : string - 카드의 제목
 * @parameter icon : react-icon - 카드에 들어갈 icon (title의 오른쪽에 위치)
 * @parameter month : number - 해당카드에서 보여줄 "월"
 * @parameter totalPrice : number - 해당 "월"에 대한 총금액 정보
 * @parameter monthlyPrice : number - 해당 "월"에 대한 월금액 정보
 * @parameter isClicked : boolean - 클릭이 된 상태인지 아닌지를 나타내는 state (true || false)
 * @description
 * - graph의 금액, 월, 에대한 정보를 한눈에 보여주기위해 만들어진 카드컴포넌트 입니다.
 * - 해당 카드는 클릭이된상태면 yellow색상으로 보여집니다.
 */
const TransactionsCard = ({
	title,
	icon,
	month,
	totalPrice,
	monthlyPrice,
	isClicked,
	...rest
}) => {
	return (
		<S.TransactionsCardWrapper $isClicked={isClicked} {...rest}>
			<S.CardContainer>
				<S.CardTitle>
					<HighlightedText
						fontSize={FONT_SIZE.bg}
						color={COLOR.PALETTE.cyan.weight}
					>
						{title}
					</HighlightedText>
					{icon}
				</S.CardTitle>
			</S.CardContainer>
			<S.Text>{totalPrice}</S.Text>
			<CardContainer>
				<S.Text>{month}</S.Text>
				<S.Text>{monthlyPrice}</S.Text>
			</CardContainer>
		</S.TransactionsCardWrapper>
	);
};
export default TransactionsCard;

const TransactionsCardWrapper = styled.div`
	width: 28rem;
	display: flex;
	flex-direction: column;
	cursor: pointer;
	border: 1px solid ${COLOR.COMMON[600]};
	border-radius: 2rem;
	box-shadow: 0 2px 4px ${COLOR.COMMON[800]};
	padding: 1.8rem;
	background-color: ${({ $isClicked }) =>
		$isClicked && COLOR.PALETTE.yellow.light};
	@media (max-width: 750px) {
		width: 50rem;
	}
`;
const CardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	text-align: end;
`;

const CardTitle = styled.p`
	font-size: ${FONT_SIZE.xl};
	display: flex;
	align-items: center;
	gap: 1.2rem; /* 아이콘과 제목 사이의 간격 조절 */
`;

const Text = styled.p`
	font-size: ${FONT_SIZE.sm};
	margin: 0.3rem;
	text-align: end;
`;

const S = {
	TransactionsCardWrapper,
	CardContainer,
	CardTitle,
	Text,
};
