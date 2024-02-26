import { BsChatDots } from "react-icons/bs";
import styled from "styled-components";

import { useOverlay } from "../../hooks/use-overlay";
import { COLOR } from "../../libs/styled-components";
import { ChattingOverlay } from "../overlay/chatting";
import { ResponsiveIcon } from ".";

/**
 * @component
 * @returns {JSX.Element}
 *
 * @description 채팅 버튼을 랜더링하는 컴포넌트 입니다.
 */
const SideChatButton = () => {
	const { onOpenOverlay } = useOverlay();

	/**
	 * @function
	 *
	 * @description 채팅 버튼 클릭 시 호출되는 핸들러 함수입니다
	 */

	const handleChattingPage = () => {
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
