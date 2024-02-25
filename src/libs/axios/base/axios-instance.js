import axios from "axios";

import { getSessionToken } from "../auth";
import { refreshAccessToken } from "./user";

/**
 * @function
 * @returns {axiosInstance}
 *
 * @description
 * - axiosInstance입니다.
 * - interceptors를 사용하여 AccessToken이 존재하면 자동으로 headers에 추가됩니다.
 */
export const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_PEA_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

// 모든 요청을 시작하기 전에 실행됨
axiosInstance.interceptors.request.use(
	(config) => {
		const token = getSessionToken(); // 세션에서 토큰을 가져옴.
		if (token) {
			// 토큰이 존재하면, 요청 헤더에 Authorization 추가합니다.
			config.headers["Authorization"] = `Bearer ${token}`;
		}
		return config; // 수정된 설정으로 요청을 계속 진행
	},
	(error) => {
		// 요청 설정 시 오류가 발생하면, 호출하는 쪽으로 오류를 전달
		return Promise.reject(error);
	}
);

// 모든 요청이 실행된 후
// 401에러. 토큰이 만료되었을 경우
axiosInstance.interceptors.response.use(
	(response) => response, // 응답을 그대로 반환
	async (error) => {
		const originalRequset = error.config; // 원본 요청 설정을 가져옴

		// 오류 응답이 401일 때, 전에 재시도하지 않았다면 새로운 토큰을 요청
		if (error.response.status === 401 && !originalRequset._retry) {
			originalRequset._retry = true; // 재시도 표시
			try {
				const response = await refreshAccessToken(); // 새로운 accessToken 발급

				// 새 토큰으로 요청 헤더 업데이트
				originalRequset.headers["Authorization"] = `Bearer ${response}`;

				// 업데이트된 토큰으로 원본 요청을 다시 시도
				return axiosInstance(originalRequset);
			} catch (refreshError) {
				// 토큰 새로고침에 실패 시 로그인 페이지로 이동
				handleOpenModal({
					type: "사용자 권한이 없습니다.",
					modalState: "error",
				});
				window.location.href("signin");
				return Promise.reject(refreshError); // 오류 반환
			}
		}
		// 다른 오류 반환
		return Promise.reject(error);
	}
);
