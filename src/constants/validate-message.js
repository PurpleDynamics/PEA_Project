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
	message: "8글자 이하로 입력해주세요. 특수문자는 사용할 수 없습니다.",
};

const COMMON_MESSAGE = "필수 응답 항목입니다.";

const PHONE_NUMBER = {
	value: /^\d{3}-\d{4}-\d{4}$/,
	message: "(-)를 포함해서 번호를 입력해주세요.",
};
const PRODUCTNAME = {
	value: /^.{3,}$/,
	message: "3글자 이상 입력해주세요",
};
const TAGNAME = {
	value: /^.{1,6}$/,
	message: "최대 6글자까지 입력가능합니다",
};
export const VALIDATION = {
	EMAIL,
	PASSWORD,
	PASSWORD_CONFIRM,
	NICKNAME,
	COMMON_MESSAGE,
	PHONE_NUMBER,
	PRODUCTNAME,
	TAGNAME,
};
