import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BsSendFill, BsX } from "react-icons/bs";
import { io } from "socket.io-client";
import styled from "styled-components";

import { useMessage } from "../../../contexts";
import {
	getChatChatLogByRoomIdx,
	postChatSend,
} from "../../../libs/axios/base/chat";
import { getUserInfo } from "../../../libs/axios/base/user";
import { COLOR, FONT_SIZE } from "../../../libs/styled-components";
import { saleData } from "../../../utils";
import { ResponsiveIcon } from "../../commons";

const socket = io(process.env.REACT_APP_PEA_CHAT_URL);

/**
 * @component
 * @parameter onClose: function - x 버튼을 클릭 시 화면이 닫이는 함수입니다.
 * @parameter roomId : String - chatting room 의 id를 받아옵니다.
 * @parameter sellerData : Array<전체 채팅방 목록> - 전체 채팅방의 목록을 가져옵니다.
 * @returns {JSX.Element}
 *
 * @description
 * - 실제 채팅이 이루어지는 컴포넌트입니다.
 * - 보낸 메세지는 우측, 받은 메세지는 좌측으로 보여지게 됩니다.
 * - 빈값일 경우, 채팅이 보내지지 않습니다.
 */

const Chat = ({ roomId, sellerData, onClose }) => {
	// user의 정보를 받아오는 hook
	const [userInfo, setUserInfo] = useState("");
	// messages를 저장하고 업데이트하기 위한 custom hook
	const { messages, addMessage, updateMessages } = useMessage();
	// sellerData로 현재방의 정보를 저장하기 위한 hook
	const [currentRoomInfo, setCurrentRoomInfo] = useState();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	// 채팅 로그와 유저 정보를 받아오는 함수
	const fetchChatLogs = async () => {
		try {
			// 유저 정보 받아오기
			const userInfoResponse = await getUserInfo();
			setUserInfo(userInfoResponse.data);

			// 현재 방 채팅 로그 받아오기
			const chatLogsResponse = await getChatChatLogByRoomIdx({
				roomId,
			});

			// 현채 채팅방 로그의 데이터, 채팅방 로그의 길이가 0 이상일 때
			if (chatLogsResponse.data && chatLogsResponse.data.length > 0) {
				const updateMessage = chatLogsResponse.data.map((message) => {
					const utcTime = new Date(message.createdAt);

					const hours = utcTime
						.getHours()
						.toString()
						.padStart(2, "0");
					const minutes = utcTime
						.getMinutes()
						.toString()
						.padStart(2, "0");

					const createdAtTimeOnly = `${hours}:${minutes}`;

					return {
						...message,
						createdAt: createdAtTimeOnly, // 새로 만든 00:00 형식으로 createdAt바꾸기
						$isSelf:
							message.User.nick_name ===
							userInfoResponse.data.nick_name, // message의user nickname이 받아온 user info의 nickname과 같은지 비교
						room_idx: roomId,
					};
				});
				// message를 업데이트 해줌
				updateMessages(updateMessage);
			}
		} catch (error) {
			console.error("채팅 로그 불러오기 실패", error);
		}
	};

	useEffect(() => {
		fetchChatLogs();
	}, []);

	useEffect(() => {
		// 채팅방 접속 소켓
		const joinRoom = () => {
			socket.emit("join", { room_idx: roomId });
		};
		joinRoom();

		// 전체 채팅방 목록중 현재 선택된 roomId값과 item의 idx가 같으면 setSale
		const roomData = saleData({ roomData: sellerData, roomId: roomId });

		// 현재 방 정보를 저장
		setCurrentRoomInfo(roomData);

		// receiveMessage를 실행시키고 현재 사용자가 자신인지 확인하는 핸들러
		const handleMessageReceive = (messageData) => {
			const $isSelf = messageData.nick_name === userInfo.nick_name;
			const updatedMessage = { ...messageData, $isSelf };

			addMessage(updatedMessage);
		};
		socket.on("receiveMessage", handleMessageReceive);

		return () => {
			socket.off("receiveMessage", handleMessageReceive);
		};
	}, [addMessage]);

	// 새 메시지가 생성될 때마다 화면을 맞추기
	const messageEndRef = useRef(null);
	const scrollIntoBottom = () => {
		messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	useEffect(() => {
		scrollIntoBottom();
	}, [messages]);

	// sendMessage 시간 조정
	const dateFomatter = new Intl.DateTimeFormat("ko-KR", {
		timeZone: "Asia/Seoul",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	});

	const createdAt = dateFomatter.format(new Date());

	// 전송 클릭 시
	const onSubmit = async (data) => {
		const { message } = data;
		if (!message.trim()) return;

		const messageData = {
			title: currentRoomInfo.product.title,
			createdAt: createdAt,
			prod_idx: currentRoomInfo.product.idx,
			room_idx: roomId,
			nick_name: userInfo.nick_name,
			message: message,
			isSeller: false,
			$isSelf: true,
		};

		try {
			// message를 postChatSend로 서버에 전송, 저장
			await postChatSend({
				roomId,
				message,
			});
			// message를 저장합니다
			addMessage(messageData);

			// message를 전송합니다
			socket.emit("sendMessage", messageData);

			reset();
		} catch (error) {
			console.error("메시지 저장 실패", error);
		}
	};

	return (
		<S.Wrapper>
			<S.TitleBox>
				<S.TitleImage src="https://url.kr/fm7ls1" />
				<S.TitleWrapper>
					<S.TitleText>{currentRoomInfo?.product.title}</S.TitleText>
					<S.CancelButton>
						<ResponsiveIcon icon={BsX} onClick={onClose} />
					</S.CancelButton>
				</S.TitleWrapper>
			</S.TitleBox>
			<S.ChatView>
				{/* 배열로 저장된 message를 받아와서 각각 보여주는 map입니다. */}
				{messages.map((message, index) => (
					<S.MessageBox $isSelf={message.$isSelf} key={index}>
						<S.MessageTime $isSelf={message.$isSelf}>
							{message.createdAt}
						</S.MessageTime>
						<S.Message $isSelf={message.$isSelf}>
							{message.message}
						</S.Message>
					</S.MessageBox>
				))}
				<div ref={messageEndRef} />
			</S.ChatView>
			<S.Form onSubmit={handleSubmit(onSubmit)}>
				<S.Input
					{...register("message", {
						required: "",
					})}
					placeholder="보내실 메세지를 입력하세요"
				/>
				{errors.message && (
					<S.ErrorMessage>{errors.message.message}</S.ErrorMessage>
				)}
				<S.SendButton>
					<ResponsiveIcon icon={BsSendFill} size="2.25rem" />
				</S.SendButton>
			</S.Form>
		</S.Wrapper>
	);
};
export default Chat;

const Wrapper = styled.div`
	width: 35rem;
	height: 40rem;
	border-radius: 0.6rem;
	box-shadow: 0.1rem 0.2rem 0.4rem 0.1rem ${COLOR.COMMON[400]};
	background-color: ${COLOR.COMMON[1000]};
`;

const TitleBox = styled.div`
	display: flex;
	justify-content: start;
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

const ChatView = styled.div`
	width: 100%;
	height: 30rem;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	padding: 2rem;
`;

const MessageBox = styled.div`
	padding: 0 0.5rem;
	margin: 0.5rem 0;
	display: flex;
	flex-direction: ${(props) => (props.$isSelf ? "row" : "row-reverse")};
	align-self: ${(props) => (props.$isSelf ? "flex-end" : "flex-start")};
	max-width: 80%;
`;

const Message = styled.div`
	padding: 0.5rem;
	margin: 0.5rem 0;
	background-color: ${(props) =>
		props.$isSelf ? COLOR.MAIN[200] : COLOR.COMMON[800]};
	border-radius: 0.4rem;
`;

const MessageTime = styled.p`
	align-self: ${(props) => (props.$isSelf ? "flex-end" : "flex-start")};
	padding-top: 2rem;
	padding-bottom: ${(props) => (props.$isSelf ? "0.5rem" : "0")};
	padding-right: ${(props) => (props.$isSelf ? "0.5rem" : "0")};
	padding-left: ${(props) => (props.$isSelf ? "0" : "0.5rem")};
	font-size: ${FONT_SIZE.ti};
	color: ${COLOR.COMMON[800]};
`;

const Input = styled.input`
	width: 100%;
	padding: 0.5rem 2rem 0.5rem 0.5rem;
	border: none;
`;

const ErrorMessage = styled.p`
	color: ${COLOR.SYSTEM.error};
	font-size: ${FONT_SIZE.sm};
`;

const SendButton = styled.button`
	padding-right: 0.5rem;
	background-color: ${COLOR.COMMON[1000]};
	cursor: pointer;
`;

const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	padding: 0.5rem;
	margin: 0 0.5rem;
	border: 1px solid ${COLOR.COMMON[800]};
	border-radius: 0.8rem;
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
	ChatView,
	Message,
	ErrorMessage,
	SendButton,
	Input,
	Form,
	MessageTime,
	MessageBox,
};
