import { setSessionToken } from "../auth";
import { axiosInstance } from "./axios-instance";

/**
 * @function
 * @parameter email: string - 이메일
 * @parameter pw: string - 비밀번호
 * @parameter nickName: string - 닉네임
 * @parameter phone: string - 핸드폰 번호
 * @parameter region: string - 주소
 * @returns {Promise}
 *
 * @description 회원가입 api
 */
export const postUser = async ({ email, pw, nickName, phone, region }) => {
	const response = await axiosInstance.post("/user", {
		email,
		pw,
		nickName,
		phone,
		region,
	});
	return response;
};

/**
 * @function
 * @parameter email: string, pw: string
 * @returns {Promise} Promise 객체 - Axios의 응답을 포함하는 Promise
 *
 * @description 로그인 요청시 응답하는 api입니다.
 * @example
 * const loginData = { email: "user@example.com", pw: "password123" };
 * try {
 *   const response = await postUserLogin({ email: "test10101@test.test", pw: "qwer1234" });
 *   console.log(response.data); // 서버 응답 데이터
 *   console.log(response.status); // HTTP 상태 코드
 * } catch (error) {
 *   console.error(error.message); // 에러 메시지 출력
 * }
 */
export const postUserLogin = async ({ email, pw }) => {
	const response = await axiosInstance.post("/user/login", {
		email,
		pw,
	});
	return response;
};

/**
 * @function
 * @returns {Promise} - response logout
 *
 * @description logout api
 */
export const getUserLogout = async () => {
	const response = await axiosInstance.get("/user/logout");
	return response;
};

/**
 * @function
 * @parameter nickname: string - 사용자의 닉네임
 * @returns {Promise}
 *
 * @description nickname 중복 체크를 해주는 api
 */
export const getUserCheckNickNameByNickName = async ({ nickname }) => {
	const response = await axiosInstance.get(
		`/user/check/nickname?nickname=${nickname}`
	);
	return response.data;
};

/**
 * @function
 * @parameter email: string - 사용자의 이메일
 * @returns {Promise}
 *
 * @description email 중복 체크를 해주는 api
 */
export const getUserCheckEamilByEmail = async ({ email }) => {
	const response = await axiosInstance.get(
		`/user/check/email?eamil=${email}`
	);
	return response.data;
};

/**
 * @function
 * @returns {Promise}
 *
 * @description 사용자의 정보를 가져오는 함수입니다
 */
export const getUserInfo = async () => {
	const response = await axiosInstance.get("/user/info");
	return response;
};

/**
 * @function
 * @returns {Promise<string|{error: string}>}
 *
 * @description refreshToken을 반환하는 함수입니다.
 */
export const getUserRefreshToken = async () => {
	try {
		const response = await axiosInstance.get("/user/refreshToken");
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

/**
 * @function
 * @returns {Promise} 새로고침된 토큰을 포함하는 Promise 객체 | 토큰 새로고침이 실패하면 오류 반환
 *
 * @description
 * - accessToken을 새로고침하는 함수입니다.
 * - 'getUserRefreshToken' 함수를 호출하여 새로운 토큰을 받아오고,
 * - 받아온 토큰이 유효하다면 세션 토큰을 설정하는 과정을 포함합니다
 */
export const refreshAccessToken = async () => {
	try {
		const response = await getUserRefreshToken();
		if (response) {
			setSessionToken(response);
			return response;
		}
	} catch (error) {
		console.error(error);
		throw error;
	}
};
