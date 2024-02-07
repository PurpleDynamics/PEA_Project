/**
 * @functions
 * @parameter token : 로컬스토리지에 저장될 토큰
 * @description - 로컬/세션 스토리지에서 토큰을 관리하는데 사용되는 함수입니다.
 *
 */

export const getLocalToken = () => {
	return localStorage.getItem("token");
};

export const setLocalToken = (token) => {
	return localStorage.setItem("token", token);
};

export const setSessionToken = (token) => {
	return sessionStorage.setItem("token", token);
};
export const getSessionToken = () => {
	return sessionStorage.getItem("token");
};
