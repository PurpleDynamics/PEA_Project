import {
	BsChatQuoteFill,
	BsEmojiSmileFill,
	BsFillCollectionFill,
	BsTagsFill,
} from "react-icons/bs";
import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
import { IconAndText, Spacer } from "../commons";
import Button from "./../commons/button";

const SellerBanner = ({ findProduct }) => {
	// const Seller = findProduct.sellerId;
	return (
		<>
			<S.SellerBannerContain>
				<h2>판매자 님에 대한 요약정보입니다.</h2>
				<Spacer height={5} />
				<S.BannerButtonContainer>
					<IconAndText
						icon={BsEmojiSmileFill}
						iconColor={COLOR.COMMON[900]}
						text="매너온도"
					/>
					<IconAndText
						icon={BsFillCollectionFill}
						iconColor={COLOR.PALETTE.cyan.light}
						text="판매/등록 상품"
					/>
					<IconAndText
						icon={BsTagsFill}
						iconColor={COLOR.COMMON[900]}
						text="동일한 태그로 올린 상품"
					/>
					<IconAndText
						icon={BsChatQuoteFill}
						iconColor={COLOR.PALETTE.cyan.light}
						text="채팅 응대"
					/>
				</S.BannerButtonContainer>
			</S.SellerBannerContain>
			<S.TagPriceTrends></S.TagPriceTrends>
			<S.TagProductListContainer>
				<S.TagProductList>
					<S.TagListText>
						<h2>같은 카태고리 상품</h2>
						<h3>총건</h3>
					</S.TagListText>
				</S.TagProductList>
				<Button width="19.3rem" height="6.2rem">
					{/*  icon={AiFillAlert} */}더 보러 가기
				</Button>
			</S.TagProductListContainer>
		</>
	);
};
export default SellerBanner;
const SellerBannerContain = styled.div`
	width: 100%;
	height: 33.9rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${COLOR.COMMON[1000]};
	background-color: ${COLOR.PALETTE.cyan.weight};
`;
const BannerButtonContainer = styled.div`
	display: flex;
`;
const SellerMannerTemperature = styled.button``;
const SellerProductManagement = styled.button``;
const SimilarTaggedProducts = styled.button``;
const SellerChatResponse = styled.button``;
const TagPriceTrends = styled.div``;
const TagProductListContainer = styled.div`
	display: grid;
	align-items: center;
	justify-content: center;
`;
const TagProductList = styled.div``;
const TagListText = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const S = {
	SellerBannerContain,
	BannerButtonContainer,
	SellerMannerTemperature,
	SellerProductManagement,
	SimilarTaggedProducts,
	SellerChatResponse,
	TagPriceTrends,
	TagProductListContainer,
	TagProductList,
	TagListText,
};
