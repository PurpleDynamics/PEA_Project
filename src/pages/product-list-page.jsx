import styled from "styled-components";

import {
	Banner,
	EightProductGrid,
	HighlightedText,
} from "../components/commons";
import { PromotionBanner } from "../components/product-list";
import { COLOR, FONT_SIZE } from "../libs/styled-components";

/**
 * @component
 * @returns {JSX.Element}
 * @description
 * - product-list-page 입니다.
 * - 로그인 시 제일 먼저 보여지는 페이지입니다.
 * - 현재 중고 || 무료를 판별하여 eightProductGrid로 data를 넘겨줍니다.
 * - 보내지는 데이터는 각 8개를 넘을 수 없고
 * - 임시 data의 salesCategory로 중고,무료를 판별합니다.
 * - 임시 data의 location과 user data의 location을 비교하여 일치하는 location 정보만 보내지게 됩니다.
 */

const ProductListPage = () => {
	// 임시 user data
	const user = {
		location: "역삼동",
	};

	// 임시 product data
	const usedData = [
		{
			productId: 1,
			title: "중고1",
			createdAt: "2024-02-18",
			price: "1000",
			categoriesArray: ["음식", "사람"],
			interestCount: 10,
			chattingCount: 5,
			initIsInterest: true,
			disabled: false,
		},
		{
			title: "중고2",
			price: "1000",
		},
		{
			title: "중고3",
			price: "1000",
		},
		{
			title: "중고4",
			price: "1000",
		},
		{
			title: "중고5",
			price: "1000",
		},
		{
			title: "중고6",
			price: "1000",
		},
		{
			title: "중고7",
			price: "1000",
		},
		{
			title: "중고8",
			price: "1000",
		},
	];

	const freeData = [
		{
			title: "무료1",
			price: "0",
		},
		{
			title: "무료2",
			price: "0",
		},
		{
			title: "무료3",
			price: "0",
		},
		{
			title: "무료4",
			price: "0",
		},
		{
			title: "무료5",
			price: "0",
		},
		{
			title: "무료6",
			price: "0",
		},
		{
			title: "무료7",
			price: "0",
		},
		{
			title: "무료8",
			price: "0",
		},
	];

	return (
		<>
			<PromotionBanner />
			<S.TitleContainer>
				<HighlightedText
					color={COLOR.COMMON[400]}
					fontSize={FONT_SIZE.bg}
				>
					{user.location}
				</HighlightedText>
				<p>&nbsp;</p>
				<HighlightedText
					color={COLOR.PALETTE.orange.weight}
					fontSize={FONT_SIZE.bg}
				>
					중고거래
				</HighlightedText>
			</S.TitleContainer>
			<EightProductGrid productData={usedData} />
			<Banner />
			<S.TitleContainer>
				<HighlightedText
					color={COLOR.COMMON[400]}
					fontSize={FONT_SIZE.bg}
				>
					{user.location}
				</HighlightedText>
				<p>&nbsp;</p>
				<HighlightedText
					color={COLOR.PALETTE.mint.weight}
					fontSize={FONT_SIZE.bg}
				>
					무료나눔
				</HighlightedText>
			</S.TitleContainer>
			<EightProductGrid productData={freeData} />
		</>
	);
};
export default ProductListPage;

const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 1rem 0;
`;

const S = {
	TitleContainer,
};
