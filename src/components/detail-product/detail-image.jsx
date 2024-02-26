import styled, { css } from "styled-components";

import { COLOR } from "../../libs/styled-components";

/**
 * @component
 * @parameter findProduct : object<특정된 상품데이터> - detail-product-page 에서 Params로id를 특정해 받아옴
 * @parameter 제품의 이미지를 mainImage랑 imageList를 보여주는 컴포넌트 입니다
 * @returns {JSX.Element}
 *
 * @description
 * - DetailProduct속 컴포넌트입니다.
 * - 판매 물품 정보 및 판매자와 채팅하는 부분을 담는 컴포넌트입니다
 */
const DetailImages = ({ findProduct }) => {
	const imageData = findProduct.imageSrcList;

	return (
		<S.ProductImageWrapper>
			<S.ProductImageListContainer>
				{imageData.map((image, index) => (
					<S.ProductImage key={index} src={image}></S.ProductImage>
				))}
			</S.ProductImageListContainer>
			<S.MainImageContainer>
				<S.ProductMainImage
					src={imageData[imageIndex]}
				></S.ProductMainImage>
				<S.IndexButtonContainer>
					<S.PrevButton>＜</S.PrevButton>
					<S.NextButton>＞</S.NextButton>
				</S.IndexButtonContainer>
			</S.MainImageContainer>
		</S.ProductImageWrapper>
	);
};
export default DetailImages;

const ProductImageWrapper = styled.div`
	width: 63rem;
	height: 75rem;
	display: flex;
	flex-direction: column;
	gap: 1.3rem;
	padding: 1.7rem 1rem;
`;
const ProductImageListContainer = styled.div`
	width: 60rem;
	height: 10rem;
	background-color: ${COLOR.COMMON[900]};
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 4.3rem;
	gap: 1.3rem;
	border-radius: 1.1rem;
`;
const ProductImage = styled.img`
	width: 9.2rem;
	height: 9.2rem;
`;
const IndexButtonContainer = styled.div`
	position: absolute;
	width: 12rem;
	height: 5.5rem;

	z-index: 10;
	bottom: 3rem;
	right: 2.5rem;
	display: flex;
	padding: 0 0.3rem;
	gap: 0.4rem;
`;
const MainImageContainer = styled.div`
	width: 60.1rem;
	height: 60.1rem;
	background-color: ${COLOR.COMMON[900]};
	border-radius: 1.1rem;
	overflow: hidden;
	position: relative;
`;
const ProductMainImage = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 1.1rem;
`;
const buttonStyle = css`
	width: 100%;
	height: 100%;
	background-color: ${COLOR.COMMON[800]};
	border-radius: 50rem;
	justify-content: center;
	align-items: center;
	font-size: 3rem;
	cursor: pointer;
`;
const PrevButton = styled.button`
	${buttonStyle}
`;
const NextButton = styled.button`
	${buttonStyle}
`;
const S = {
	ProductImageWrapper,
	ProductImageListContainer,
	ProductImage,
	MainImageContainer,
	ProductMainImage,
	IndexButtonContainer,
	PrevButton,
	NextButton,
};
