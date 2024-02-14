import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";

/**
 * @component
 * @parameter color : string - 강조되는 텍스트의 색상
 * @parameter fontSize: string - 폰트 크기
 * @parameter children : string - 강조해야할 문자열 (문자열 데이터 전달바랍니다.)
 * @returns {JSX.Element}
 *
 * @description 전달되는 문자열의 색상을 변형시켜 강조효과를 줍니다.
 */
const HighlightedText = ({
	color = COLOR.MAIN.base,
	fontSize = FONT_SIZE.md,
	children,
	...rest
}) => {
	// children 이 string 타입으로 전달되지 않을 경우, 빈 문자열로 대체합니다.
	if (typeof children != "string") children = "";
	children = children.trim();

	return (
		<S.ColoredText $color={color} $fontSize={fontSize} {...rest}>
			{children}
		</S.ColoredText>
	);
};

export default HighlightedText;

const ColoredText = styled.mark`
	color: ${({ $color }) => $color};
	background-color: transparent;
	font-size: ${({ $fontSize }) => $fontSize};
`;

const S = { ColoredText };
