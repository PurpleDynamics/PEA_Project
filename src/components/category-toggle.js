import { useState } from "react";
import styled from "styled-components";

import { COLOR } from "../libs/styled-components/reference-tokens";

/**
 * @param {string} categoryName 카테고리 이름
 * @param {voidFunction} callbackFunc 토글 (활성화/비활성화) 시, 실행로직
 * @param {boolean} initActiveState 카테고리 이름
 * @returns {JSX.Element}
 *
 * @description
 * - 호버/클릭 시, 색상이 변경 및 추가적인 로직을 수행하는 토글입니다.
 * - 전달된 'categoryName' 에 의해, 호버/클릭 시 색상이 결정됩니다.
 * - 'callbackFunc' 는/은 반환형이 없는 함수를 전달하셔야 합니다.
 * - 토글이 활성화 되어있는지에 대한 상태를 자체적으로 관리합니다.
 */
const CategoryToggle = ({
	categoryName = "no_data",
	callbackFunc = () => {},
	initActiveState = false,
}) => {
	const [isActive, setIsActive] = useState(initActiveState);

	const palette = COLOR.PALETTE.cyan;

	const onClickToggle = () => {
		setIsActive((prev) => {
			return !prev;
		});
		callbackFunc();
	};

	return (
		<S.ToggleWrapper
			onClick={onClickToggle}
			$palette={palette}
			$bgColor={isActive ? COLOR.COMMON[200] : COLOR.COMMON[1000]}
			$color={isActive ? palette.light : COLOR.COMMON[0]}
		>
			{categoryName}
		</S.ToggleWrapper>
	);
};

export default CategoryToggle;

const ToggleWrapper = styled.div`
	width: fit-content;
	height: fit-content;
	min-width: 4.2rem;
	min-height: 2.4rem;
	padding: 0.5rem 1rem;

	border: 0.2rem solid ${COLOR.COMMON[0]};
	border-radius: 100rem;

	background-color: ${({ $bgColor }) => {
		return $bgColor;
	}};
	color: ${({ $color }) => {
		return $color;
	}};

	transition: background-color 100ms;

	&:hover {
		cursor: pointer;
		background-color: ${({ $palette }) => $palette.weight};
		color: ${({ $palette }) => $palette.light};
	}
`;

const S = { ToggleWrapper };
