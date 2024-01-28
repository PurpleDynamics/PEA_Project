import styled from "styled-components";

import {
	COLOR,
	FONT_SIZE,
} from "../../libs/styled-components/reference-tokens";
/**
 * @component
 * @description Footer
 * @returns {JSX.Element}
 */
const Footer = () => {
	return (
		<S.MainContainer>
			<S.FooterWrapper>
				<S.LeftTextBox>
					<S.Text>
						사업자명: Permanent Energy-saving Affect | 주소:
						서울특별시 강남구 테헤란로 146
					</S.Text>
					<S.Text>
						대표 : PurpleDynamics | 사업자등록번호 : 000-00-00000
					</S.Text>
				</S.LeftTextBox>
				<S.RightTextBox>
					<S.Number>고객센터 1111-1111</S.Number>
					<S.Text>월~금 09:00~18:00</S.Text>
				</S.RightTextBox>
			</S.FooterWrapper>
		</S.MainContainer>
	);
};
export default Footer;
const MainContainer = styled.div`
	width: 100%;
	height: 13rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${COLOR.COMMON[1000]};
	border-top: 1px solid ${COLOR.COMMON[0]};
`;
const FooterWrapper = styled.div`
	width: 125rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 20rem;
`;

const LeftTextBox = styled.div`
	width: 70rem;
	display: flex;
	flex-direction: column;
	margin-left: ${FONT_SIZE.ti};
`;

const RightTextBox = styled.div`
	width: 30rem;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	flex-direction: column;
`;
const Number = styled.p`
	font-size: ${FONT_SIZE.md};
	padding: 1rem 0;
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;
const Text = styled.p`
	padding: 1rem 0;
	font-size: ${FONT_SIZE.sm};
	font-family: "SOYO_Maple_Regular";
	&:hover {
		text-decoration: underline;
		cursor: default;
	}
`;

const S = {
	MainContainer,
	FooterWrapper,
	Number,
	Text,
	LeftTextBox,
	RightTextBox,
};
