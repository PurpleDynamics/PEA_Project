import axios from "axios";
import { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import styled, { keyframes } from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import { ResponsiveIcon } from ".";
/**
 * @component
 * @returns {JSX.Element}
 * @description
 * - "https://purpledynamics.github.io/ads/"
 * - 깃허브 사이트에 넘어온 광고정보를 바탕으로
 * - 배너창에 광고정보를 보여주는 컴포넌트입니다.
 */

const Banner = () => {
	const [adDatas, setAdDatas] = useState([]); // fetching된 data를담을 state
	const [curIdx, setCurIdx] = useState(null); // 배열로넘어온 data의 idx를담을 state

	// github page로부터 광고데이터 fetching 진행
	const fetchAdData = async () => {
		const response = await axios.get(
			"https://purpledynamics.github.io/ads/"
		);
		setAdDatas(response.data);
		setCurIdx(0);
	};

	// adDatas or curIdx의 값이변하면 다시 fetching진행
	useEffect(() => {
		fetchAdData();
	}, [setAdDatas, setCurIdx]);

	// banner click event
	const onClickBanner = () => {
		window.open(adDatas[curIdx]?.redirectUrl); //해당사이트로 이동
	};

	//배너의 '<' 아이콘 click event
	const onClickLeftIcon = () => {
		setCurIdx((prev) => {
			if (prev <= 0) {
				return adDatas.length - 1;
			}
			return prev - 1;
		});
	};
	//배너의 '>' 아이콘 click event
	const onClickRightIcon = () => {
		setCurIdx((prev) => {
			if (prev >= adDatas.length - 1) {
				return 0;
			}
			return prev + 1;
		});
	};

	return (
		<S.CenterContainer
			key={curIdx}
			$bgColor={adDatas[curIdx]?.backgroundColor}
			onClick={onClickBanner}
		>
			<S.InfoWrapper>
				<S.CompanyName>{adDatas[curIdx]?.companyName}</S.CompanyName>
				<S.InfoTitle $titleColor={adDatas[curIdx]?.titleColor}>
					{adDatas[curIdx]?.titleText}
				</S.InfoTitle>
				<S.InfoText $contentColor={adDatas[curIdx]?.contentColor}>
					{/**google form에 입력양식을 띄어쓰기 두개입력시 줄바꿈으로 설정해두어서
					 * 줄바꿈처리를 해주는 logic작성
					 */}
					{adDatas[curIdx]?.contentText
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
					<S.InfoSlideBtnWrapper
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
						<ResponsiveIcon
							color={COLOR.COMMON[1000]}
							size={FONT_SIZE.bg}
							icon={BsChevronLeft}
							onClick={onClickLeftIcon}
						/>
						{curIdx + 1}/{adDatas.length}
						<ResponsiveIcon
							color={COLOR.COMMON[1000]}
							size={FONT_SIZE.bg}
							icon={BsChevronRight}
							onClick={onClickRightIcon}
						/>
					</S.InfoSlideBtnWrapper>
				</S.InfoSlideBtn>
			</S.InfoWrapper>
			<S.ImageContainer>
				<S.BannerImage src={adDatas[curIdx]?.imgUrl} />
			</S.ImageContainer>
		</S.CenterContainer>
	);
};

export default Banner;

// opacity_control, rising animation효과
const opacity_control = keyframes`
	0%{
		background-color: ${COLOR.COMMON[0]};
		opacity: 0.8
	}
	100%{
		opacity: 1
	}
`;

const rising = keyframes`
0%{
	opacity: 0;
	transform : translateY(5%);
}
100%{
	opacity: 1;
	transform: translateY(0%);
}
`;
const CenterContainer = styled.div`
	width: 100%;
	height: fit-content;
	animation: ${opacity_control} 0.5s ease-in-out forwards;
	background-color: ${({ $bgColor }) => {
		return $bgColor;
	}};
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		cursor: pointer;
	}
`;
const InfoWrapper = styled.div`
	height: 100%;
	width: 50rem;

	padding-top: 5rem;
	display: grid;
	grid-template-rows: 1fr 2fr 6fr 3fr;
	justify-content: start;
	align-items: center;
`;
const CompanyName = styled.h3`
	grid-row: 1;
	opacity: 0;
	color: ${COLOR.COMMON[1000]};
	animation: ${rising} 1s ease-in-out forwards;
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
	color: ${({ $titleColor }) => {
		return $titleColor;
	}};
	opacity: 0;
	animation: ${rising} 1s 0.2s ease-in-out forwards;
`;
const InfoText = styled.h3`
	grid-row: 3;
	color: ${({ $contentColor }) => {
		return $contentColor;
	}};
	opacity: 0;
	font-family: "SOYO_Maple_Regular";
	line-height: ${FONT_SIZE.lg};
	animation: ${rising} 1s 0.4s ease-in-out forwards;
	word-break: break-all;
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
	opacity: 0;
	animation: ${rising} 1s 0.6s ease-in-out forwards;
`;

const S = {
	CenterContainer,
	InfoWrapper,
	CompanyName,
	InfoSlideBtn,
	InfoSlideBtnWrapper,
	InfoTitle,
	InfoText,
	ImageContainer,
	BannerImage,
};
