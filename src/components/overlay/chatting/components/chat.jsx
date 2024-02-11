import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BsSendFill } from "react-icons/bs";
import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../../../libs/styled-components";
import { ResponsiveIcon } from "../../../commons";

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

const Chat = ({ onClose }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const [messages, setMessages] = useState([]);

	const messageEndRef = useRef(null);

	const scrollIntoBottom = () => {
		messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollIntoBottom();
	}, [messages]);

	const onSubmit = (data) => {
		const { message } = data;
		if (!message.trim()) return;
		setMessages((prevMessages) => [
			...prevMessages,
			{ text: message, sender: "user" },
		]);
		reset(); // 폼 초기화
	};
	return (
		<S.ChatWrapper>
			<S.ChatTitleBox>
				<S.ChatTitleImage src="https://url.kr/fm7ls1" />
				<S.ChatTitleWrapper>
					<S.ChatTitleText>
						판매자nickname이 들어갈 예정입니다.
					</S.ChatTitleText>
					<S.X_Button onClick={onClose}>x</S.X_Button>
				</S.ChatTitleWrapper>
			</S.ChatTitleBox>
			<S.ChatView>
				{messages.map((message, index) => (
					<S.Message key={index} sender={message.sender}>
						{message.text}
					</S.Message>
				))}
				<div ref={messageEndRef} />
			</S.ChatView>
			<S.ChatForm onSubmit={handleSubmit(onSubmit)}>
				<S.ChatInput
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
			</S.ChatForm>
		</S.ChatWrapper>
	);
};
export default Chat;

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

const ChatView = styled.div`
	width: 100%;
	height: 30rem;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	padding: 2rem;
`;

const X_Button = styled.button`
	width: 3rem;
	height: 3rem;
	background-color: ${COLOR.COMMON[1000]};
	&:hover {
		cursor: pointer;
	}
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
const ChatInput = styled.input`
	width: 100%;
	padding: 0.5rem 5rem 0.5rem 1rem;
	border: 1px solid ${COLOR.COMMON[800]};
	border-radius: 0.8rem;
`;

const ErrorMessage = styled.p`
	color: red;
	font-size: ${FONT_SIZE.sm};
`;

const SendButton = styled.button`
	position: absolute;
	right: 3rem;
	border: none;
	background-color: ${COLOR.COMMON[1000]};
	cursor: pointer;
`;

const ChatForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	padding: 0.5rem;
`;

const S = {
	ChatWrapper,
	X_Button,
	ChatTitleBox,
	ChatTitleImage,
	ChatTitleText,
	ChatTitleWrapper,
	ChatView,
	Message,
	ErrorMessage,
	SendButton,
	ChatInput,
	ChatForm,
};
