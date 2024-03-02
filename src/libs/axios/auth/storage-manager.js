/**
 * sessionStorage를 사용하여 애플리케이션 인증 토큰을 관리하는 파일입니다.
 */

import { ACCESS_TOKEN, CHAT_TOKEN } from "../../../constants";

/**
 * @function
 * @parameter token: string - sessionStorage에 저장될 토큰
 *
 * @description sessionStorage에 key값("access_token")으로 받아온 token을 저장하는 함수입니다.
 */

export const setSessionToken = (token) => {
	return sessionStorage.setItem(ACCESS_TOKEN, token);
};

/**
 * @function
 * @parameter chatToken: string - sessingStorage에 저장될 user안의 socket 값
 * @returns {void}
 */
export const setChattingToken = (chatToken) => {
	return sessionStorage.setItem(CHAT_TOKEN, chatToken);
};

/**
 * @function
 * @returns {string | null} 저장된 token값 또는 token이 없을 경우 null
 *
 * @description sessionStorage에 key값("access_token")으로 받아온 token을 저장하는 함수입니다.
 */

export const getSessionToken = () => {
	return sessionStorage.getItem(ACCESS_TOKEN);
};

/**
 * @function
 * @returns {string | null} 저장된 token값 또는 token이 없을 경우 null
 *
 * @description sessionStorage에 key값("chattingToken")으로 받아온 token을 저장하는 함수입니다.
 */

export const getChattingToken = () => {
	return sessionStorage.getItem(CHAT_TOKEN);
};
