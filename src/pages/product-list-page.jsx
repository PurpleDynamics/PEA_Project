import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import {
	Banner,
	EightProductGrid,
	HighlightedText,
	TextSpacer,
} from "../components/commons";
import { PromotionBanner } from "../components/product-list";
import { BREAK_POINT, COLOR, FONT_SIZE } from "../libs/styled-components";

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

	const navigate = useNavigate();

	// navigate에 type을 주어 어떤 버튼을 클릭했는지 값을 저장함.
	// useLocation을 사용하여 data.type으로 확인가능.
	const onClickNavigate = ({ type }) => {
		const sendType = { type };
		navigate("/used-product", { state: sendType });
	};

	return (
		<S.Wrapper>
			<PromotionBanner />
			<S.TitleContainer>
				<HighlightedText
					color={COLOR.COMMON[400]}
					fontSize={FONT_SIZE.bg}
				>
					{user.location}
				</HighlightedText>
				<TextSpacer />

				<HighlightedText
					color={COLOR.PALETTE.orange.weight}
					fontSize={FONT_SIZE.bg}
				>
					중고거래
				</HighlightedText>
				<TextSpacer spacer={1} />
			</S.TitleContainer>
			<S.MoreViewContainer>
				<S.MoreTextButton
					onClick={() => onClickNavigate({ type: "중고거래" })}
				>
					더보기
				</S.MoreTextButton>
			</S.MoreViewContainer>
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
				<TextSpacer spacer={1} />
			</S.TitleContainer>
			<S.MoreViewContainer>
				<S.MoreTextButton
					onClick={() => onClickNavigate({ type: "무료나눔" })}
				>
					더보기
				</S.MoreTextButton>
			</S.MoreViewContainer>
			<EightProductGrid productData={freeData} />
		</S.Wrapper>
	);
};
export default ProductListPage;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 1rem 0;
`;

const MoreViewContainer = styled.div`
	width: 115.2rem;
	display: flex;
	justify-content: start;
	align-items: center;
	@media (max-width: ${BREAK_POINT.lg}) {
		width: 87rem;
	}
	@media (max-width: 700px) {
		width: 58rem;
	}
`;

const MoreTextButton = styled.div`
	padding: 0.4rem 5rem;
	display: flex;
	font-size: ${FONT_SIZE.ti};
	color: ${COLOR.COMMON[400]};
	z-index: 999;
	cursor: pointer;
`;

const S = {
	Wrapper,
	TitleContainer,
	MoreViewContainer,
	MoreTextButton,
};
