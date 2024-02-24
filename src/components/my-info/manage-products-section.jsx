import { BsBagDash, BsCart2, BsFileEarmarkText, BsHeart } from "react-icons/bs";
import styled from "styled-components";

import { BREAK_POINT, COLOR } from "../../libs/styled-components";
import { appendUnit } from "../../utils";
import { CenterBox, IconAndText } from "../commons";
/**
 * @component
 * @parameter mypageData: Object - "/api/user/my-page"요청에서 받아온 마이페이지 관련 정보
 * @returns {JSX.Element}
 * @description
 * - user의 상품과 연관된 정보를 보여주는 컴포넌트입니다.
 * - "등록상품", "구매상품", "판매완료", "관심상품" 4가지의 정보를 보여주며 각정보에 맞는 수량이 함께보여집니.
 */

const ManageProductsSection = ({ mypageData }) => {
	const TEXT = ["등록상품", "구매상품", "판매완료", "관심상품"];
	const ICON = [BsFileEarmarkText, BsCart2, BsBagDash, BsHeart];
	return (
		<CenterBox bgColor={COLOR.PALETTE.cyan.weight}>
			<MainWrapper>
				<S.TitleContainer>
					<S.TitleText>나의 상품 관리</S.TitleText>
				</S.TitleContainer>
				<S.IconAndTextArea>
					{Array(4)
						.fill()
						.map((_, idx) => {
							return (
								<S.IconAndTextBox key={idx}>
									<IconAndText
										icon={ICON[idx]}
										text={TEXT[idx]}
										gap={2}
										iconColor={
											idx % 2 === 0
												? COLOR.COMMON[1000]
												: COLOR.PALETTE.cyan.light
										}
										textColor={COLOR.COMMON[1000]}
										size="7"
									/>
									<S.Amount>
										{appendUnit({
											amountData:
												mypageData.productsCount,
											unit: "건",
										})}
									</S.Amount>
								</S.IconAndTextBox>
							);
						})}
				</S.IconAndTextArea>
			</MainWrapper>
		</CenterBox>
	);
};
export default ManageProductsSection;

const MainWrapper = styled.div`
	width: 100%;
	height: 30rem;
	@media (max-width: ${BREAK_POINT.lg}) {
		width: 90%;
	}
`;
const TitleContainer = styled.div`
	width: 100%;
	height: 30%;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: ${BREAK_POINT.lg}) {
		padding-left: 5rem;
	}
`;
const TitleText = styled.h2`
	color: ${COLOR.COMMON[1000]};
`;
const IconAndTextArea = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: ${BREAK_POINT.lg}) {
		padding-left: 5rem;
	}
`;
const IconAndTextBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Amount = styled.p`
	padding-top: 3px;
	color: ${COLOR.PALETTE.cyan.light};
`;
const S = {
	MainWrapper,
	TitleContainer,
	TitleText,
	IconAndTextArea,
	IconAndTextBox,
	Amount,
};
