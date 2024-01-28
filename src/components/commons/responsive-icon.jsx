import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";

/**
 * @component
 * @parameter icon : IconType - import한 icon컴포넌트.
 * @parameter size : number - icon의 크기 FONT_SIZE에서 원하는 값을 사용.
 * @parameter color : number - icon의 색상 COlOR에서 사용.
 * @returns {JSX.Element}
 *
 * @description
 * - 외부에서 주입받은 아이콘 콤포넌트에, 호버 시 scale 확대 효과를 적용합니다.
 *
 * @example
 * <ResponsiveIcon icon={BsCollectionFill}/>
 * <ResponsiveIcon icon={BsCollectionFill} size={FONT_SIZE.md}/>
 * <ResponsiveIcon icon={BsCollectionFill} color={COLOR.PALETTE.light}/>
 */
const ResponsiveIcon = ({
	icon: IconData,
	size = FONT_SIZE.lg,
	color = COLOR.COMMON[0],
	...rest
}) => {
	return (
		<S.IconContainer {...rest}>
			<IconData size={size} color={color} />
		</S.IconContainer>
	);
};

export default ResponsiveIcon;

const IconContainer = styled.div`
	width: fit-content;
	height: fit-content;

	display: flex;
	align-items: center;
	justify-content: center;

	transition: scale 0.2s;
	&:hover {
		scale: 1.2;
		cursor: pointer;
	}
`;

const S = { IconContainer };
