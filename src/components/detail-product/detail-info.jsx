import { useEffect, useState } from "react";
import {
	BsChatQuote,
	BsChatQuoteFill,
	BsClockHistory,
	BsCreditCard2BackFill,
	BsHeartPulseFill,
	BsShare,
} from "react-icons/bs";
import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import { Button, CategoryToggle, ResponsiveIcon } from "../commons";

const DetailInfo = ({ findProduct }) => {
	const [categoryData, setCategoryData] = useState([]);
	useEffect(() => {
		if (findProduct.categoryList) {
			setCategoryData(findProduct.categoryList);
		}
	}, [findProduct]);
	return (
		<S.ProductInfoWrapper>
			<S.TopContain>
				<S.TagContain>
					{categoryData.map((category, index) => (
						<CategoryToggle
							initActiveState={true}
							fontSize={FONT_SIZE.ti}
							key={index}
						>
							{category}
						</CategoryToggle>
					))}
				</S.TagContain>
				<S.UserInterest>{/*윤신님 import*/}</S.UserInterest>
			</S.TopContain>

			<S.ProductTitle>{findProduct.title}</S.ProductTitle>
			<S.ProductSummary>
				<S.ProductLocation>{findProduct.location}</S.ProductLocation>
				{/*동만들어가게?*/}
				<S.ProductPrice>{findProduct.price}원</S.ProductPrice>
				{/* 함수로, 넣기 */}
			</S.ProductSummary>
			<S.ProductDetail>{findProduct.detail}</S.ProductDetail>
			<S.ButtonContain>
				<Button width="36.1rem" palette="cyan" icon={BsChatQuote}>
					채팅하기
				</Button>
				{/*saller가 들어오면 수정,삭제 ,판매완료?   */}
				<Button width="36.1rem" icon={BsShare}>
					공유하기
				</Button>
			</S.ButtonContain>
			<S.ProductSpecsWrapper>
				<S.ProductSpecsContain>
					<ResponsiveIcon
						color={COLOR.PALETTE.cyan.base}
						icon={BsClockHistory}
						size={"3.5rem"}
					/>
					<S.SpecsText>
						<SpecsMainText>6</SpecsMainText> 일 전에 등록됐어요.
					</S.SpecsText>
				</S.ProductSpecsContain>
				<S.ProductSpecsContain>
					<ResponsiveIcon
						color={COLOR.PALETTE.cyan.base}
						icon={BsCreditCard2BackFill}
						size={"3.5rem"}
					/>
					<S.SpecsText>
						시세보다 <SpecsMainText>8%</SpecsMainText> 저렴해요.
					</S.SpecsText>
				</S.ProductSpecsContain>
				<S.ProductSpecsContain>
					<ResponsiveIcon
						color={COLOR.PALETTE.cyan.base}
						icon={BsHeartPulseFill}
						size={"3.5rem"}
					/>

					<S.SpecsText>
						<SpecsMainText>34</SpecsMainText> 명이 관심을 가진
						상품입니다.
					</S.SpecsText>
				</S.ProductSpecsContain>
				<S.ProductSpecsContain>
					<ResponsiveIcon
						color={COLOR.PALETTE.cyan.base}
						icon={BsChatQuoteFill}
						size={"3.5rem"}
					/>
					<S.SpecsText>
						<SpecsMainText>49</SpecsMainText> 명과 채팅이
						이뤄졌습니다.
					</S.SpecsText>
				</S.ProductSpecsContain>
			</S.ProductSpecsWrapper>
		</S.ProductInfoWrapper>
	);
};
export default DetailInfo;

const ProductInfoWrapper = styled.div`
	width: 50rem;
	padding: 1.3rem 1.1rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;
const TopContain = styled.div`
	display: flex;
	gap: 18.7rem;
`;
const TagContain = styled.div`
	display: flex;
	gap: 1rem;
`;

const UserInterest = styled.div``;
const ProductTitle = styled.div`
	width: 100%;
	font-size: ${FONT_SIZE.bg}; //피그마는 2rem인데 사이즈에 없어서 1.8rem으로함
`;
const ProductSummary = styled.div`
	display: flex;
	gap: 18.7rem;
`;
const ProductLocation = styled.div`
	color: ${COLOR.COMMON[400]};
`;
const ProductPrice = styled.div`
	font-size: ${FONT_SIZE.bg};
`;
const ProductDetail = styled.div`
	width: 38rem;
	font-family: "SOYO_Maple_Regular";
`;
const ButtonContain = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;
const ProductSpecsWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;
const ProductSpecsContain = styled.div`
	width: 36rem;
	height: 4.2rem;
	display: flex;
	align-items: center;
	gap: 0.4rem;
`;
const SpecsText = styled.div`
	padding: 0.5rem;
	display: flex;
	align-items: center;
	font-size: ${FONT_SIZE.md};
`;
const SpecsMainText = styled.span`
	color: ${COLOR.PALETTE.cyan.base};
`;
const S = {
	ProductInfoWrapper,
	TopContain,
	TagContain,

	UserInterest,
	ProductTitle,
	ProductSummary,
	ProductLocation,
	ProductPrice,
	ProductDetail,
	ButtonContain,
	ProductSpecsWrapper,
	ProductSpecsContain,

	SpecsText,
	SpecsMainText,
};
