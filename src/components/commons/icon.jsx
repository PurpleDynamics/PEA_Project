import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";

/**
 * @component
 * @parameter 파라미터명 : 타입 - 파라미터 설명
 * @parameter icon : IconType - import한 icon컴포넌트.
 * @parameter size : number - icon의 크기 FONT_SIZE에서 원하는 값을 사용.
 * @parameter color : number - icon의 색상 COlOR에서 사용.
 * @returns {JSX.Element}
 *
 * @description
 * - 외부에서 아이콘 데이터를 주입받아, scale 확대 효과를 적용합니다.
 *
 * @example
 * <Icon icon={BsCollectionFill}/>
 * <Icon icon={BsCollectionFill} size={FONT_SIZE.md}/>
 * <Icon icon={BsCollectionFill} color={COLOR.PALETTE.light}/>
 */
const Icon = ({
	icon: IconData,
	size = FONT_SIZE.lg,
	color = COLOR.COMMON[0],
}) => {
	return (
		<S.IconContainer>
			<IconData size={size} color={color} />
		</S.IconContainer>
	);
};

export default Icon;

const IconContainer = styled.div`
	width: fit-content;
	height: fit-content;

	display: flex;
	align-items: center;
	justify-content: center;

	transition: scale 0.3s;
	&:hover {
		scale: 1.2;
	}
`;

const S = { IconContainer };
