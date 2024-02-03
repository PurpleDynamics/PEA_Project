import React from "react";

/**
 *
 * @component
 * @parameter size : number - 크기 값 지정
 * @parameter axis : string - spacer의 축(방향) 지정 ["vertical" 또는 "horizontal"]
 * @parameter style = {} : object : 추가적인 스타일 객체
 * @returns {JSX.Element}
 *
 * @description
 * - props로 전달받은 size와 axis에 따라 빈 공간을 생성하는 컴포넌트 입니다.
 * - axis를 전달하지 않을 경우, size * size (단위: px)의 정사각형을 생성합니다.
 * - axis가 "vertical"인 경우, props로 전달받은 size 만큼 세로 높이의 빈 공간을 생성합니다. (1px * size(px))
 * - axis가 "horizontal"인 경우, props로 전달받은 size 만큼 가로 너비의 빈 공간을 생성합니다. (size(px) * 1px)
 */

const Spacer = ({ size, axis, style = {}, ...rest }) => {
	const width = axis === "vertical" ? 1 : size;
	const height = axis === "horizontal" ? 1 : size;
	return (
		<span
			style={{
				display: "block",
				width,
				minWidth: width,
				height,
				minHeight: height,
				...style,
			}}
			{...rest}
		/>
	);
};
export default Spacer;
