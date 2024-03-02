import { useEffect, useState } from "react";
import styled from "styled-components";

import { useOverlay } from "../../../hooks/use-overlay";
import { COLOR, FONT_SIZE } from "../../../libs/styled-components";
import { printPeriodAsString } from "../../../utils";
import Chat from "./chat";
import { useMessage } from "./message-context";

/**
 * @component
 * @parameter roomData: Array<key - value, nickname - string, createdAt - string, lastMessage - string> - 임시로 방정보를 받오는 파라미터 입니다.
 *
 * @returns {JSX.Element}
 *
 * @description
 * - 채팅방 리스트를 보여주는 컴포넌트입니다.
 * - 현재 임시데이터 하나만 보여주고 있습니다.
 * - user image와 nickname last chatting date로 채팅방을 만들어줍니다.
 * - 채팅방 클릭 시 Chat component로 이동합니다.
 */

const ChatRoomList = ({ roomData }) => {
	const { onOpenOverlay } = useOverlay();
	const { messages } = useMessage();

	const [updateRoomData, setUpdateRoomData] = useState(roomData);

	useEffect(() => {
		setUpdateRoomData(roomData);
	}, [roomData]);

	useEffect(() => {
		// 새 메시지 수신 이벤트 리스너 등록
		const latestMessage = messages[messages.length - 1];
		if (latestMessage) {
			setUpdateRoomData((prevRoomList) => {
				return prevRoomList.map((room) => {
					if (room.idx === latestMessage.room_idx) {
						return {
							...room,
							lastMessage: latestMessage.message,
							lastMessageCreatedAt: latestMessage.createdAt,
						};
					}
					return room;
				});
			});
		}
	}, [messages]);

	const handleChatRoomClick = (id) => {
		onOpenOverlay({
			overlayComponent: Chat,
			roomId: id,
			sellerData: roomData,
			position: "bottomRight",
			isFiltered: false,
			zIndex: 1,
		});
	};

	return (
		<>
			{/* data의 정보를 chat room에 맡게 보여주는 map입니다. */}
			{updateRoomData.length === 0 ? (
				<NoRoomData>채팅방이 없습니다</NoRoomData>
			) : (
				updateRoomData.map((item, index) => (
					<S.Wrppaer key={index}>
						<S.RoomContainer
							key={item.idx}
							onClick={() => handleChatRoomClick(item?.idx)}
						>
							<S.RoomBox>
								<S.UserProfile
									src={
										item.imagesrc || "https://url.kr/5zjib4"
									}
								/>
								<S.TopTitle>
									<S.UserName>
										{item?.product.title}
									</S.UserName>
									<S.MessageText>
										{item?.lastMessage}
									</S.MessageText>
								</S.TopTitle>
								<S.SendTime>
									{printPeriodAsString({
										formattedDate:
											item?.lastMessageCreatedAt,
									})}
								</S.SendTime>
							</S.RoomBox>
						</S.RoomContainer>
					</S.Wrppaer>
				))
			)}
		</>
	);
};

export default ChatRoomList;

const Wrppaer = styled.div``;
const RoomList = styled.div`
	width: 100%;
	height: 30rem;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	overflow-y: auto;
`;

const NoRoomData = styled.div`
	color: ${COLOR.COMMON[600]};
	text-align: center;
	padding: 2rem;
`;

const RoomContainer = styled.div``;

const RoomBox = styled.div`
	display: grid;
	grid-template-columns: 5rem 20rem 5rem;
	justify-content: left;
	align-items: center;
	flex-direction: column;
	padding: 1rem;

	&:hover {
		background-color: ${COLOR.COMMON[800]};
	}
	cursor: pointer;
`;

const UserProfile = styled.img`
	width: 4rem;
	height: 4rem;
	border-radius: 2rem;
	margin-right: 1rem;
`;

const TopTitle = styled.div`
	display: grid;
	justify-content: start;
	grid-template-rows: repeat(2, 1fr);
	width: 100%;
`;

const UserName = styled.p`
	width: 18rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const SendTime = styled.p`
	color: ${COLOR.COMMON[600]};
	font-size: ${FONT_SIZE.ti};
	display: flex;
	justify-content: end;
`;

const MessageText = styled.p`
	font-size: ${FONT_SIZE.sm};
	line-height: 2rem;
`;

const S = {
	RoomList,
	RoomContainer,
	UserProfile,
	TopTitle,
	UserName,
	SendTime,
	MessageText,
	NoRoomData,
	RoomBox,
	Wrppaer,
};
