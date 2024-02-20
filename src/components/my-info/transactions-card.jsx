import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import { HighlightedText } from "../commons";

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
		<S.TransactionsCardWrapper isClicked={isClicked} {...rest}>
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
	background-color: ${({ isClicked }) => isClicked && "yellow"};
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
