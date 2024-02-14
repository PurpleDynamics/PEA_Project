/**
 * @constants
 * @returns {JSX.Element}
 *
 * @description
 * - 유효성 검사에서 출력되는 메세지를 관리할수있는 파일입니다.
 *
 */

const EMAIL = {
	value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
	message: "이메일 형식이 아닙니다.",
};

const PASSWORD = {
	value: /^(.{8,})$/,
	message: "8글자이상 입력해주세요",
};

const PASSWORD_CONFIRM = {
	message: "비밀번호가 일치하지 않습니다",
};

const NICKNAME = {
	value: /^[a-zA-Z0-9가-힣]{1,8}$/,
	message: "8글자 이하, 특수문자제외하고 입력해주세요",
};

const COMMON_MESSAGE = "필수 응답 항목입니다.";

const PHONE_NUMBER = {
	value: /^[0-9]+$/,
	message: "숫자만 입력가능합니다",
};

export const VAILDATION = {
	EMAIL,
	PASSWORD,
	PASSWORD_CONFIRM,
	NICKNAME,
	COMMON_MESSAGE,
	PHONE_NUMBER,
};
