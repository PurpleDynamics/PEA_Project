/**
 * localStorage를 사용하여 애플리케이션 인증 토큰을 관리하는 파일입니다.
 */

/**
 * @function
 * @retruns {string | null} 저장된 token값 또는 token이 없을 경우 null
 *
 * @description localStorage에 저장된 내용을 key값("accessToken")으로 가져오는 함수입니다.
 */
export const getLocalToken = () => {
	return localStorage.getItem("accessToken");
};

/**
 * @function
 * @parameter token: string - localStorage에 저장될 토큰
 *
 * @description localStorage에 key값("accessToken")으로 받아온 token을 저장하는 함수입니다.
 */
export const setLocalToken = (token) => {
	return localStorage.setItem("accessToken", token);
};

/**
 * @function
 * @parameter token : sessionStorage에 저장될 토큰
 *
 * @description sessionStorage에 key값("refreshToken")으로 받아온 token을 저장하는 함수입니다.
 */

export const setSessionToken = (token) => {
	return sessionStorage.setItem("refreshToken", token);
};

/**
 * @function
 * @retruns {string | null} 저장된 token값 또는 token이 없을 경우 null
 *
 * @description sessionStorage에 key값("refreshToken")으로 받아온 token을 저장하는 함수입니다.
 */

export const getSessionToken = () => {
	return sessionStorage.getItem("refreshToken");
};
