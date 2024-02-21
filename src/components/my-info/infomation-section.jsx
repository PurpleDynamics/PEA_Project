import { BsPencil, BsThermometer } from "react-icons/bs";
import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import {
	CompressionWrapper,
	HighlightedText,
	ResponsiveIcon,
	Spacer,
} from "../commons";

const InforMationSection = ({
	id = 1,
	nickName = "임시아이디",
	profileImage,
	email = "test1@test.com",
	address = "강남구 테헤란로 111",
	mobile = "010-0000-0000",
	mannerRate = "36.5",
}) => {
	return (
		<S.BgColorContainer>
			<CompressionWrapper lr="15%">
				<S.TitleContainer>
					<Spacer width={5} />
					<S.TitleText>마이페이지</S.TitleText>
				</S.TitleContainer>
				<S.DivideWrapper>
					<S.ImageAndInfoWrapper>
						<S.UserImage
							src={profileImage || "https://url.kr/5zjib4"} //profileImage요청이 제대로 이루어지지 않았다면 기본 이미지를 보여주도록
						/>
						<S.InfoWrapper>
							<S.NickNameAndIconWrapper>
								<S.NickName>{nickName} 님</S.NickName>
								<ResponsiveIcon
									icon={BsPencil}
									color={COLOR.COMMON[1000]}
									size={FONT_SIZE.bg}
								/>
							</S.NickNameAndIconWrapper>
							<S.Email>이메일 : {email}</S.Email>
							<S.Address>주소 : {address}</S.Address>
							<S.Mobile>연락처 : {mobile}</S.Mobile>
						</S.InfoWrapper>
					</S.ImageAndInfoWrapper>
					{/* <IconAndText
						icon={BsThermometer}
						size={6}
						text={mannerRate}
						iconColor={COLOR.PALETTE.cyan.light}
						textColor={COLOR.PALETTE.cyan.light}
						gap={1}
					/> */}
					<S.MannerRateContainer>
						<BsThermometer
							size={62}
							color={COLOR.PALETTE.cyan.light}
						/>
						<HighlightedText color={COLOR.PALETTE.cyan.light}>
							{mannerRate}
						</HighlightedText>
					</S.MannerRateContainer>
					<Spacer />
				</S.DivideWrapper>
			</CompressionWrapper>
		</S.BgColorContainer>
	);
};
export default InforMationSection;
const BgColorContainer = styled.div`
	width: 100%;
	height: 30rem;
	background-color: ${COLOR.PALETTE.cyan.weight};
`;
const DivideWrapper = styled.div`
	padding-top: ${FONT_SIZE.md};
	display: flex;
	align-items: center;
	justify-content: space-between;
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
	grid-template-columns: 30% 70%;
	width: 60%;
	height: 70%;
	place-items: center;
`;
const UserImage = styled.img`
	grid-column: 1;
	aspect-ratio: 1/1;
	border-radius: 50%;
	width: 8rem;
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
const Mobile = styled.p``;

const MannerRateContainer = styled.div`
	display: grid;
	text-align: center;
`;
const S = {
	BgColorContainer,
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
	Mobile,
	MannerRateContainer,
};
