import styled from "styled-components";

import { CenterBox } from "../components/commons";
import {
	DetailImages,
	DetailInfo,
	SellerBanner,
} from "../components/detail-product";
import {
	TagProductChart,
	TagProducts,
} from "../components/detail-product/tag-product";
import { BREAK_POINT, COLOR } from "../libs/styled-components";

/**
 * @component
 * @returns {JSX.Element}
 *
 * @description
 * - detail-product-page 입니다.
 * - useParams를 통해서 product id를 특정한뒤product를 관리합니다
 */
const DetailProductPage = () => {
	return (
		<S.TagWrapper>
			<CenterBox>
				<S.ProductWrapper>
					<DetailImages findProduct={findProduct} />
					<DetailInfo findProduct={findProduct} />
				</S.ProductWrapper>
			</CenterBox>
			<CenterBox bgColor={COLOR.PALETTE.cyan.weight}>
				<SellerBanner findProduct={findProduct} />
			</CenterBox>
			<CenterBox>
				<TagProductChart findProduct={findProduct} />
				<TagProducts findProduct={findProduct} />
			</CenterBox>
		</S.TagWrapper>
	);
};
export default DetailProductPage;
const TagWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const ProductWrapper = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-between;
	gap: 7rem;
	@media (max-width: ${BREAK_POINT.lg}) {
		display: flex;
		flex-direction: column;

		align-items: center;
	}
`;
const S = {
	TagWrapper,

	ProductWrapper,
};
