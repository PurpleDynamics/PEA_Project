import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
import SkeletonBase from ".";

/**
 * @component
 * @returns {JSX.Element}
 *
 * @description product card의 skeleton ui입니다.
 */

const SkeletonProductCard = () => {
	return (
		<S.SkeletonWrapper>
			<SkeletonBase $width="21rem" $height="21rem" />
			<SkeletonBase $width="21rem" $height="3rem" />
			<SkeletonBase $width="21rem" $height="3rem" />
			<SkeletonBase $width="21rem" $height="3rem" />
		</S.SkeletonWrapper>
	);
};
export default SkeletonProductCard;

const SkeletonWrapper = styled.div`
	width: 21rem;
	height: 35.8rem;
	display: grid;
	grid-template-rows: 21.5rem 1fr 1.2fr 1fr;
	grid-row-gap: 0.1rem;
	border: 0.1rem solid ${COLOR.COMMON[800]};
	border-radius: 1.1rem;
	overflow: hidden;
`;

const S = {
	SkeletonWrapper,
};
