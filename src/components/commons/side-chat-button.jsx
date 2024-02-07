import { BsChatDots } from "react-icons/bs";
import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
import { ResponsiveIcon } from ".";

/**
 * @component
 * @returns {JSX.Element}
 *
 * @description 채팅 버튼을 랜더링하는 컴포넌트 입니다.
 */
const SideChatButton = () => {
	/**
	 * @function
	 *
	 * @description 채팅 버튼 클릭 시 호출되는 핸들러 함수입니다
	 */
	const handleChattingPage = () => {};
	return (
		<S.IconContainer onClick={handleChattingPage}>
			<ResponsiveIcon
				icon={BsChatDots}
				color={COLOR.PALETTE.cyan.base}
				size={48}
			/>
		</S.IconContainer>
	);
};

export default SideChatButton;

const IconContainer = styled.div`
	position: fixed;
	top: 73vh;
	right: 6.5vw;
`;

const S = {
	IconContainer,
};
