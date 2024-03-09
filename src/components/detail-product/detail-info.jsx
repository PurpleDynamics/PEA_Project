import { BsChatQuote, BsHeart, BsShare } from "react-icons/bs";
import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import { Button, CategoryToggle, ResponsiveIcon } from "../commons";
import ItemSummary from "./item-summary";
/**
 * @component
 * @parameter findProduct : object<특정된 상품데이터> - detail-product-page 에서 Params로id를 특정해 받아옴
 * @returns {JSX.Element}
 *
 * @description DetailProduct page의 "판매 물품의 상세정보를 보여주는 부분입니다"
 */
const DetailInfo = ({ findProduct }) => {
	const categoryData = findProduct.categoryList;
	return (
		<S.ProductInfoWrapper>
			<S.TopWrapper>
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
				<S.UserInterest>
					<ResponsiveIcon icon={BsHeart} size={"2rem"} />
				</S.UserInterest>
			</S.TopWrapper>
			<S.MiddleWrapper>
				<S.ProductTitle>{findProduct.title}</S.ProductTitle>
				<S.ProductPriceAndLocation>
					<S.ProductLocation>
						{findProduct.location}
					</S.ProductLocation>
					<S.ProductPrice>
						{parseInt(findProduct.price).toLocaleString()}원
					</S.ProductPrice>
				</S.ProductPriceAndLocation>
				<S.ProductDetail>{findProduct.detail}</S.ProductDetail>
			</S.MiddleWrapper>
			<S.ButtonWrapper>
				<Button width="36.1rem" palette="cyan" icon={BsChatQuote}>
					채팅하기
				</Button>
				<Button width="36.1rem" icon={BsShare}>
					공유하기
				</Button>
			</S.ButtonWrapper>
			<ItemSummary findProduct={findProduct} />
		</S.ProductInfoWrapper>
	);
};
export default DetailInfo;

const ProductInfoWrapper = styled.div`
	width: 50rem;
	height: auto;
	padding: 1.3rem 1.1rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;
const TopWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
const MiddleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 28rem;
	gap: 2rem;
`;
const TagContain = styled.div`
	display: flex;
	gap: 1rem;
`;

const UserInterest = styled.div`
	display: flex;
	justify-content: center;
	font-size: ${FONT_SIZE.bg};
	align-items: center;
`;
const ProductTitle = styled.div`
	font-size: ${FONT_SIZE.bg};
`;
const ProductPriceAndLocation = styled.div`
	display: flex;
	justify-content: space-between;
`;
const ProductLocation = styled.div`
	color: ${COLOR.COMMON[400]};
`;
const ProductPrice = styled.div`
	font-size: ${FONT_SIZE.bg};
	color: ${COLOR.PALETTE.cyan.base};
`;
const ProductDetail = styled.div`
	font-family: "SOYO_Maple_Regular";
`;
const ButtonWrapper = styled.div`
	padding: 3rem 0;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;
const S = {
	ProductInfoWrapper,
	TopWrapper,
	MiddleWrapper,
	TagContain,
	UserInterest,
	ProductTitle,
	ProductPriceAndLocation,
	ProductLocation,
	ProductPrice,
	ProductDetail,
	ButtonWrapper,
};
