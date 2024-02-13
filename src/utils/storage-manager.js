/**
 * localStorage를 사용하여 애플리케이션 인증 토큰을 관리하는 파일입니다.
 */

import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

/**
 * @function
 * @returns {string | null} 저장된 token값 또는 token이 없을 경우 null
 *
 * @description localStorage에 저장된 내용을 key값("accessToken")으로 가져오는 함수입니다.
 */
export const getLocalToken = () => {
	return localStorage.getItem(ACCESS_TOKEN);
};

/**
 * @function
 * @parameter token: string - localStorage에 저장될 토큰
 *
 * @description localStorage에 key값("accessToken")으로 받아온 token을 저장하는 함수입니다.
 */
export const setLocalToken = ({ token }) => {
	return localStorage.setItem(ACCESS_TOKEN, token);
};

/**
 * @function
 * @parameter token: string - sessionStorage에 저장될 토큰
 *
 * @description sessionStorage에 key값("refreshToken")으로 받아온 token을 저장하는 함수입니다.
 */

export const setSessionToken = ({ token }) => {
	return sessionStorage.setItem(REFRESH_TOKEN, token);
};

/**
 * @function
 * @returns {string | null} 저장된 token값 또는 token이 없을 경우 null
 *
 * @description sessionStorage에 key값("refreshToken")으로 받아온 token을 저장하는 함수입니다.
 */

export const getSessionToken = () => {
	return sessionStorage.getItem(REFRESH_TOKEN);
};
