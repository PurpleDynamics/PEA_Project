import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";

/**
 * @component
 * @parameter palette : "default" | "magenta" | "orange" | "yellow" | "mint" | "cyan" | "purple" | "magentaUp" | "orangeUp" | "yellowUp" | "mintUp" | "cyanUp" | "purpleUp" - 버튼의 색상 테마
 * @parameter width : string - 버튼 너비
 * @parameter icon : IconType - 아이콘 컴포넌트 (react-icons), (* 아이콘 없이 버튼 사용할 수도 있습니다.)
 * @parameter children : string - 카테고리 이름 (문자열 데이터 전달바랍니다.)
 * @returns {JSX.Element}
 *
 * @description
 * - 호버, 눌림에 대한 효과가 적용된 버튼 컴포넌트 입니다.
 * - 색상 조합이 이미 결정되어 있습니다. 'palette' 이름으로 색상 조합과 관련된 key 값을 입력하면, normal, hover, active 시 색상이 자동으로 지정됩니다.
 * - 버튼에 아이콘이 삽입되어야 한다면, react-icons 라이브러리 통해서 icon 컴포넌트 전달해주시면 됩니다.
 * - 그 외, <button> 태그와 사용법은 동일합니다.
 *
 * @example
 * - <Button>디폴트</Button>
 * - <Button icon={BsArrowUpLeftCircleFill}>아이콘</Button>
 * - <Button palette="orange">오렌지</Button>
 * - <Button palette="orangeUp">오렌지 업!</Button>
 */
const Button = ({
	palette = "default",
	width = "10rem",
	icon: IconData,
	children,
	...rest
}) => {
	// children 이 string 타입으로 전달되지 않을 경우, "no_string" 문자열이 출력됩니다.
	if (typeof children != "string") children = "no_string";
	children = children.trim();

	return (
		<S.ButtonBody $palette={palette} $width={width} {...rest}>
			<TextAndIconContainer>
				{children}
				{IconData && <IconData size={FONT_SIZE.bg} />}
			</TextAndIconContainer>
		</S.ButtonBody>
	);
};

export default Button;

const ButtonBody = styled.button`
	width: ${({ $width }) => {
		return $width;
	}};
	min-width: 10rem;
	height: 5rem;

	padding: 0.5rem 0.5rem 1.2rem 0.5rem;
	border-radius: 1.1rem;
	background-color: ${COLOR.COMMON[200]};

	div {
		background-color: ${({ $palette }) => {
			return buttonTheme[$palette].normalColor;
		}};
	}

	&:hover > div {
		background-color: ${({ $palette }) => {
			return buttonTheme[$palette].hoverColor;
		}};
	}

	&:active {
		padding: 0.5rem;
		height: 4rem;

		transform: translateY(0.5rem);

		div {
			background-color: ${({ $palette }) => {
				return buttonTheme[$palette].activeColor;
			}};
			color: ${COLOR.COMMON[1000]};
		}
	}
`;

const TextAndIconContainer = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 0.8rem;

	display: flex;
	justify-content: space-around;
	align-items: center;

	gap: 0.5rem;

	padding: 0 0.5rem;

	transition: all 0.2s;
`;

// 버튼에 대한 색상 조합
const buttonTheme = {
	default: {
		normalColor: COLOR.COMMON[800],
		hoverColor: COLOR.COMMON[900],
		activeColor: COLOR.COMMON[400],
	},
	magenta: {
		normalColor: COLOR.PALETTE.magenta.base,
		hoverColor: COLOR.PALETTE.magenta.light,
		activeColor: COLOR.PALETTE.magenta.weight,
	},
	magentaUp: {
		normalColor: COLOR.PALETTE.magenta.light,
		hoverColor: COLOR.COMMON[900],
		activeColor: COLOR.COMMON[600],
	},
	orange: {
		normalColor: COLOR.PALETTE.orange.base,
		hoverColor: COLOR.PALETTE.orange.light,
		activeColor: COLOR.PALETTE.orange.weight,
	},
	orangeUp: {
		normalColor: COLOR.PALETTE.orange.light,
		hoverColor: COLOR.COMMON[900],
		activeColor: COLOR.COMMON[600],
	},
	yellow: {
		normalColor: COLOR.PALETTE.yellow.base,
		hoverColor: COLOR.PALETTE.yellow.light,
		activeColor: COLOR.PALETTE.yellow.weight,
	},
	yellowUp: {
		normalColor: COLOR.PALETTE.yellow.light,
		hoverColor: COLOR.COMMON[900],
		activeColor: COLOR.COMMON[600],
	},
	mint: {
		normalColor: COLOR.PALETTE.mint.base,
		hoverColor: COLOR.PALETTE.mint.light,
		activeColor: COLOR.PALETTE.mint.weight,
	},
	mintUp: {
		normalColor: COLOR.PALETTE.mint.light,
		hoverColor: COLOR.COMMON[900],
		activeColor: COLOR.COMMON[600],
	},
	cyan: {
		normalColor: COLOR.PALETTE.cyan.base,
		hoverColor: COLOR.PALETTE.cyan.light,
		activeColor: COLOR.PALETTE.cyan.weight,
	},
	cyanUp: {
		normalColor: COLOR.PALETTE.cyan.light,
		hoverColor: COLOR.COMMON[900],
		activeColor: COLOR.COMMON[600],
	},
	purple: {
		normalColor: COLOR.PALETTE.purple.base,
		hoverColor: COLOR.PALETTE.purple.light,
		activeColor: COLOR.PALETTE.purple.weight,
	},
	purpleUp: {
		normalColor: COLOR.PALETTE.purple.light,
		hoverColor: COLOR.COMMON[900],
		activeColor: COLOR.COMMON[600],
	},
};

const S = { ButtonBody, TextAndIconContainer };
