import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import { ResponsiveIcon } from ".";
/**
 * @component
 * @parameter icon : IconType - 아이콘 컴포넌트 (react-icons)
 * @parameter text : string - 어떤 정보가 들어갈지 string으로 작성.
 * @parameter amount : number - 서버에서 받아온 data중 해당 수량
 * @parameter unit : string - amount의 단위 (단위가 없다면 입력x)
 * @parameter iconColor : string - icon의 색상 token색상중 lightColor 사용할 것
 * @parameter amountColor : string - amount의 색상 token색상중 lightColor 사용할 것
 * @parameter callbackFunc : function - IconAndText component click시 이동될 페이지가 담긴 함수전달.
 * @returns {JSX.Element}
 *
 * @description
 * - detailPage, myPage에서 사용될 공용컴포넌트 입니다.
 * - 판매자의 정보를 보여주기 위하여 icon, text, amount, color을 입력받아 사용합니다.
 * - 해당 컴포넌트를 click하면 각내용에 맞는 페이지로 이동이 가능합니다.
 * - 해당 컴포넌트의 배경색에는 weight가 사용될 예정이니 textColor는 pallate.light색상으로 사용해주셔야합니다.
 */
const IconAndText = ({
	icon,
	text,
	amount = "",
	unit = "",
	iconColor = `${COLOR.COMMON[1000]}`,
	amountColor,
	callbackFunc = () => {},
	...rest
}) => {
	return (
		<S.IconTextWrapper {...rest} onClick={callbackFunc()}>
			<ResponsiveIcon color={iconColor} icon={icon} size="9rem" />
			<S.IconText>{text}</S.IconText>
			<S.Amount $amountColor={amountColor}>
				{amount + " " + unit}
			</S.Amount>
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
	&:hover {
		cursor: pointer;
	}
`;
const IconText = styled.h3`
	color: ${COLOR.COMMON[1000]};
	padding-top: ${FONT_SIZE.md};
	padding-bottom: 3px;
`;
const Amount = styled.p`
	color: ${({ $amountColor }) => {
		return $amountColor;
	}};
`;

const S = {
	IconTextWrapper,
	IconText,
	Amount,
};
