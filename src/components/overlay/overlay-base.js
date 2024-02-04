import React from "react";
import styled, { css } from "styled-components";

import { COLOR } from "../../libs/styled-components/index";

/**
 * @component
 * @parameter position : "topLeft" | "topCenter" | "topLeft" | "midLeft" | "midCenter" | "midRight" | "bottomLeft" | "bottomCenter" | "bottomRight" - 오버레이 컴포넌트 위치
 * @parameter isFiltered : boolean - 뒷 배경을 어둡게 할 필터를 적용할지 여부
 * @parameter children : JSX.Element - 오버레이 컴포넌트
 * @returns {JSX.Element}
 *
 * @description
 * - 전달된 컴포넌트가 다른 컴포넌트 보다 전면에 위치하도록 합니다. (z-index)
 * - `position` props 를 통해 오버레이 컴포넌트의 위치를 조절할 수 있습니다. (기본값: midCenter)
 */

const OverlayBase = ({
	position = "midCenter",
	isFiltered = false,
	children,
}) => {
	return (
		<>
			{isFiltered && <S.BackgroundFilter />}
			<S.OverlayContainer $positionCSS={position}>
				{children}
			</S.OverlayContainer>
		</>
	);
};

export default OverlayBase;

const PositionCSS = {
	/** 좌측 상단 */
	topLeft: css`
		justify-content: start;
		align-items: start;
	`,
	/** 중앙 상단 */
	topCenter: css`
		justify-content: center;
		align-items: start;
	`,
	/** 우측 상단 */
	topRight: css`
		justify-content: end;
		align-items: start;
	`,
	/** 좌측 중앙 */
	midLeft: css`
		justify-content: start;
		align-items: center;
	`,
	/** 정중앙 */
	midCenter: css`
		justify-content: center;
		align-items: center;
	`,
	/** 우측 중앙 */
	midRight: css`
		justify-content: end;
		align-items: center;
	`,
	/** 좌측 하단 */
	bottomLeft: css`
		justify-content: start;
		align-items: end;
	`,
	/** 중앙 하단 */
	bottomCenter: css`
		justify-content: center;
		align-items: end;
	`,
	/** 중앙 하단 */
	bottomRight: css`
		justify-content: end;
		align-items: end;
	`,
};

const OverlayContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10000;

	width: 100%;
	height: 100vh;
	padding: 1rem;

	display: flex;
	${({ $positionCSS }) => {
		return PositionCSS[$positionCSS];
	}}
`;

const BackgroundFilter = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;

	width: 100%;
	height: 100vh;

	background-color: ${COLOR.COMMON[0]};
	opacity: 0.6;
`;

const S = {
	OverlayContainer,
	BackgroundFilter,
};