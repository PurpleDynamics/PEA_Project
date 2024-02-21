import axios from "axios";

const BASE_URL = "https://topdragon.co.kr/api/user";

/**
 *
 * @function
 * @parameter keyType: string - 중복확인할 값의 종류를 나타내는 매개변수
 * @parameter value: string - 중복을 확인할 실제 값
 * @parameter avilableRef: Ref boolean -  함수를 호출한 곳으로 반환할 결과를 저장하는 useRef로 생성된 참조
 * @parameter handleOpenModal: function - modal 관리하는 함수
 * @parameter errors: {object} - 폼 유효성 검사시 발생한 오류를 나타내는 객체
 * @returns {JSX.Element}
 *
 * @description - 이메일과 닉네임 중복확인을 검사하는 함수입니다.
 */

export const CheckDuplication = async ({
	keyType,
	value,
	avilableRef,
	handleOpenModal,
	errors,
}) => {
	//만약 해당 유형에 대한 오류가 정의되어있다면 함수를 종료하고 , 중복확인 X
	if (typeof errors[keyType] !== "undefined") return;
	if (!value) {
		handleOpenModal({
			keyType: `${keyType}을 입력해주세요`,
			modalState: "error",
		});
		return;
	}
	//중복확인요청
	const url = `${BASE_URL}/check/${keyType}?${keyType}=${encodeURIComponent(value)}`;
	try {
		const response = await axios.get(url);
		if (response.status === 200) {
			handleOpenModal({
				keyType: `사용가능한 ${keyType}입니다.`,
				modalState: "success",
			});
			avilableRef.current = true;
		}
	} catch (error) {
		if (error.response.status === 404) {
			handleOpenModal("404error");
		} else if (error.response.status === 400) {
			handleOpenModal({
				keyType: `중복된 ${keyType}입니다`,
				modalState: "error",
			});
			avilableRef.current = false;
		} else {
			handleOpenModal({
				keyType: `잘못된 ${keyType}입니다. 다시 입력해주세요.`,
				modalState: "error",
			});
		}
	}
};
