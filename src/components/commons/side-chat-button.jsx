import { BsChatDots } from "react-icons/bs";
import { io } from "socket.io-client";
import styled from "styled-components";

import { useOverlay } from "../../hooks/use-overlay";
import { getChattingToken } from "../../libs/axios/auth";
import { COLOR } from "../../libs/styled-components";
import { ChattingOverlay } from "../overlay/chatting";
import { ResponsiveIcon } from ".";

const socket = io(process.env.REACT_APP_PEA_CHAT_URL);

/**
 * @component
 * @returns {JSX.Element}
 *
 * @description 채팅 버튼을 랜더링하는 컴포넌트 입니다.
 */
const SideChatButton = () => {
	const { onOpenOverlay } = useOverlay();

	const userChatToken = getChattingToken();

	/**
	 * @function
	 *
	 * @description 채팅 버튼 클릭 시 호출되는 핸들러 함수입니다
	 */
	const handleChattingPage = () => {
		socket.emit("connect-user", {
			socket: userChatToken,
		});
		onOpenOverlay({
			overlayComponent: ChattingOverlay,
			position: "bottomRight",
			isFiltered: false,
		});
	};

	return (
		<>
			<S.IconContainer onClick={handleChattingPage}>
				<ResponsiveIcon
					icon={BsChatDots}
					color={COLOR.PALETTE.cyan.base}
					size={40}
				/>
			</S.IconContainer>
		</>
	);
};

export default SideChatButton;

const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 1rem;
`;

const S = {
	IconContainer,
};
