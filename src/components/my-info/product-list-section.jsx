import { useState } from "react";
import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
import { CompressionWrapper, EightProductGrid } from "../commons";

const ProductListSection = () => {
	const [isClicked, setIsClicked] = useState(null);
	const handleClick = (id) => {
		setIsClicked(id);
	};
	// 임시 user data
	const user = {
		location: "역삼동",
	};

	// 임시 product data
	const data = [
		{
			title: "물건1",
			location: "역삼동",
			salesCategory: "중고",
		},
		{
			title: "물건2",
			location: "독산동",
			salesCategory: "새상품",
		},
		{
			title: "물건3",
			location: "역삼동",
			salesCategory: "새상품",
		},
		{
			title: "물건4",
			location: "독산동",
			salesCategory: "중고",
		},
		{
			title: "물건1",
			location: "역삼동",
			salesCategory: "중고",
		},
		{
			title: "물건2",
			location: "독산동",
			salesCategory: "새상품",
		},
		{
			title: "물건3",
			location: "역삼동",
			salesCategory: "새상품",
		},
		{
			title: "물건4",
			location: "독산동",
			salesCategory: "중고",
		},
		{
			title: "물건1",
			location: "역삼동",
			salesCategory: "중고",
		},
		{
			title: "물건2",
			location: "독산동",
			salesCategory: "새상품",
		},
		{
			title: "물건3",
			location: "역삼동",
			salesCategory: "새상품",
		},
		{
			title: "물건4",
			location: "독산동",
			salesCategory: "중고",
		},
		{
			title: "물건1",
			location: "역삼동",
			salesCategory: "중고",
		},
		{
			title: "물건2",
			location: "독산동",
			salesCategory: "새상품",
		},
		{
			title: "물건3",
			location: "역삼동",
			salesCategory: "새상품",
		},
		{
			title: "물건4",
			location: "역삼동",
			salesCategory: "중고",
		},
	];

	const usedData = data
		.filter(
			(el) => el.salesCategory === "중고" && el.location === user.location
		)
		.slice(0, 8);

	const freeData = data
		.filter(
			(el) => el.salesCategory !== "중고" && el.location === user.location
		)
		.slice(0, 8);

	return (
		<CompressionWrapper lr="15%">
			<S.MainWrapper>
				<S.TitleContainer>
					<S.TitleText>등록상품</S.TitleText>
				</S.TitleContainer>
				<S.SaleOrUsedArea>
					<S.Sale
						id={1}
						onClick={() => handleClick(1)}
						isClicked={isClicked === 1}
					>
						판매
					</S.Sale>
					<S.Used
						id={2}
						onClick={() => handleClick(2)}
						isClicked={isClicked === 2}
					>
						나눔
					</S.Used>
				</S.SaleOrUsedArea>
				<EightProductGrid productData={data} />
			</S.MainWrapper>
		</CompressionWrapper>
	);
};
export default ProductListSection;

const MainWrapper = styled.div`
	width: 100%;
	height: 100%;
`;
const TitleContainer = styled.div`
	width: 100%;
	height: 30%;
	padding-top: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const TitleText = styled.h2`
	color: ${COLOR.COMMON[0]};
`;
const SaleOrUsedArea = styled.div`
	height: 7rem;
	display: flex;
	align-items: center;
	color: ${COLOR.COMMON[600]};
	justify-content: space-evenly;
	gap: 10rem;
`;
const Sale = styled.h3`
	cursor: pointer;
	color: ${({ isClicked }) => isClicked && COLOR.PALETTE.orange.weight};
`;
const Used = styled.h3`
	cursor: pointer;
	color: ${({ isClicked }) => isClicked && COLOR.PALETTE.mint.weight};
`;
const S = {
	MainWrapper,
	TitleContainer,
	TitleText,
	SaleOrUsedArea,
	Sale,
	Used,
};
