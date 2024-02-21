import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
import { CompressionWrapper } from "./";

/**
 * @component
 * @parameter bgColor : JSX.Element - 배경 색상 (기본값: COLOR.COMMON[1000])
 * @parameter children : JSX.Element - 내부에 들어갈 jsx 요소
 * @returns {JSX.Element}
 *
 * @description
 * - 전체 스크린 크기가 아무리 크더라도, 내부 컨텐츠 요소의 최대 너비는 115.2rem 을 유지하도록 합니다.
 * - 배경색(bgColor) 을 지정할 경우, 전체 스크린 너비만큼의 영역이 지정된 색으로 채워집니다.
 */
const CenterBox = ({ bgColor = COLOR.COMMON[1000], children, ...rest }) => {
	return (
		<S.ColoredContainer $bgColor={bgColor}>
			<S.FixedWidthWrapper {...rest}>
				<CompressionWrapper lr="1rem" tb="1rem">
					{children}
				</CompressionWrapper>
			</S.FixedWidthWrapper>
		</S.ColoredContainer>
	);
};

export default CenterBox;

const ColoredContainer = styled.div`
	width: 100%;
	height: fit-content;
	background-color: ${({ $bgColor }) => $bgColor};
	display: flex;
	justify-content: center;
`;
const FixedWidthWrapper = styled.div`
	width: 115.2rem;
	height: fit-content;
`;
const S = {
	ColoredContainer,
	FixedWidthWrapper,
};
