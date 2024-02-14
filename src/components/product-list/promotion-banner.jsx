import styled from "styled-components";

import { BREAK_POINT, COLOR, FONT_SIZE } from "../../libs/styled-components";
import { Button, CompressionWrapper, HighlightedText } from "../commons";

/**
 * @component
 * @returns {JSX.Element}
 *
 * @description product list page에 제일 처음에 올라오는 컴포넌트입니다.
 */

const PromotionBanner = () => {
	return (
		<S.PromoContainer>
			<CompressionWrapper lr="15%">
				<S.PromoWrapper>
					<S.PromoImage src="https://url.kr/wmz9uc" />
					<S.PromoRightBox>
						<S.PromoTitle>
							"너, 참
							<HighlightedText
								fontSize={FONT_SIZE.xl}
								color={COLOR.PALETTE.magenta.base}
							>
								중고
							</HighlightedText>
							스럽다!"
						</S.PromoTitle>
						<S.PromoContext>
							<HighlightedText
								fontSize={FONT_SIZE.lg}
								color={COLOR.MAIN.base}
							>
								P.E.A
							</HighlightedText>{" "}
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
			</CompressionWrapper>
		</S.PromoContainer>
	);
};
export default PromotionBanner;

const PromoContainer = styled.div`
	width: 100%;
	height: 50rem;
	background-color: ${COLOR.PALETTE.yellow.light};
	display: flex;
	align-items: center;
`;
const PromoWrapper = styled.div`
	width: 100rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
`;
const PromoImage = styled.img`
	width: 75rem;
	height: 45rem;
	@media (max-width: ${BREAK_POINT.lg}) {
		display: none;
	}
`;
const PromoRightBox = styled.div`
	width: 100%;
	padding-top: 7rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const PromoTitle = styled.h1`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding-bottom: 4rem;
`;
const PromoContext = styled.h2`
	font-size: ${FONT_SIZE.lg};
	line-height: 4rem;
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
	PromoImage,
	PromoRightBox,
	PromoTitle,
	PromoContext,
	ButtonBox,
};
