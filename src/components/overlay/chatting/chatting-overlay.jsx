import { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import styled from "styled-components";

import { getChatChatRoomListByPage } from "../../../libs/axios/base/chat";
import { COLOR, FONT_SIZE } from "../../../libs/styled-components";
import { ResponsiveIcon, SearchBar } from "../../commons";
import ChatRoomList from "./chat-room-list";

/**
 * @component
 * @parameter onClose: function - x 를 눌렀을 때 overlay를 닫아주는 함수입니다.
 * @returns {JSX.Element}
 *
 * @description 채팅을 클릭했을 때 제일 먼저 나오는 페이지 입니다.
 */

const ChattingOverlay = ({ onClose }) => {
	const [chatRoomList, setChatRoomList] = useState([]);

	useEffect(() => {
		const fetChatData = async () => {
			try {
				const response = await getChatChatRoomListByPage({
					page: 0,
				});
				setChatRoomList(response.chats);
			} catch (error) {
				console.log(error);
			}
		};
		fetChatData();
	}, []);

	const handleClose = () => {
		onClose();
	};

	return (
		<S.Wrapper>
			<S.TitleBox>
				<S.TitleImage src="https://url.kr/fm7ls1" />
				<S.TitleWrapper>
					<S.TitleText>P.E.A Chat</S.TitleText>
					<S.CancelButton>
						<ResponsiveIcon icon={BsX} onClick={handleClose} />
					</S.CancelButton>
				</S.TitleWrapper>
			</S.TitleBox>

			<S.SearchContainer>
				<SearchBar
					width="32rem"
					paddingLeft="1.5rem"
					placeholder="판매자명 또는 상품명을 입력해주세요"
				/>
			</S.SearchContainer>
			<ChatRoomList roomData={chatRoomList} />
		</S.Wrapper>
	);
};
export default ChattingOverlay;

const Wrapper = styled.div`
	width: 35rem;
	height: 40rem;
	border-radius: 0.6rem;
	box-shadow: 0.1rem 0.2rem 0.4rem 0.1rem ${COLOR.COMMON[400]};

	background-color: ${COLOR.COMMON[1000]};
`;

const TitleBox = styled.div`
	display: flex;
	justify-content: left;
	align-items: center;
`;

const TitleWrapper = styled.div`
	width: 30rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const TitleImage = styled.img`
	width: 4rem;
	padding: 0.5rem;
`;

const TitleText = styled.p`
	font-size: ${FONT_SIZE.md};
`;

const SearchContainer = styled.div`
	padding: 1rem 0;
`;

const CancelButton = styled.button`
	background-color: ${COLOR.COMMON[1000]};
	cursor: pointer;
`;

const S = {
	Wrapper,
	CancelButton,
	TitleBox,
	TitleImage,
	TitleText,
	TitleWrapper,
	SearchContainer,
};
