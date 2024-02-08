import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";

/**
 * @component
 * @returns {JSX.Element}
 *
 * @description 페이지의 맨 위로 스크롤 하는 버튼입니다.
 */

const TopButton = () => {
	const ScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return <S.Button onClick={ScrollToTop}>TOP</S.Button>;
};
export default TopButton;

const Button = styled.button`
	font-size: ${FONT_SIZE.sm};
	text-align: center;
	margin-top: 1rem;
	background-color: ${COLOR.COMMON[1000]};
	cursor: pointer;
	&:hover {
		color: ${COLOR.PALETTE.cyan.base};
	}
`;

const S = { Button };
