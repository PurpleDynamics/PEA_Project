import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import {
	Banner,
	EightProductGrid,
	HighlightedText,
	TextSpacer,
} from "../components/commons";
import { PromotionBanner } from "../components/product-list";
import { useProductList } from "../libs/react-query/products";
import { BREAK_POINT, COLOR, FONT_SIZE } from "../libs/styled-components";
import { extractRegionalUnitDong } from "../utils";

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
	const { isLoading, data } = useProductList();
	const navigate = useNavigate();
	return (
		<>
			{isLoading ? (
				<div>Loading</div>
			) : (
				<S.Wrapper>
					<PromotionBanner />
					<S.TitleContainer>
						<HighlightedText
							color={COLOR.COMMON[400]}
							fontSize={FONT_SIZE.bg}
						>
							{
								// data.region 값이 있다면, "-동" 단위의 행정구역만 추출하여 출력
								// data.region 값이 없다면, '대한민국' 출력
								extractRegionalUnitDong({
									koreanRegion: data.region ?? "대한민국",
								})
							}
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
							onClick={() => {
								navigate("/used-product?payment-method=used");
							}}
						>
							더보기
						</S.MoreTextButton>
					</S.MoreViewContainer>
					<EightProductGrid productData={data.usedProduct} />
					<Banner />
					<S.TitleContainer>
						<HighlightedText
							color={COLOR.COMMON[400]}
							fontSize={FONT_SIZE.bg}
						>
							{
								// data.region 값이 있다면, "-동" 단위의 행정구역만 추출하여 출력
								// data.region 값이 없다면, '대한민국' 출력
								extractRegionalUnitDong({
									koreanRegion: data.region ?? "대한민국",
								})
							}
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
							onClick={() => {
								navigate("/used-product?payment-method=free");
							}}
						>
							더보기
						</S.MoreTextButton>
					</S.MoreViewContainer>
					<EightProductGrid productData={data.freeProduct} />
				</S.Wrapper>
			)}
		</>
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
	cursor: pointer;
`;

const S = {
	Wrapper,
	TitleContainer,
	MoreViewContainer,
	MoreTextButton,
};
