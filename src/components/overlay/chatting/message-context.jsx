import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

// socket 연결 초기화
const socket = io(process.env.REACT_APP_PEA_CHAT_URL);

// 메시지 관련 context생성, 메시지 상태와 관련 함수 제공
const MessageContext = createContext();

// message context를 사용하는 custom hook입니다
// 이 hook을 통해 component에서 메시지 상태와 함수를 사용할 수 있습니다
export const useMessage = () => useContext(MessageContext);

/**
 * @customhook
 * @parameter children: components - 랜더링할 자식 컴포넌트들
 * @returns {JSX.Element}
 *
 * @description - 메시지 상태를 관리하고 socket을 통해 실시간으로 메시지를 수신하는 컴포넌트입니다
 */
export const MessageProvider = ({ children }) => {
	const [messages, setMessages] = useState([]);

	// 컴포넌트 마운트시 소켓 이벤트 리스너 설정
	useEffect(() => {
		// "newMessage" 이벤트 수신, 새 메시지를 상태에 추가
		socket.on("newMessage", (newMessage) => {
			setMessages((prev) => [...prev, newMessage]);
		});

		// 언마운트시 이벤트 리스너 정리
		return () => {
			socket.off("newMessage");
		};
	}, []);

	// 새 메시지를 상태에 추가
	const addMessage = (messageData) => {
		setMessages((prevMessages) => [...prevMessages, messageData]);
	};

	// 메시지 상태를 새로운 메시지 배열로 업데이트
	const updateMessages = (newMessage) => {
		setMessages(newMessage);
	};

	// provider를 통해 메시지 상태와 함수를 자식 component에 전달
	return (
		<MessageContext.Provider
			value={{
				messages,
				addMessage,
				updateMessages,
			}}
		>
			{children}
		</MessageContext.Provider>
	);
};
