import { BsPencil, BsThermometer } from "react-icons/bs";
import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import { appendUnit } from "../../utils";
import { CenterBox, HighlightedText, ResponsiveIcon, Spacer } from "../commons";
/**
 * @component
 * @parameter infoData: Object - "/api/user/info"요청에서 받아온 유저정보
 * @parameter mypageData: Object - "/api/user/my-page"요청에서 받아온 마이페이지 관련 정보
 * @returns {JSX.Element}
 * @description myPage중 유저의 개인정보와 매너온도에 연관된 정보를 보여주는 컴포넌트입니다.
 */
const InforMationSection = ({ infoData, mypageData }) => {
	return (
		<CenterBox bgColor={COLOR.PALETTE.cyan.weight}>
			<MainWrapper>
				<S.TitleContainer>
					<Spacer width={5} />
					<S.TitleText>마이페이지</S.TitleText>
				</S.TitleContainer>
				<S.DivideWrapper>
					<S.ImageAndInfoWrapper>
						<S.UserImage
							src={infoData.profileUrl || "https://url.kr/5zjib4"} //profileUrl요청이 제대로 이루어지지 않았다면 기본 이미지를 보여주도록
						/>
						<S.InfoWrapper>
							<S.NickNameAndIconWrapper>
								<S.NickName>{infoData.nickName} 님</S.NickName>
								<ResponsiveIcon
									icon={BsPencil}
									color={COLOR.COMMON[1000]}
									size={FONT_SIZE.bg}
								/>
							</S.NickNameAndIconWrapper>
							<S.Email>이메일 : {infoData.email}</S.Email>
							<S.Address>주소 : {infoData.region}</S.Address>
							<S.Phone>연락처 : {infoData.phone}</S.Phone>
						</S.InfoWrapper>
					</S.ImageAndInfoWrapper>
					<S.MannerRateContainer>
						<BsThermometer
							size={62}
							color={COLOR.PALETTE.cyan.light}
						/>
						<Spacer height={1} />
						<HighlightedText color={COLOR.PALETTE.cyan.light}>
							{appendUnit({
								amountData: mypageData.ondo,
								unit: "º",
							})}
						</HighlightedText>
					</S.MannerRateContainer>
					<Spacer />
				</S.DivideWrapper>
			</MainWrapper>
		</CenterBox>
	);
};
export default InforMationSection;
const MainWrapper = styled.div`
	width: 100%;
	height: 25rem;
`;
const DivideWrapper = styled.div`
	padding-top: ${FONT_SIZE.md};
	display: flex;
	align-items: center;
	justify-content: space-around;
`;
const TitleContainer = styled.div`
	width: 100%;
	height: 30%;
	display: flex;
	align-items: center;
`;
const TitleText = styled.p`
	font-size: ${FONT_SIZE.lg};
	color: ${COLOR.COMMON[1000]};
`;
const ImageAndInfoWrapper = styled.div`
	display: grid;
	grid-template-columns: 10rem 30rem;
	width: 40%;
	height: 70%;
	place-items: center;
	padding-left: 3rem;
	@media (max-width: 750px) {
		grid-template-columns: 10rem 60rem;
	}
`;
const UserImage = styled.img`
	grid-column: 1;
	aspect-ratio: 1/1;
	border-radius: 50%;
	width: 9rem;
`;
const InfoWrapper = styled.div`
	grid-column: 2;
	color: ${COLOR.COMMON[1000]};
	display: grid;
	grid-template-rows: 5rem 3rem 3rem 3rem;
`;
const NickNameAndIconWrapper = styled.div`
	display: flex;
	align-items: center;
`;
const NickName = styled.h2`
	font-size: ${FONT_SIZE.bg};
	padding-right: ${FONT_SIZE.md};
`;
const Email = styled.p``;
const Address = styled.p``;
const Phone = styled.p``;

const MannerRateContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media (max-width: 750px) {
		display: none;
	}
`;
const S = {
	MainWrapper,
	DivideWrapper,
	TitleContainer,
	TitleText,
	ImageAndInfoWrapper,
	UserImage,
	InfoWrapper,
	NickNameAndIconWrapper,
	NickName,
	Email,
	Address,
	Phone,
	MannerRateContainer,
};
