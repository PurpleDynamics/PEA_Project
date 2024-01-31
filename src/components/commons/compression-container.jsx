import styled from "styled-components";

/**
 * @components
 * @parameter children : 내부에 들어갈 dom요소
 * @returns {JSX.Element}
 *
 * @description
 * - tb => top-bottom
 * - lr => left-right 입니다.
 */

const CompressoionContainer = ({ lr = "0rem", tb = "0rem", children }) => {
	return (
		<>
			<S.Wrapper $tb={tb} $lr={lr}>
				{children}
			</S.Wrapper>
		</>
	);
};
export default CompressoionContainer;

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
