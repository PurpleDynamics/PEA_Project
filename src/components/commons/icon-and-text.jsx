import styled from "styled-components";

import { ResponsiveIcon, Spacer } from ".";
/**
 * @component
 * @parameter icon : IconType - icon 컴포넌트 (react-icons)
 * @parameter iconColor : string - icon의 색상
 * @parameter text : string - icon 아래 작성될 text.
 * @parameter textColor : string - text 색상.
 * @parameter size : number - icon의 크기는 {size}+"rem" , text의 크기는 {size}/4+"rem" 비율로 유지
 * @parameter gap : number - icon과 text사이간격
 * @returns {JSX.Element}
 *
 * @description
 * - icon 과 text를 같이 사용해야 할 때 사용될 컴포넌트입니다.
 * - size는 icon : text = 4 : 1 비율을 유지하도록 합니다.
 * - 해당 컴포넌트를 click하면 각내용에 맞는 페이지로 이동이 가능합니다.
 */
const IconAndText = ({
	icon,
	iconColor,
	text,
	textColor,
	size = 9,
	gap,
	...rest
}) => {
	return (
		<S.IconTextWrapper {...rest}>
			<ResponsiveIcon color={iconColor} icon={icon} size={size + "rem"} />
			<Spacer height={gap} />
			<S.IconText $textColor={textColor} $size={size}>
				{text}
			</S.IconText>
		</S.IconTextWrapper>
	);
};
export default IconAndText;

const IconTextWrapper = styled.div`
	width: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;
const IconText = styled.span`
	color: ${({ $textColor }) => $textColor};
	font-size: ${({ $size }) => $size / 4 + "rem"};
`;

const S = {
	IconTextWrapper,
	IconText,
};
