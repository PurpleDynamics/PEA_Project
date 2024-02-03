import { BsChatDots } from "react-icons/bs";
import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import ResponsiveIcon from "./responsive-icon";

/**
 * @component
 * @returns {JSX.Element}
 *
 * @description
 * - 채팅 버튼을 랜더링하는 컴포넌트 입니다.
 */
const SideChatBtn = () => {
	/**
	 * @function
	 *
	 * @description
	 * - 채팅 버튼 클릭 시 호출되는 핸들러 함수입니다
	 */
	const handleChattingPage = () => {
		console.log("채팅 버튼 클릭");
	};
	return (
		<S.Icon onClick={handleChattingPage}>
			<ResponsiveIcon
				icon={BsChatDots}
				size={FONT_SIZE.xll}
				color={COLOR.PALETTE.cyan.base}
			/>
		</S.Icon>
	);
};

export default SideChatBtn;

const Icon = styled.div`
	position: fixed;
	top: 73vh;
	right: 6.5vw;
`;

const S = {
	Icon,
};
