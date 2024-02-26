import { axiosInstance } from "./axios-instance";

/**
 * @function
 * @parameter productId : number - 상품 id
 * @returns {Promise}
 *
 * @description 채팅방 생성 api
 */
export const postChat = async ({ productId }) => {
	const response = await axiosInstance.post("/chat", {
		productId,
	});
	return response;
};

/**
 * @function
 * @parameter roomId : number - 채팅방 id
 * @returns {Promise}
 *
 * @description
 * - 채팅방 메세지 모두 읽기 api
 * - 따로 호출할 필요X, 필요한 경우에만 사용
 */
export const postChatReadAllByRoomIdx = async ({ roomId }) => {
	const response = await axiosInstance.post("/chat/read-all", {
		params: {
			roomId,
		},
	});
	return response;
};

/**
 * @function
 * @parameter roomId : number - 채팅방 id
 * @parameter message : string - 채팅 메세지
 * @returns {Promise}
 *
 * @description 채팅방 메세지 저장 api
 */
export const postChatSend = async ({ roomId, message }) => {
	const response = await axiosInstance.post("/chat/send", {
		roomId,
		message,
	});
	return response;
};

/**
 * @function
 * @parameter roomId : number - 채팅방 id
 * @returns {Promise}
 *
 * @description 채팅 로그 조회 api
 */
export const getChatChatLogByRoomIdx = async ({ roomId }) => {
	const response = await axiosInstance.get("/chat/chat-log", {
		params: {
			roomId,
		},
	});
	return response;
};

/**
 * @function
 * @parameter page : number - 목록을 조회할 페이지 번호
 * @returns {Promise}
 *
 * @description 전체 채팅방 목록 조회 api
 */
export const getChatChatRoomListByPage = async ({ page }) => {
	const response = await axiosInstance.get("/chat/chat-room-list", {
		params: {
			page,
		},
	});
	return response;
};

/**
 * @function
 * @parameter productId : number - 물품 id
 * @parameter page : number - 목록을 조회할 페이지 번호
 * @returns {Promise}
 *
 * @description 특정 물품 채팅방 목록 조회 api
 */
export const getChatProductChatListByPageAndProdIdx = async ({
	productId,
	page,
}) => {
	const response = await axiosInstance.get("/chat/product-chat-list", {
		params: {
			page,
			productId,
		},
	});
	return response;
};
