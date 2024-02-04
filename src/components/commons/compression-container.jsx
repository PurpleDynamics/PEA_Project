import styled from "styled-components";

/**
 * @component
 * @parameter children : JSX.Element - 내부에 들어갈 dom요소
 * @parameter tb : string - top, bottom 의 padding 값
 * @parameter lr : string - left, right 의 padding 값
 * @returns {JSX.Element}
 *
 * @description
 * - tb => top-bottom
 * - lr => left-right 입니다.
 */

const CompressionContainer = ({ lr = "20rem", tb = "20rem", children }) => {
	return (
		<S.Wrapper $tb={tb} $lr={lr}>
			{children}
		</S.Wrapper>
	);
};
export default CompressionContainer;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: ${({ $tb, $lr }) => {
		return `${$tb} ${$lr}`;
	}};
`;

const S = {
	Wrapper,
};
