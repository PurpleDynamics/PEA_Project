import { useParams } from "react-router-dom";
import styled from "styled-components";

import { CompressionWrapper } from "../components/commons";
import { DetailProduct } from "../components/detail-product";
import productList from "../libs/msw/database/products.json";
import { COLOR } from "../libs/styled-components/reference-tokens/color";

const DetailProductPage = () => {
	const { productId } = useParams();
	const findProduct = productList.products.find(
		(product) => product.id === productId.toString()
	);
	// const poductImages = async () => {
	//    const response = await axios.get("음흠");
	//    setImageData(response.data);
	//    setImageIndex(0);
	// };

	//분리
	//판매물품 -- product.id필요?
	//배너 --product.sellerid필요
	//그래프 -- product.taglist
	//태그관련상품--product.taglist 태그 정보 필요
	//배열을 측정해서 배열에 맞게 버튼을 클릭하게 할려면 imagedata에서의 index를 뽑아와야한다

	//판매자 정보
	//배너
	//그래프
	//태그관련상품
	return (
		<CompressionWrapper lr="10%">
			<S.Wrapper>
				<DetailProduct findProduct={findProduct} />
				{/* <S.SellerBanner>
				<h2>판매자 님에 대한 요약정보입니다.</h2>
				<S.BannerButtonContainer>
					<S.SellerMannerTemperature></S.SellerMannerTemperature>
					<S.SellerProductManagement></S.SellerProductManagement>
					<S.SimilarTaggedProducts></S.SimilarTaggedProducts>
					<S.SellerChatResponse></S.SellerChatResponse>
				</S.BannerButtonContainer> */}
				{/* pd-72 merge되면 import 하기 */}
				{/*</S.SellerBanner>
			 <S.TagPriceTrends></S.TagPriceTrends>
			<S.TagProductListContainer>
				<S.TagProductList>
					<S.TagListText>
						<h2>같은 카태고리 상품</h2>
						<h3>총건</h3>
					</S.TagListText> */}
				{/* pd-47번 import */}
				{/* </S.TagProductList>
				<Button icon={AiFillAlert} width="19.3rem" height="6.2rem">
					더 보러 가기
				</Button>
			</S.TagProductListContainer> */}
			</S.Wrapper>
		</CompressionWrapper>
	);
};
export default DetailProductPage;

const Wrapper = styled.div`
	width: 100%;
`;

const SellerBanner = styled.div`
	width: 100%;
	height: 33.9rem;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${COLOR.COMMON[1000]};
	background-color: ${COLOR.PALETTE.cyan.weight};
`;
const BannerButtonContainer = styled.div``;
const SellerMannerTemperature = styled.button``;
const SellerProductManagement = styled.button``;
const SimilarTaggedProducts = styled.button``;
const SellerChatResponse = styled.button``;
const TagPriceTrends = styled.div``;
const TagProductListContainer = styled.div`
	display: grid;
	align-items: center;
	justify-content: center;
`;
const TagProductList = styled.div``;
const TagListText = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const S = {
	Wrapper,

	SellerBanner,
	BannerButtonContainer,
	SellerMannerTemperature,
	SellerProductManagement,
	SimilarTaggedProducts,
	SellerChatResponse,
	TagPriceTrends,
	TagProductListContainer,
	TagProductList,
	TagListText,
};
