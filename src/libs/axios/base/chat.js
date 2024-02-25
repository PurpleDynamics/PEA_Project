import { axiosInstance } from "./axios-instance";

/**
 * @function
 * @parameter prod_idx : number - 상품 id
 * @returns {Promise}
 *
 * @description 채팅방 생성 api
 */
export const postChat = async ({ prod_idx }) => {
	const response = await axiosInstance.post("/chat", {
		prod_idx,
	});
	return response;
};

/**
 * @function
 * @parameter room_idx : number - 채팅방 id
 * @returns {Promise}
 *
 * @description
 * - 채팅방 메세지 모두 읽기 api
 * - 따로 호출할 필요X, 필요한 경우에만 사용
 */
export const postChatReadAllByRoomIdx = async ({ room_idx }) => {
	const response = await axiosInstance.post(
		`/chat/read-all?room_idx=${room_idx}`
	);
	return response;
};

/**
 * @function
 * @parameter room_idx : number - 채팅방 id
 * @parameter message : string - 채팅 메세지
 * @returns {Promise}
 *
 * @description 채팅방 메세지 저장 api
 */
export const postChatSend = async ({ room_idx, message }) => {
	const response = await axiosInstance.post("/chat/send", {
		room_idx,
		message,
	});
	return response;
};

/**
 * @function
 * @parameter room_idx : number - 채팅방 id
 * @returns {Promise}
 *
 * @description 채팅 로그 조회 api
 */
export const getChatChatLogByRoomIdx = async ({ room_idx }) => {
	const response = await axiosInstance.get(
		`/chat/chat-log?room_idx=${room_idx}`
	);
	return response;
};

/**
 * @function
 * @parameter room_idx : number - 채팅방 id
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
 * @parameter prod_idx : number - 물품 id
 * @parameter page : number - 목록을 조회할 페이지 번호
 * @returns {Promise}
 *
 * @description 특정 물품 채팅방 목록 조회 api
 */
export const getChatProductChatListByPageAndProdIdx = async ({
	prod_idx,
	page,
}) => {
	const response = await axiosInstance.get(
		`/chat/product-chat-list?page=${page}&prod_idx=${prod_idx}`
	);
	return response;
};
