import axios from "axios";

const BASE_URL = "http://49.165.177.17:3055";

/**
 *
 * @component
 * @parameter type: string - 중복확인할 값의 종류를 나타내는 매개변수
 * @parameter value: string - 중복을 확인할 실제 값
 * @parameter avilableRef: Ref boolean -  함수를 호출한 곳으로 반환할 결과를 저장하는 useRef로 생성된 참조
 * @parameter handleOpenModal: function - modal 관리하는 함수
 * @parameter errors: string - 폼 유효성 검사시 발생한 오류를 나타내는 객체
 * @returns {JSX.Element}
 *
 * @description - 이메일과 닉네임 중복확인을 검사하는 함수입니다.
 */

export const CheckDuplication = async (
	type,
	value,
	avilableRef,
	handleOpenModal,
	errors
) => {
	//만약 해당 유형에 대한 오류가 정의되어있다면 함수를 종료하고 , 중복확인 X
	if (typeof errors[type] !== "undefined") return;
	if (!value) {
		handleOpenModal(`${type}을 입력해주세요`);
		return;
	}
	//중복확인요청
	const url = `${BASE_URL}/check_${type}?${type}=${encodeURIComponent(value)}`;
	try {
		const response = await axios.get(url);
		if (response.data.isAvailable) {
			handleOpenModal(`사용가능한 ${type}입니다.`);
			avilableRef.current = true;
		} else {
			handleOpenModal(`중복된 ${type}입니다`);
			avilableRef.current = false;
		}
	} catch (error) {
		console.error(`중복확인 오류 (${type})`, error);
	}
};
