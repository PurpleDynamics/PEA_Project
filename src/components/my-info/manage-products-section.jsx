import { BsBagDash, BsCart2, BsFileEarmarkText, BsHeart } from "react-icons/bs";
import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
import { appendUnit } from "../../utils";
import { CompressionWrapper, IconAndText } from "../commons";
const ManageProductsSection = ({ amount = "80000" }) => {
	const TEXT = ["등록상품", "구매상품", "판매완료", "관심상품"];
	const ICON = [BsFileEarmarkText, BsCart2, BsBagDash, BsHeart];
	return (
		<BgColorContainer>
			<CompressionWrapper lr="15%">
				<S.TitleContainer>
					<S.TitleText>나의 상품 관리</S.TitleText>
				</S.TitleContainer>
				<S.IconAndTextArea>
					{Array(4)
						.fill()
						.map((_, idx) => {
							return (
								<S.IconAndTextBox id={idx}>
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
											amountData: amount,
											unit: "건",
										})}
									</S.Amount>
								</S.IconAndTextBox>
							);
						})}
				</S.IconAndTextArea>
			</CompressionWrapper>
		</BgColorContainer>
	);
};
export default ManageProductsSection;

const BgColorContainer = styled.div`
	width: 100%;
	height: 30rem;
	background-color: ${COLOR.PALETTE.cyan.weight};
`;
const TitleContainer = styled.div`
	width: 100%;
	height: 30%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const TitleText = styled.h2`
	color: ${COLOR.COMMON[1000]};
`;
const IconAndTextArea = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
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
	BgColorContainer,
	TitleContainer,
	TitleText,
	IconAndTextArea,
	IconAndTextBox,
	Amount,
};
