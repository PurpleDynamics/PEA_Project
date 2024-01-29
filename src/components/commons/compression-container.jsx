import styled from "styled-components";

const ComressoionContainer = ({ lr = "0rem", tb = "0rem", children }) => {
	return (
		<>
			<S.Wrapper $tb={tb} $lr={lr}>
				{children}
			</S.Wrapper>
		</>
	);
};
export default ComressoionContainer;

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
