import { BsX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import ResponsiveIcon from "./responsive-icon";

/**
 * @component
 * @parameter productId : number - 상품 id
   @parameter recentlyProducts: array - 최근 본 상품 정보를 담고 있는 배열
 * @parameter imgUrl : string - 상품의 대표이미지 url
	 @parameter viewedCount : number - 최근 본 상품 리스트에 표사될 최근 본 상품 수
 * @returns {JSX.Element}
 *
 * @description
 * - 최근 본 상품을 표시하는 컴포넌트 입니다.
 * - 상품의 이미지를 그리드 형태로 표시합니다.
 * - 각 상품 이미지를 클릭하면 해당 상품의 상세 페이지로 이동합니다.
 */

const RecentProduct = ({
	recentlyProducts = [
		{ productId: 1, imgUrl: "https://source.unsplash.com/random" },
		{ productId: 2, imgUrl: "https://source.unsplash.com/random" },
		{ productId: 3, imgUrl: "https://source.unsplash.com/random" },
		{ productId: 4, imgUrl: "https://source.unsplash.com/random" },
	],
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
	 * @description
	 * - 최근 본 상품 리스트의 이미지를 클릭할 경우, productId를 parma으로 하여 해당하는 상품의 상세 페이지로 이동합니다.
	 */
	const handleProductClick = (productId, e) => {
		// 현재 recentlyProducts를 임의로 넣었기 때문에 상품 목록 페이지 작업 및 테스트 후 삭제될 코드입니다.
		console.log(`상품 ID ${productId} 클릭`);
		e.stopPropagation();
		navigate(`/detail-product/${productId}`);
	};

	const removeRecentlyProductItem = (productId, e) => {
		console.log(`상품 ID ${productId} 삭제`);
		e.stopPropagation();
	};

	return (
		<S.RecentlyProduct>
			{displayedProducts.length > 0 ? (
				displayedProducts.map((product) => (
					<S.RecentlyProductItem
						key={product.productId}
						onClick={(e) =>
							handleProductClick(product.productId, e)
						}
					>
						<S.RecentlyProductItemImg
							src={product.imgUrl}
							alt="상품 이미지"
						/>
						{/* close icon 클릭 시 해당 productId의 상품이 최근 본 상품 목록에서 제거 */}
						<S.CloseIcon
							onClick={(e) =>
								removeRecentlyProductItem(product.productId, e)
							}
						>
							<ResponsiveIcon
								icon={BsX}
								size={FONT_SIZE.lg}
								color={COLOR.COMMON[600]}
							/>
						</S.CloseIcon>
					</S.RecentlyProductItem>
				))
			) : (
				<S.Content>최근 본 상품이 없습니다.</S.Content>
			)}
		</S.RecentlyProduct>
	);
};
export default RecentProduct;

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
const RecentlyProductItemImg = styled.img`
	width: 8rem;
	height: 8rem;
	cursor: pointer;
`;
const CloseIcon = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	opacity: 0;
	/* transition: opacity 0.3s ease; */
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
`;
const S = {
	Content,
	CloseIcon,
	RecentlyProduct,
	RecentlyProductItem,
	RecentlyProductItemImg,
};
