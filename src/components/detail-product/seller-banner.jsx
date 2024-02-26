import {
	BsChatQuoteFill,
	BsEmojiSmileFill,
	BsFillCollectionFill,
	BsTagsFill,
} from "react-icons/bs";
import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import { appendUnit } from "../../utils";
import { IconAndText, Spacer } from "../commons";
/**
 * @component
 * @parameter findProduct : object<특정된 상품데이터> - detail-product-page 에서 Params로id를 특정해 받아옴
 * @returns {JSX.Element}
 *
 * @description
 * - DetailProduct속 컴포넌트입니다.
 * - 판매자 의 정보를  간편하게 요약하는  배너 입니다IconInfo속에 각각의 icon에 맞는 데이터를 담고있습니다
 * - bannerIconDataList를통해 데이터를 관리합니다
 * - 해당 Icon 을 click하면 각내용에 맞는 페이지로 이동이 가능합니다.
 */
const SellerBanner = ({ findProduct }) => {
	const bannerIconDataList = [
		{
			icon: BsEmojiSmileFill,
			iconColor: COLOR.COMMON[900],
			iconText: "매너온도",
			iconInfo: "36",
			unit: "º",
		},
		{
			icon: BsFillCollectionFill,
			iconColor: COLOR.PALETTE.cyan.light,
			iconText: "판매/등록 상품",
			iconInfo: "15",
			unit: "건",
		},
		{
			icon: BsTagsFill,
			iconColor: COLOR.COMMON[900],
			iconText: "동일한 태그로 올린 상품",
			iconInfo: "0",
			unit: "건",
		},
		{
			icon: BsChatQuoteFill,
			iconColor: COLOR.PALETTE.cyan.light,
			iconText: "채팅 응대",
			iconInfo: "32",
			unit: "건",
		},
	];
	return (
		<S.SellerBannerWrapper>
			<h2>판매자 님에 대한 요약정보입니다.</h2>
			<Spacer height={5} />
			<S.BannerIconWrapper>
				{bannerIconDataList.map((data, index) => (
					<S.IconInfoWrapper key={index}>
						<IconAndText
							icon={data.icon}
							iconColor={data.iconColor}
							text={data.iconText}
							textColor={COLOR.COMMON[1000]}
							gap={3}
						/>
						{appendUnit({
							amountData: data.iconInfo,
							unit: data.unit,
						})}
					</S.IconInfoWrapper>
				))}
			</S.BannerIconWrapper>
		</S.SellerBannerWrapper>
	);
};
export default SellerBanner;
const SellerBannerWrapper = styled.div`
	width: 100%;
	height: 33.9rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${COLOR.COMMON[1000]};
	background-color: ${COLOR.PALETTE.cyan.weight};
`;
const BannerIconWrapper = styled.div`
	width: 104rem;
	display: flex;
	justify-content: space-between;
	font-size: ${FONT_SIZE.md};
	color: ${COLOR.PALETTE.cyan.light};
`;
const IconInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
`;
const S = {
	SellerBannerWrapper,
	BannerIconWrapper,
	IconInfoWrapper,
};
