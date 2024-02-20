import {
	BsChatQuoteFill,
	BsEmojiSmileFill,
	BsFillCollectionFill,
	BsTagsFill,
} from "react-icons/bs";
import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
import { IconAndText, Spacer } from "../commons";

const SellerBanner = ({ findProduct }) => {
	// const Seller = findProduct.sellerId;
	return (
		<S.SellerBannerContain>
			<h2>판매자 님에 대한 요약정보입니다.</h2>
			<Spacer height={5} />
			<S.BannerIconContainer>
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
			</S.BannerIconContainer>
		</S.SellerBannerContain>
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
const BannerIconContainer = styled.div`
	width: 104rem;
	display: flex;
	justify-content: space-between;
`;

const S = {
	SellerBannerContain,
	BannerIconContainer,
};
