import styled from "styled-components";

import { useOverlay } from "../../../hooks/use-overlay";
import { COLOR, FONT_SIZE } from "../../../libs/styled-components";
import { printPeriodAsString } from "../../../utils";
import Chat from "./chat";

/**
 * @component
 * @parameter roomData: Array<	key - value
 * 							nickname - string
 * 							createdAt - string
 * 							lastMessage - string
 * 								> - 임시로 방정보를 받오는 파라미터 입니다.
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

	if (roomData.length === 0)
		return <S.NoRoomData>채팅방이 없습니다</S.NoRoomData>;

	return (
		<>
			{/* data의 정보를 chat room에 맡게 보여주는 map입니다. */}
			{roomData.map((item, index) => (
				<S.Wrppaer key={index}>
					{item?.map((data) => (
						<S.RoomContainer
							key={data.idx}
							onClick={() => handleChatRoomClick(data?.idx)}
						>
							<S.RoomBox>
								<S.UserProfile
									src={
										item.imagesrc || "https://url.kr/5zjib4"
									}
								/>
								<S.TopTitle>
									<S.UserName>
										{data?.User?.nick_name}
									</S.UserName>
									<S.MessageText>
										{data?.lastMessage}
									</S.MessageText>
								</S.TopTitle>
								<S.SendTime>
									{printPeriodAsString({
										formattedDate:
											data?.lastMessageCreatedAt,
									})}
								</S.SendTime>
							</S.RoomBox>
						</S.RoomContainer>
					))}
				</S.Wrppaer>
			))}
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

const UserName = styled.p``;

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
