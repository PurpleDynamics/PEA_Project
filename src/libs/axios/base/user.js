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

/**
 * 8번요청
 * @description my-page에서 user의 정보를 가져옵니다.
 * - 요청결과 {
 * - User: { nickName: string , profileUrl: string }
 * - productsCount: number
 * - lkieCount: number
 * - chatcount: number
 * - ondo: number
 * - }
 */
export const getUserMyPage = async () => {
	const response = await axiosInstance().get("/user/my-page");
	return response.data;
};

/**
 * 9번요청
 * @parameter email : string - 수정할 email
 * @parameter region : string - 수정할 사용자위치
 * @parameter nickName : string - 수정할 nickName
 * @parameter phonse : - string - 수정할 전화번호
 * @parameter
 * @description
 * - user의 개인정보를 수정합니다. 프로필Image와 Password는 불가능
 * - 기존 값을 그대로 보내도 되고 수정하고 싶은 값만 보내도 됩니다.
 * - 요청결과  200("success") || 400("failure")
 */
export const patchUserExceptProfileAndPassword = async ({ userData }) => {
	const response = await axiosInstance().patch("/user", userData);
	return response;
};
/**
 * 10번요청
 * @parameter imageUrl : file - 수정하고싶은 user profileUrl
 * @description user의 profile을 수정합니다
 * - 요청결과  200("success") || 400("failure")
 */
export const patchUserProfileUrl = async ({ imageUrl }) => {
	const response = await axiosInstance().patch("/user/profile", imageUrl);
	return response;
};
/**
 * 11번요청
 * @parameter password : string - 수정할 비밀번호
 * @description user의 password를 수정합니다
 * - 요청결과  200("success") || 400("failure")
 */
export const patchUserPassword = async ({ password }) => {
	const response = await axiosInstance().patch("/user/password", password);

	return response;
};
/**
 * 12번요청
 * @parameter page : number - 마이페이지의 몇번째 페이지에있는 물품을 조회할건지
 * @parameter category : number - 중고인지 무료인지 (0:중고 | 1:무료)
 * @description
 * - 마이페이지 내 등록물품을 조회합니다.
 * - {
 * - Product: [
 * - { idx: number
 * - title: stirng
 * - price: number
 * - img_url :string
 * - createdAt : string
 * - region: string
 * - status: string}
 * - ]
 * - count: string
 * - }
 */
export const getUserProductListByPageAndCategory = async ({
	page,
	category,
}) => {
	const response = await axiosInstance().get(
		`/user/my-page/product-list&page=${page}?category=${category}`
	);
	return response.data;
};
/**
 * 13번요청
 * @parameter page : number - 몇페이지에 있는 상품목록을 불러올건지
 * @description 찜하기 버튼을 누른 목록데이터를 불러옵니다.
 */
export const getUserLikeProductListByPage = async ({ page }) => {
	const response = await axiosInstance().get(
		`/user/my-page/like-product-list?page=${page}`
	);
	return response.data;
};
/**
 * 14번요청
 * @parameter page : number - 몇페이지에서 조회할지
 * @parameter category : string - seller || buyer 구매인지 판매인지
 * @parameter start : string - 조회기간의 시작 날짜 YYYY-MM-DD 형식으로
 * @parameter end : string - 조회기간의 마지막 날짜 YYYY-MM-DD 형식으로
 * @description 판매한 상품인지 구매한 상품인지를 전달받아 시작~끝 날짜를입력 받아 금액정보를 받아오는 요청입니다.
 */
export const getUserAccoutBookByPageAndCategoryAndStartAndEnd = async ({
	page,
	category,
	start,
	end,
}) => {
	const response = await axiosInstance().get(
		`/user/my-page/account-book?page=${page}&category=${category}&start=${start}&end=${end}`
	);
	return response.data;
};
