import { useState } from "react";
import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import { pickPaletteOneByText } from "../../utils/auto-color-manager";

/**
 * @component
 * @parameter callbackFunc : voidFunction - 토글 (활성화/비활성화) 시, 실행로직
 * @parameter initActiveState : boolean - 활성화 초기 상태
 * @parameter fontSize : string - 폰트 크기
 * @parameter children : string - 카테고리 이름 (문자열 데이터 전달바랍니다.)
 * @returns {JSX.Element}
 *
 * @description
 * - 호버/클릭 시, 색상이 변경 및 추가적인 로직을 수행하는 토글입니다.
 * - 전달된 "categoryName" 에 의해, 호버/클릭 시 색상이 결정됩니다.
 * - "callbackFunc" 는/은 반환형이 없는 함수를 전달하셔야 합니다.
 * - 토글이 활성화 되어있는지에 대한 상태를 자체적으로 관리합니다.
 * - children 이 string 타입으로 전달되지 않을 경우, "no_string" 문자열이 카테고리 이름으로 출력됩니다.
 *
 * @example
 * <CategoryToggle> 카테고리 이름 </CategoryToggle>
 */
const CategoryToggle = ({
	callbackFunc = () => {},
	initActiveState = false,
	fontSize = FONT_SIZE.md,
	children = "no_string",
	...rest
}) => {
	const [isActive, setIsActive] = useState(initActiveState);

	// children 이 string 타입으로 전달되지 않을 경우, "no_string" 문자열이 카테고리 이름으로 출력됩니다.
	if (typeof children != "string") children = "no_string";
	children = children.trim();

	// COLOR.PALETTE 속성('magenta','cyan' 등) 중 하나의 {'base','light','weight'} 객체가 할당됩니다.
	const palette = pickPaletteOneByText({ text: children });

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
			$fontSize={fontSize}
			{...rest}
		>
			{children}
		</S.ToggleWrapper>
	);
};

export default CategoryToggle;

const ToggleWrapper = styled.div`
	width: fit-content;
	height: fit-content;
	min-width: 4.2rem;
	min-height: 2.4rem;
	padding: 0.1rem 0.5rem;

	display: inline-block;

	border: 0.2rem solid ${COLOR.COMMON[0]};
	border-radius: 100rem;

	font-size: ${({ $fontSize }) => {
		return $fontSize;
	}};

	text-align: center;

	background-color: ${({ $bgColor }) => {
		return $bgColor;
	}};
	color: ${({ $color }) => {
		return $color;
	}};

	transition: background-color 100ms;

	&:hover {
		cursor: pointer;
		background-color: ${({ $palette }) => {
			return $palette.weight;
		}};
		color: ${({ $palette }) => {
			return $palette.light;
		}};
	}
`;

const S = { ToggleWrapper };
