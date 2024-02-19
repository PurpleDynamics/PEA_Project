import { useParams } from "react-router-dom";
import styled from "styled-components";

import { CompressionWrapper } from "../components/commons";
import { DetailProduct } from "../components/detail-product";
import productList from "../libs/msw/database/products.json";

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
		<CompressionWrapper lr="15%">
			<S.Wrapper>
				<DetailProduct findProduct={findProduct} />
			</S.Wrapper>
		</CompressionWrapper>
	);
};
export default DetailProductPage;

const Wrapper = styled.div`
	width: 100%;
`;

const S = {
	Wrapper,
};
