import { Banner } from "../components/commons";
import { EightProductGrid, PromotionBanner } from "../components/main";

/**
 * @returns {JSX.Element}
 * @description
 * - product-list-page 입니다.
 * - 로그인 시 제일 먼저 보여지는 페이지입니다.
 */

const ProductListPage = () => {
	// 임시 user data
	const user = {
		location: "역삼동",
	};

	// 임시 product data
	const data = [
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

	const usedData = data
		.filter(
			(el) => el.salesCategory === "중고" && el.location === user.location
		)
		.slice(0, 8);

	const freeData = data
		.filter(
			(el) => el.salesCategory !== "중고" && el.location === user.location
		)
		.slice(0, 8);

	return (
		<>
			<PromotionBanner />
			<EightProductGrid
				userData={user}
				eightProductData={usedData}
				salesCategory={"중고거래"}
			></EightProductGrid>
			<Banner />
			<EightProductGrid
				userData={user}
				eightProductData={freeData}
				salesCategory={"무료나눔"}
			></EightProductGrid>
		</>
	);
};
export default ProductListPage;
