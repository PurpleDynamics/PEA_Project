import styled from "styled-components";

import { BREAK_POINT, COLOR, FONT_SIZE } from "../../libs/styled-components";
import { Button, CompressionContainer } from "../commons";

/**
 * @component
 * @returns {JSX.Element}
 *
 * @description product list page에 제일 처음에 올라오는 컴포넌트입니다.
 */

const PromotionBanner = () => {
	return (
		<S.PromoContainer>
			<CompressionContainer tb="3rem">
				<S.PromoCenterBox>
					<S.PromoWrapper>
						<S.PromoImg src="https://url.kr/wmz9uc" />
						<S.PromoRightBox>
							<S.PromoTitle>
								"너, 참<S.PromoTitleSpan>중고</S.PromoTitleSpan>
								스럽다!"
							</S.PromoTitle>
							<S.PromoContext>
								<S.PromoContextSpan>P.E.A</S.PromoContextSpan>
								에서 <br />
								지금 당장 거래하세요.!
							</S.PromoContext>
							<S.ButtonBox>
								<Button palette="orange" width="13rem">
									중고거래
								</Button>
								<Button palette="mint" width="13rem">
									무료나눔
								</Button>
							</S.ButtonBox>
						</S.PromoRightBox>
					</S.PromoWrapper>
				</S.PromoCenterBox>
			</CompressionContainer>
		</S.PromoContainer>
	);
};
export default PromotionBanner;

const PromoWrapper = styled.div`
	width: 100rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	justify-content: center;
	gap: 2rem;
	@media (max-width: ${BREAK_POINT.lg}) {
		grid-template-columns: 1fr;
		justify-content: center;
	}
`;

const PromoContainer = styled.div`
	width: 100%;
	height: 50rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${COLOR.PALETTE.yellow.light};
`;

const PromoCenterBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PromoImg = styled.img`
	width: 75rem;
	height: 45rem;
	@media (max-width: ${BREAK_POINT.lg}) {
		display: none;
	}
`;

const PromoRightBox = styled.div`
	width: 100%;
	padding-top: 7rem;
	@media (max-width: ${BREAK_POINT.lg}) {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
`;

const PromoTitle = styled.p`
	font-size: ${FONT_SIZE.xl};
	display: flex;
	align-items: center;
	padding-bottom: 4rem;
`;

const PromoTitleSpan = styled.span`
	font-size: ${FONT_SIZE.xl};
	color: ${COLOR.PALETTE.magenta.base};
`;

const PromoContext = styled.p`
	font-size: ${FONT_SIZE.lg};
	line-height: 4rem;
`;

const PromoContextSpan = styled.span`
	color: ${COLOR.PALETTE.mint.weight};
	font-size: ${FONT_SIZE.lg};
`;

const ButtonBox = styled.div`
	width: 30rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 7rem;
`;

const S = {
	PromoWrapper,
	PromoContainer,
	PromoCenterBox,
	PromoImg,
	PromoRightBox,
	PromoTitle,
	PromoTitleSpan,
	PromoContext,
	PromoContextSpan,
	ButtonBox,
};
