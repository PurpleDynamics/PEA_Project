import {
	GraphSection,
	InforMationSection,
	ManageProductsSection,
	ProductListSection,
} from "../components/my-info";

/**
 * @component
 * @returns {JSX.Element}
 * @description
 * - 사용자의 정보를 보여주는 페이지 컴포넌트 입니다.
 * - 사용자의 개인정보, 최근거래 금액&chart, 상품관련 정보, 상품을 보여주는 card로 구성되어있습니다.
 */
const MyInfoPage = () => {
	return (
		<>
			<InforMationSection infoData={infoData} mypageData={mypageData} />
			<GraphSection priceData={priceData} />
			<ManageProductsSection mypageData={mypageData} />
			<ProductListSection
				mypageProdcutListArray={mypageProdcutListArray}
			/>
		</>
	);
};
export default MyInfoPage;
