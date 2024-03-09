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
import { BREAK_POINT } from "./../../libs/styled-components/reference-tokens/break-point";
/**
 * @component
 * @parameter productData : object<특정상품데이터> - 툭정제품의 전체 정보를  가져오는 api데이터
 * @parameter findProduct : object<특정상품검색데이터> - 특정 제품의 정보중 상세정보의 data
 * @parameter relatedProductData : array<상품데이터> - 특정제품의 MinTag를 보유한제품들의 data
 *
 * @description
 * - 판매자의 정보를 담고있는 DetailProduct Page의 배너 부분입니다
 * - bannerIconDataList를 통해 icon 및 ui를 보여집니다
 * - 해당 Icon 을 click하면 각내용에 맞는 페이지로 이동이 가능합니다.
 */
const SellerBanner = ({ productData, findProduct, relatedProductData }) => {
	const userOndo = findProduct.User.Ondo.ondo.toString();
	const bannerIconDataList = [
		{
			icon: BsEmojiSmileFill,
			iconColor: COLOR.COMMON[900],
			iconText: "매너온도",
			iconInfo: userOndo,
			unit: "º",
		},
		{
			icon: BsFillCollectionFill,
			iconColor: COLOR.PALETTE.cyan.light,
			iconText: "판매/등록 상품",
			iconInfo: "15",
			unit: "건",
		}, //현재 값을 못찾고 있는 상태입니다
		{
			icon: BsTagsFill,
			iconColor: COLOR.COMMON[900],
			iconText: "동일한 태그로 올린 상품",
			iconInfo: relatedProductData.length.toString(),
			unit: "건",
		},
		{
			icon: BsChatQuoteFill,
			iconColor: COLOR.PALETTE.cyan.light,
			iconText: "채팅 응대",
			iconInfo: productData.chat.length.toString(),
			unit: "건",
		},
	];
	return (
		<S.SellerBannerWrapper>
			<h2>
				판매자{" "}
				<S.SellerNickName>
					{findProduct.User.nick_name}
				</S.SellerNickName>
				님에 대한 요약정보입니다.
			</h2>
			<Spacer height={5} />
			<S.BannerIconWrapper>
				{bannerIconDataList.map((data, index) => (
					<S.IconInfoWrapper key={index}>
						<IconAndText
							icon={data.icon}
							iconColor={data.iconColor}
							text={data.iconText}
							textColor={COLOR.COMMON[1000]}
							size={7}
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
	height: 33.9rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${COLOR.COMMON[1000]};
`;
const SellerNickName = styled.span`
	font-size: inherit;
	color: ${COLOR.PALETTE.cyan.light};
	padding: 0 0.5rem;
`;
const BannerIconWrapper = styled.div`
	width: 104rem;
	display: flex;
	justify-content: space-between;
	font-size: ${FONT_SIZE.md};
	color: ${COLOR.PALETTE.cyan.light};
	@media (max-width: ${BREAK_POINT.lg}) {
		width: 70rem;
	}
	@media (max-width: 700px) {
		width: 50rem;
	}
`;
const IconInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
`;
const S = {
	SellerBannerWrapper,
	SellerNickName,
	BannerIconWrapper,
	IconInfoWrapper,
};
