import { useState } from "react";
import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../../libs/styled-components";
import { SearchBar } from "../../commons";
import { ChatRoom } from ".";

/**
 * @component
 * @parameter onCloses: function - x 를 눌렀을 때 overlay를 닫아주는 함수입니다.
 * @returns {JSX.Element}
 *
 * @description 채팅을 클릭했을 때 제일 먼저 나오는 페이지 입니다.
 */

const ChatRoomList = ({ onClose }) => {
	const [chatRoomList, setChatRoomList] = useState([
		{
			nickname: "김진솔",
			createdAt: "20:26",
			lastMessage: "아 너무 졸립고~",
		},
	]);

	return (
		<S.ChatWrapper>
			<S.ChatTitleBox>
				<S.ChatTitleImage src="https://url.kr/fm7ls1" />
				<S.ChatTitleWrapper>
					<S.ChatTitleText>P.E.A Chat</S.ChatTitleText>
					<S.X_Button onClick={onClose}>x</S.X_Button>
				</S.ChatTitleWrapper>
			</S.ChatTitleBox>

			<S.SearchContainer>
				<SearchBar
					width="30rem"
					paddingLeft="2.5rem"
					placeHolder="판매자명 또는 상품명을 입력해주세요"
				/>
			</S.SearchContainer>
			<ChatRoom data={chatRoomList} />
		</S.ChatWrapper>
	);
};
export default ChatRoomList;

const ChatWrapper = styled.div`
	width: 35rem;
	height: 40rem;
	border-radius: 0.6rem;
	box-shadow: 0.1rem 0.2rem 0.4rem 0.1rem ${COLOR.COMMON[400]};

	background-color: ${COLOR.COMMON[1000]};
`;

const ChatTitleBox = styled.div`
	display: flex;
	justify-content: left;
	align-items: center;
`;

const ChatTitleWrapper = styled.div`
	width: 30rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ChatTitleImage = styled.img`
	width: 4rem;
	padding: 0.5rem;
`;

const ChatTitleText = styled.p`
	font-size: ${FONT_SIZE.md};
`;

const SearchContainer = styled.div`
	padding: 1rem 0;
`;

const X_Button = styled.button`
	width: 3rem;
	height: 3rem;
	background-color: ${COLOR.COMMON[1000]};
	&:hover {
		cursor: pointer;
	}
`;

const S = {
	ChatWrapper,
	X_Button,
	ChatTitleBox,
	ChatTitleImage,
	ChatTitleText,
	ChatTitleWrapper,
	SearchContainer,
};
