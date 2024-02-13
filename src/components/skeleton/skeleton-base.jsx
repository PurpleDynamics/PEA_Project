import styled, { keyframes } from "styled-components";

import { COLOR } from "../../libs/styled-components";

/**
 * @component
 * @parameter width : string - 넓이를 입력 받습니다.
 * @parameter height : string - 높이를 입력 받습니다.
 * @parameter borderRadius : string - border-radius값을 입력 받습니다.
 * @returns {JSX.Element}
 *
 * @description
 * - skeleton ui component 입니다.
 * - ex)
 * - <div>
 * - 	<SkeletonBase $width="1rem" $height="1rem" $borderRadius="1rem" />
 * - </div>
 * - 이런식으로 사용하시면 됩니다.
 */

const SkeletonBase = ({ width, height, borderRadius }) => {
	return (
		<S.Skeleton
			$width={width}
			$height={height}
			$borderRadius={borderRadius}
		/>
	);
};
export default SkeletonBase;

const loadingAnimation = keyframes`
    0% {
        transform: translateX(-100%)
    }
    100%{
        transform: translateX(100%)
    }
`;

const Skeleton = styled.div`
	background-color: ${COLOR.COMMON[800]};
	border-radius: ${({ $borderRadius }) => $borderRadius};
	overflow: hidden;
	position: relative;
	width: ${({ $width }) => $width};
	height: ${({ $height }) => $height};

	&::after {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		background: linear-gradient(
			90deg,
			transparent,
			${COLOR.COMMON[1000]},
			transparent
		);
		animation: ${loadingAnimation} 1.5s infinite linear;
	}
`;

const S = {
	Skeleton,
};
