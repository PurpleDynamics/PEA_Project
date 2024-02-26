import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BsSendFill, BsX } from "react-icons/bs";
import styled from "styled-components";

import { postChatSend } from "../../../libs/axios/base/chat";
import { COLOR, FONT_SIZE } from "../../../libs/styled-components";
import { ResponsiveIcon } from "../../commons";

/**
 * @component
 * @parameter onClose: function - x 버튼을 클릭 시 화면이 닫이는 함수입니다.
 * @returns {JSX.Element}
 *
 * @description
 * - 실제 채팅이 이루어지는 컴포넌트입니다.
 * - 보낸 메세지는 우측, 받은 메세지는 좌측으로 보여지게 됩니다.
 * - 빈값일 경우, 채팅이 보내지지 않습니다.
 */

const Chat = ({ roomId, sellerData, onClose }) => {
	const [chatRoomList, setChatRoomList] = useState([]);
	const [sellerName, setSellerName] = useState("");

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	// sellerData을 가져와서 roomId와 sellerData의 idx와 비교하여 User.nick_name을 가져옴
	useEffect(() => {
		for (let i of sellerData) {
			const found = i.find((item) => item.idx === roomId);
			if (found) {
				setSellerName(found.User.nick_name);
				break;
			}
		}
	});

	const [messages, setMessages] = useState([]);

	const messageEndRef = useRef(null);

	const scrollIntoBottom = () => {
		messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollIntoBottom();
	}, [messages]);

	const onSubmit = async (data) => {
		const { message } = data;
		if (!message.trim()) return;

		console.log(roomId, "room id");
		console.log(message, "message");

		try {
			const response = await postChatSend({
				room_idx: roomId,
				message: message,
			});

			const { createAt, message: responseMessage, User } = response;

			setMessages((prevMessages) => [
				...prevMessages,
				{
					text: responseMessage,
					nickName: User.nick_name,
					createAt: createAt,
				},
			]);
			reset();
		} catch (error) {
			if (error.response) {
				console.error("error response data: ", error.response.data);
				console.error(error.response);
			} else {
				console.log("error:", error.message);
			}
		}
	};
	return (
		<S.Wrapper>
			<S.TitleBox>
				<S.TitleImage src="https://url.kr/fm7ls1" />
				<S.TitleWrapper>
					<S.TitleText>{sellerName}</S.TitleText>
					<S.CancelButton>
						<ResponsiveIcon icon={BsX} onClick={onClose} />
					</S.CancelButton>
				</S.TitleWrapper>
			</S.TitleBox>
			<S.ChatView>
				{/* 배열로 저장된 message를 받아와서 각각 보여주는 map입니다. */}
				{messages.map((message, index) => (
					<S.Message key={index} sender={message.sender}>
						{message.text}
					</S.Message>
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

const Message = styled.div`
	padding: 0.5rem;
	margin: 0.5rem 0;
	background-color: ${COLOR.MAIN[200]};
	border-radius: 0.4rem;
	max-width: 80%;
	align-self: ${(props) =>
		props.sender === "user" ? "flex-end" : "flex-start"};
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
};
