import axios from "axios";
import { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import ResponsiveIcon from "./responsive-icon";
const Banner = () => {
	const [data, setData] = useState([]);
	const [curIdx, setCurIdx] = useState(null);
	const fetchData = async () => {
		const response = await axios.get("http://purpledynamics.github.io/ads");
		console.log(response.data);
		setData(response.data);
		setCurIdx(0);
	};
	useEffect(() => {
		fetchData();
	}, [setData, setCurIdx]);
	
	return (
		<S.CenterContainer $bgColor={data[curIdx]?.backgroundColor}>
			<S.MainWrapper>
				<S.InfoContainer>
					<S.InfoWrapper>
						<S.CompanyName>
							{data[curIdx]?.companyName}
						</S.CompanyName>
						<S.InfoTitle $themeColor={data[curIdx]?.titleColor}>
							{data[curIdx]?.titleText}
						</S.InfoTitle>
						<S.InfoText $contentColor={data[curIdx]?.contentColor}>
							{data[curIdx]?.contentText
								.split("  ")
								.map((phrase, idx) => {
									return (
										<div key={idx}>
											{phrase}
											<br />
										</div>
									);
								})}
						</S.InfoText>
						<S.InfoSlideBtn>
							<S.InfoSlideBtnWrapper>
								<ResponsiveIcon
									color={COLOR.COMMON[1000]}
									size={FONT_SIZE.bg}
									icon={BsChevronLeft}
									onClick={() => {
										setCurIdx((prev) => {
											if (prev <= 0) {
												return prev;
											}
											return prev - 1;
										});
									}}
								/>
								{curIdx + 1}/{data.length}
								<ResponsiveIcon
									color={COLOR.COMMON[1000]}
									size={FONT_SIZE.bg}
									icon={BsChevronRight}
									onClick={() => {
										setCurIdx((prev) => {
											if (prev >= data.length - 1) {
												return prev;
											}
											return prev + 1;
										});
									}}
								/>
							</S.InfoSlideBtnWrapper>
						</S.InfoSlideBtn>
					</S.InfoWrapper>
				</S.InfoContainer>
				<S.ImageContainer>
					<S.BannerImage src={data[curIdx]?.imgUrl} />
					{/**외부에서 이미지 경로 받아서 사용 */}
				</S.ImageContainer>
			</S.MainWrapper>
		</S.CenterContainer>
	);
};

export default Banner;

const CenterContainer = styled.div`
	margin: 9rem 0;
	width: 100%;
	height: 35rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ $bgColor }) => {
		return $bgColor;
	}};
`;
const MainWrapper = styled.div`
	display: grid;
	grid-template-columns: 60% 40%;
	width: 110rem;
	height: 100%;
`;
const InfoContainer = styled.div`
	height: 100%;
`;
const InfoWrapper = styled.div`
	padding-top: 5rem;
	display: grid;
	grid-template-rows: 1fr 2fr 6fr 3fr;
	justify-content: center;
	align-items: center;
`;
const CompanyName = styled.h3`
	grid-row: 1;
	color: ${COLOR.COMMON[1000]};
`;
const InfoSlideBtn = styled.button`
	grid-row: 4;
	width: 14rem;
	height: 3rem;
	border-radius: ${FONT_SIZE.md};
	color: ${COLOR.COMMON[1000]};
	background-color: ${COLOR.COMMON[200]};
`;
const InfoSlideBtnWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 3px;
`;
const InfoTitle = styled.h1`
	grid-row: 2;
	color: ${({ $themeColor }) => {
		return $themeColor;
	}};
`;
const InfoText = styled.h3`
	grid-row: 3;
	color: ${({ $contentColor }) => {
		return $contentColor;
	}};
	font-family: "SOYO_Maple_Regular";
	line-height: ${FONT_SIZE.lg};
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	aspect-ratio: 1/1;
	height: 35rem;
`;
const BannerImage = styled.img`
	width: 100%;
	height: 100%;
`;
// 배너 제목에 대한 색상 조합
const S = {
	CenterContainer,
	MainWrapper,
	InfoContainer,
	InfoWrapper,
	CompanyName,
	InfoSlideBtn,
	InfoSlideBtnWrapper,
	InfoTitle,
	InfoText,
	ImageContainer,
	BannerImage,
};
