import { BsChevronDown, BsChevronUp, BsX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import { ResponsiveIcon, SideChatButton, TopButton } from ".";

/**
 * @component
 * @parameter productId : number - 상품 id
 * @parameter recentlyProducts: array - 최근 본 상품 정보를 담고 있는 배열
 * @parameter imgUrl : string - 상품의 대표이미지 url
 * @parameter viewedCount : number - 최근 본 상품 리스트에 표사될 최근 본 상품 수
 * @returns {JSX.Element}
 *
 * @description
 * - 각 페이지의 side에 고정될 최근 본 상품 및 채팅과 관련된 컴포넌트 입니다.
 * - 최근 본 상품의 이미지를 그리드 형태로 표시합니다.
 * - 각 상품 이미지를 클릭하면 해당 상품의 상세 페이지로 이동합니다.
 * - 채팅 버튼을 클릭할 경우, 채팅 UI가 보여집니다.
 */

const RecentProductList = ({
	recentlyProducts = [],
	viewedCount = 3,
	...rest
}) => {
	const navigate = useNavigate();

	/** 최근 본 상품 정보 중 출력될 상품의 개수  */
	const displayedProducts = recentlyProducts.slice(0, viewedCount);

	/**
	 * @function
	 * @parameter productId : number - 상품 id
	 *
	 * @description 최근 본 상품 리스트의 이미지를 클릭할 경우, productId를 parma으로 하여 해당하는 상품의 상세 페이지로 이동합니다.
	 */
	const handleProductClick = (productId) => {
		navigate(`/detail-product/${productId}`);
	};

	const removeRecentlyProductItem = (productId, e) => {
		e.stopPropagation();
	};

	return (
		<S.RecentProductWrapper>
			<S.Title>최근 본 상품</S.Title>
			<S.MovedIconContainer>
				<ResponsiveIcon
					icon={BsChevronUp}
					size={FONT_SIZE.bg}
					onClick={() => {}}
				/>
			</S.MovedIconContainer>
			<S.RecentlyProduct>
				{displayedProducts.length > 0 ? (
					displayedProducts.map((product) => (
						<S.RecentlyProductItem
							key={product.productId}
							onClick={(e) =>
								handleProductClick(product.productId, e)
							}
						>
							<S.RecentlyProductItemImage
								src={product.imgUrl}
								alt="상품 이미지"
							/>
							{/* close icon 클릭 시 해당 productId의 상품이 최근 본 상품 목록에서 제거 */}
							<S.RemoveIconContainer
								onClick={(e) =>
									removeRecentlyProductItem(
										product.productId,
										e
									)
								}
							>
								<ResponsiveIcon
									icon={BsX}
									size={FONT_SIZE.lg}
									color={COLOR.COMMON[600]}
								/>
							</S.RemoveIconContainer>
						</S.RecentlyProductItem>
					))
				) : (
					<S.Content>최근 본 상품이 없습니다.</S.Content>
				)}
			</S.RecentlyProduct>
			<S.MovedIconContainer>
				<ResponsiveIcon
					icon={BsChevronDown}
					size={FONT_SIZE.bg}
					onClick={() => {}}
				/>
			</S.MovedIconContainer>
			<TopButton />
			<SideChatButton />
		</S.RecentProductWrapper>
	);
};
export default RecentProductList;

const RecentProductWrapper = styled.div`
	width: 10rem;
	border: 1px solid ${COLOR.COMMON[800]};
	padding: 1rem;
	grid-row: 1;
	display: grid;
	/* 순서대로 Title, Icon, List, Icon, TopButton */
	grid-template-rows: 1.5fr 1.25fr auto 1.25fr 1.5fr;
	position: fixed;
	top: 30vh;
	right: 5vw;
`;

const Title = styled.p`
	font-size: ${FONT_SIZE.md};
	grid-row: 1;
`;

const MovedIconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0.2rem;
`;

const Content = styled.p`
	font-family: "SOYO_Maple_Regular";
	font-size: ${FONT_SIZE.sm};
	text-align: center;
	padding-top: 12rem;
`;

const RecentlyProduct = styled.div`
	display: grid;
	grid-template-rows: repeat(3, 8rem);
	grid-gap: 1rem;
`;

const RecentlyProductItem = styled.div`
	position: relative;
`;

const RecentlyProductItemImage = styled.img`
	width: 8rem;
	height: 8rem;
	cursor: pointer;
`;

const RemoveIconContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	opacity: 0;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
`;

const S = {
	Content,
	MovedIconContainer,
	RemoveIconContainer,
	RecentlyProduct,
	RecentlyProductItem,
	RecentlyProductItemImage,
	RecentProductWrapper,
	Title,
};
