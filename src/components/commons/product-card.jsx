import { useState } from "react";
import {
	BsChatQuoteFill,
	BsHeart,
	BsHeartFill,
	BsHearts,
} from "react-icons/bs";
import styled, { css } from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import { pickPaletteOneById, printPeriodAsString } from "../../utils";
import { CategoryToggle, HighlightedText } from "./";

/**
 * @component
 * @parameter productId : number - 상품 id
 * @parameter imgUrl : string - 상품의 대표이미지 url
 * @parameter title : string - 상품의 제목
 * @parameter createdAt : string - 상품 등록일 (format: 'yyyy-mm-dd')
 * @parameter price : string | number - 가격
 * @parameter categoriesArray : array - 카테고리 이름(string) 이 담긴 배열
 * @parameter interestCount : number - '찜'/'관심 표현' 한 사용자 수
 * @parameter chattingCount : number - 해당 상품을 주제로 채팅을 주고받은 사용자 수
 * @parameter initIsInterest : boolean - 현재 사용자가 '찜'/'관심 표현' 했는지 여부
 * @parameter onClickInterestButton : function - '찜'/'관심 표현' 등록 혹은 해제 시, 실행 될 로직
 * @parameter disabled : boolean - 토글 (활성화/비활성화) 시, 실행로직
 * @returns {JSX.Element}
 *
 * @description
 * - 상품을 전시하는 컴포넌트입니다.
 * - 호버/클릭 에 대해 css 적용이 달라집니다.
 * - 클릭 에 대한 콜백함수를 전달받아, 페이지를 이동시키는 등의 작업을 할 수 있습니다.
 * - '찜'/'관심 표현'에 대한 상태를 자체적으로 관리합니다. (외부에서 초기값을 지정할 수 있습니다.)
 * - 'disabled' 값이 true 일 경우, 클릭 등의 이벤트가 발생하지 않습니다.
 * - category 는 최소 1개, 최대 2개까지 노출됩니다.
 */
const ProductCard = ({
	productId = 0,
	imgUrl = "https://source.unsplash.com/random",
	title = "⚠️ no_title",
	createdAt = "yyyy-mm-dd",
	price = "⚠️ no_price",
	categoriesArray = ["기타"],
	interestCount = 0,
	chattingCount = 0,
	initIsInterest = false,
	onClickInterestButton = () => {},
	disabled = false,
	...rest
}) => {
	const [isInterest, setIsInterest] = useState(initIsInterest);

	/** 출력될 카테고리 갯수  */
	const outputCategoryCount = 2;
	categoriesArray.splice(
		outputCategoryCount,
		categoriesArray.length - outputCategoryCount
	);

	/** 상품 등록일 ~ 조회 당일까지 기간 */
	const period = printPeriodAsString({ formattedDate: createdAt });
	/** card 테마 색상 */
	const palette = pickPaletteOneById({ id: productId });

	const onClickHeartIcon = () => {
		setIsInterest((prev) => {
			return !prev;
		});
		onClickInterestButton();
	};

	return (
		<CardWrapper
			$activeEventShadowColor={palette.weight}
			$disabled={disabled}
			{...rest}
		>
			{
				/** disabled 경우, Card 앞에 어두운 필터를 덮고, 클릭 등의 이벤트 차단  */
				disabled && (
					<BlockFilter
						$disabled={disabled}
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
						<RotatedCompletionMessage>
							거 래 완 료
						</RotatedCompletionMessage>
					</BlockFilter>
				)
			}

			<img src={imgUrl} width="100%" style={{ aspectRatio: "1/1" }} />
			<SpaceBetweenFlex>
				<CategoriesSection>
					{categoriesArray.map((category, index) => {
						return (
							<CategoryToggle key={index} fontSize={FONT_SIZE.ti}>
								{category}
							</CategoryToggle>
						);
					})}
				</CategoriesSection>
				{isInterest ? (
					<BsHeartFill
						size={FONT_SIZE.lg}
						color={COLOR.PALETTE.magenta.light}
						onClick={onClickHeartIcon}
					/>
				) : (
					<BsHeart size={FONT_SIZE.lg} onClick={onClickHeartIcon} />
				)}
			</SpaceBetweenFlex>

			<SpaceBetweenFlex>
				<TitleSection>{title}</TitleSection>
				<PeriodSection>{period}</PeriodSection>
			</SpaceBetweenFlex>

			<SpaceBetweenFlex>
				{/** 가격 */}
				<HighlightedText color={palette.weight}>
					{price.toLocaleString()}
				</HighlightedText>
				<VoteCountsSection>
					<VoteCount>
						<BsHearts />
						{interestCount}
					</VoteCount>
					<VoteCount>
						<BsChatQuoteFill />
						{chattingCount}
					</VoteCount>
				</VoteCountsSection>
			</SpaceBetweenFlex>
		</CardWrapper>
	);
};

export default ProductCard;

const CardWrapper = styled.div`
	position: relative;

	width: 21rem;
	height: 35.8rem;

	border-radius: 1.1rem;
	box-shadow: ${COLOR.COMMON[200]} 0 0.5rem;

	overflow: hidden;

	display: grid;
	grid-template-rows: 21.5rem 1fr 1.2fr 1fr;
	grid-row-gap: 1px;

	cursor: pointer;
	background-color: ${COLOR.COMMON[1000]};

	transition: all 0.1s;

	${({ $disabled }) => {
		return $disabled
			? css`
					box-shadow: none;
					color: ${COLOR.COMMON[1000]};
					background-color: ${COLOR.COMMON[400]};
				`
			: css`
					box-shadow: ${COLOR.COMMON[200]} 0 0.5rem;
					color: ${COLOR.COMMON[0]};
					background-color: ${COLOR.COMMON[1000]};
				`;
	}}
	/** hover 시 */
	&:hover {
		box-shadow: ${({ $activeEventShadowColor, $disabled }) => {
			return $disabled ? "none" : `${$activeEventShadowColor} 0 0.5rem`;
		}};
	}
	/** 눌렸을 때, */
	&:active {
		${({ $disabled, $activeEventShadowColor }) => {
			return $disabled
				? css`
						/** 비활성화 상태인 경우 */
						box-shadow: none;
						color: ${COLOR.COMMON[1000]};
						background-color: ${COLOR.COMMON[400]};
					`
				: css`
						/** 활성 상태 */
						transform: translateY(0.2rem); // 내려가는 효과
						box-shadow: ${$activeEventShadowColor} 0 0.1rem;
						color: ${COLOR.COMMON[0]};
						background-color: ${COLOR.COMMON[800]};
					`;
		}}
	}
`;

const SpaceBetweenFlex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1rem;
`;
const CategoriesSection = styled.section`
	display: flex;
	gap: 1px;
`;
const TitleSection = styled.section`
	width: fit-content;
	max-width: 14rem;

	word-break: break-all;

	font-size: ${FONT_SIZE.bg};

	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;
const PeriodSection = styled.section`
	width: fit-content;
	max-width: 5rem;
	font-size: ${FONT_SIZE.ti};

	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;
const VoteCountsSection = styled.section`
	display: flex;
	flex-direction: row;
	gap: 1rem;
`;
const VoteCount = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.2rem;
	font-size: ${FONT_SIZE.ti};
`;
const BlockFilter = styled.div`
	position: absolute;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;

	background-color: ${COLOR.COMMON[0] + "AA"}; // 배경을 약간 투명하게

	display: flex;
	align-items: center;
	justify-content: center;
`;
const RotatedCompletionMessage = styled.h1`
	text-align: center;
	word-spacing: 2rem;
	transform: rotate(-45deg);
	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	-o-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);

	text-shadow: 0.1rem 0.1rem 0.1rem ${COLOR.COMMON[0]};
`;
