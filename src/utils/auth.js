/**
 * @functions
 * @parameter token : 로컬스토리지에 저장될 토큰
 * @description - 로컬스토리지에서 토큰을 관리하는데 사용되는 함수입니다.
 *
 */

export const getToken = () => {
	localStorage.getItem("token");
};

export const setToken = (token) => {
	localStorage.setItem("token", token);
};
