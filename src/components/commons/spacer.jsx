import React from "react";
import styled from "styled-components";

/**
 *
 * @component
 * @parameter width : number - 가로 너비 지정 (단위: rem)
 * @parameter height : number - 세로 높이 지정 (단위: rem)
 * @parameter rest : any
 * @returns {JSX.Element}
 *
 * @description props로 전달받은 width, height에 따라 빈 공간을 생성하는 컴포넌트 입니다.
 */

const Spacer = ({ width, height, ...rest }) => {
	return <S.SpacerContainer width={width} height={height} {...rest} />;
};
export default Spacer;

const SpacerContainer = styled.span`
	display: block;
	width: ${({ width }) => width}rem;
	height: ${({ height }) => height}rem;
	min-width: ${({ width }) => width}rem;
	min-height: ${({ height }) => height}rem;
`;

const S = {
	SpacerContainer,
};
