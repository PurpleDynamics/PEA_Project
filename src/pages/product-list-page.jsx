import { Banner } from "../components/commons";
import { EightProductGrid, PromotionBanner } from "../components/product-list";

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
	const userData = {
		location: "역삼동",
	};

	// 임시 product data
	const productData = [
		{
			title: "물건1",
			location: "역삼동",
			salesCategory: "중고",
		},
		{
			title: "물건2",
			location: "독산동",
			salesCategory: "새상품",
		},
		{
			title: "물건3",
			location: "역삼동",
			salesCategory: "새상품",
		},
		{
			title: "물건4",
			location: "독산동",
			salesCategory: "중고",
		},
		{
			title: "물건1",
			location: "역삼동",
			salesCategory: "중고",
		},
		{
			title: "물건2",
			location: "독산동",
			salesCategory: "새상품",
		},
		{
			title: "물건3",
			location: "역삼동",
			salesCategory: "새상품",
		},
		{
			title: "물건4",
			location: "독산동",
			salesCategory: "중고",
		},
		{
			title: "물건1",
			location: "역삼동",
			salesCategory: "중고",
		},
		{
			title: "물건2",
			location: "독산동",
			salesCategory: "새상품",
		},
		{
			title: "물건3",
			location: "역삼동",
			salesCategory: "새상품",
		},
		{
			title: "물건4",
			location: "독산동",
			salesCategory: "중고",
		},
		{
			title: "물건1",
			location: "역삼동",
			salesCategory: "중고",
		},
		{
			title: "물건2",
			location: "독산동",
			salesCategory: "새상품",
		},
		{
			title: "물건3",
			location: "역삼동",
			salesCategory: "새상품",
		},
		{
			title: "물건4",
			location: "역삼동",
			salesCategory: "중고",
		},
	];

	const usedData = productData
		.filter(
			(el) =>
				el.salesCategory === "중고" && el.location === userData.location
		)
		.slice(0, 8);

	const freeData = productData
		.filter(
			(el) =>
				el.salesCategory !== "중고" && el.location === userData.location
		)
		.slice(0, 8);

	return (
		<>
			<PromotionBanner />
			<EightProductGrid
				userData={userData}
				eightProductData={usedData}
				salesCategory={"중고거래"}
			/>
			<Banner />
			<EightProductGrid
				userData={userData}
				eightProductData={freeData}
				salesCategory={"무료나눔"}
			/>
		</>
	);
};
export default ProductListPage;
