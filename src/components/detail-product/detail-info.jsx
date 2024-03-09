import { BsChatQuote, BsHeart, BsShare } from "react-icons/bs";
import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import { Button, CategoryToggle, ResponsiveIcon } from "../commons";
import ItemSummary from "./item-summary";
/**
 * @component
 * @parameter productData : object<특정상품데이터> - 툭정제품의 전체 정보를  가져오는 api데이터
 * @parameter findProduct : object<특정상품검색데이터> - 특정 제품의 정보중 상세정보의 data
 * @returns {JSX.Element}
 *
 * @description DetailProduct page의 "판매 물품의 상세정보를 보여주는 부분입니다"
 */
const DetailInfo = ({ productData, findProduct }) => {
	const categoryData = findProduct.ProductsTags;
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
							{category.Tag.tag}
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
					<S.ProductLocation>{findProduct.region}</S.ProductLocation>
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
			<ItemSummary productData={productData} findProduct={findProduct} />
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
