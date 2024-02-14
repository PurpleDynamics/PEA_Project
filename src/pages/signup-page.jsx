import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Button, Input } from "../components/commons";
import { Modal } from "../components/overlay";
import { ModalContent } from "../components/signup/signup-modal-contents";
import { VAILDATION } from "../constants";
import { useOverlay } from "../hooks/use-overlay";
import { BREAK_POINT, COLOR } from "../libs/styled-components";

const BASE_URL = "http://49.165.177.17:3055";
/**
 * @component
 * @returns {JSX.Element}
 *
 * @description
 * - 회원가입이 안료되면 로그인 페이지로 이동합니다
 * - 중복확인 및 해당 input들의 유효성 검사가 완료되면 '가입하기'버튼이 활성화됩니다.
 */

const SignupPage = () => {
	const { onOpenOverlay } = useOverlay();
	const handleOpenModal = (message) => {
		onOpenOverlay({
			overlayComponent: Modal,
			modalContents: ModalContent(message),
			isFiltered: true,
		});
	};
	``;

	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = useForm({ mode: "onChange" });

	const isEmailAvailable = useRef(false); //이메일 중복 여부
	const isNicknameAvailable = useRef(false); //닉네임 중복 여부

	const [isSubmitDisabled, setIsSubmitDisabled] = useState(true); // 가입하기 버튼 홀성화 여부

	const emailValue = watch("email");
	const nicknameValue = watch("nickname");

	const onSubmit = async (data) => {
		const authData = {
			email: data.email,
			password: data.password,
			nickname: data.nickname,
			phone_number: data.phoneNumber,
			location: data.location,
		};
		//비밀번호 확인하는 로직
		if (data.password !== data.passwordConfirm) {
			return alert("비밀번호 오류");
		}

		try {
			const response = await axios.post(`${BASE_URL}/signup`, authData);
			console.log(response, "response");
			if (response.status === 200) {
				navigate("/signin");
			}
		} catch (error) {
			console.error("회원가입 오류", error);
		}
	};

	//이메일&닉네임이 모두 중복여부 확인후 setIsSubmitDisabled가 false로 바뀜(가입하기버튼활성화)
	const enableIfAllTrue = () => {
		if (isEmailAvailable.current && isNicknameAvailable.current) {
			setIsSubmitDisabled(false);
		}
	};

	/**
	 *
	 * @function
	 * @parameter type: string - 중복확인할 값의 종류를 나타내는 매개변수
	 * @parameter value: string - 중복을 확인할 실제 값
	 * @parameter avilableRef: Ref<boolean> -  함수를 호출한 곳으로 반환할 결과를 저장하는 useRef로 생성된 참조
	 * @returns {JSX.Element}
	 *
	 * @description - 이메일과 닉네임 중복확인을 검사하는 함수입니다.
	 */
	const checkDuplication = async (type, value, avilableRef) => {
		//만약 해당 유형에 대한 오류가 정의되어있다면 함수를 종료하고 , 중복확인 X
		if (typeof errors[type] !== "undefined") return;
		if (!value) {
			// alert(`${type}을(를) 입력해주세요.`);
			handleOpenModal("이메일을(를) 입력해주세요.");
			return;
		}
		//중복확인요청
		const url = `${BASE_URL}/check_${type}?${type}=${encodeURIComponent(value)}`;
		try {
			const response = await axios.get(url);
			if (response.data.isAvailable) {
				alert(`사용가능한 ${type}입니다.`);
				avilableRef.current = true;
			} else {
				alert(`중복된 ${type}입니다`);
				avilableRef.current = false;
			}
		} catch (error) {
			console.error(`중복확인 오류 (${type})`, error);
		}
	};
	//이메일 중복 확인함수
	const onEmailDup = async () => {
		await checkDuplication("email", emailValue, isEmailAvailable);
		enableIfAllTrue();
	};
	//닉네임 중복 확인함수
	const onNicknameDup = async () => {
		await checkDuplication("nickname", nicknameValue, isNicknameAvailable);
		enableIfAllTrue();
	};
	//input 창에 값이 변경될때 가입하기 버튼 활성화 여부 설정하는 함수
	useEffect(() => {
		if (emailValue && nicknameValue) {
			setIsSubmitDisabled(true);
		}
	}, [emailValue, nicknameValue]);

	return (
		<S.MainWrapper>
			<S.ImageContainer>
				<img width="500rem" src="https://buly.kr/74To5Al" />
			</S.ImageContainer>
			<S.TextInputForm onSubmit={handleSubmit(onSubmit)}>
				<S.TitleText>P.E.A</S.TitleText>
				<Input
					register={register}
					titleText="이메일"
					registerKey="email"
					placeholder="이메일을 입력하세요"
					buttonText="중복확인"
					handleButton={() => onEmailDup()}
					errors={errors}
					validate={{
						required: VAILDATION.COMMON_MESSAGE,
						pattern: VAILDATION.EMAIL,
					}}
				/>
				<Input
					register={register}
					titleText="비밀번호"
					registerKey="password"
					placeholder="비밀번호를 입력하세요"
					type="password"
					errors={errors}
					validate={{
						required: VAILDATION.COMMON_MESSAGE,
						pattern: VAILDATION.PASSWORD,
					}}
				/>
				<Input
					register={register}
					titleText="비밀번호 확인"
					registerKey="passwordConfirm"
					placeholder="비밀번호를 다시 입력하세요"
					type="password"
					errors={errors}
					handleButton={() => handlePasswordConfirm()}
					validate={{
						required: VAILDATION.COMMON_MESSAGE,
						pattern: VAILDATION.PASSWORD_CONFIRM,
					}}
				/>
				<Input
					register={register}
					titleText="닉네임"
					registerKey="nickname"
					placeholder="닉네임을 입력하세요"
					buttonText="중복확인"
					handleButton={() => onNicknameDup()}
					errors={errors}
					validate={{
						required: VAILDATION.COMMON_MESSAGE,
						pattern: VAILDATION.NICKNAME,
					}}
					autoComplete="off"
				/>
				<Input
					register={register}
					titleText="휴대폰번호"
					registerKey="phoneNumber"
					placeholder="휴대폰번호를 입력하세요 (-제외)"
					errors={errors}
					validate={{
						required: VAILDATION.COMMON_MESSAGE,
						pattern: VAILDATION.PHONE_NUMBER,
					}}
				/>
				<Input
					register={register}
					titleText="주소"
					registerKey="location"
					placeholder="주소를 입력하세요"
					buttonText="검색"
					errors={errors}
					validate={{
						required: VAILDATION.COMMON_MESSAGE,
					}}
				/>
				<Button
					type="submit"
					width="30rem"
					disabled={isSubmitDisabled || !isValid} //disabled={}가 false일때 버튼 활성화
				>
					가입하기
				</Button>
			</S.TextInputForm>
		</S.MainWrapper>
	);
};
export default SignupPage;

const MainWrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-columns: 62.5rem 62.5rem;
	justify-content: center;
	align-items: center;
	@media (max-width: ${BREAK_POINT.md}) {
		grid-template-columns: 1fr;
	}
`;
const ImageContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const TextInputForm = styled.form`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const TitleText = styled.div`
	margin-bottom: 30px;
	font-size: 4.5rem;
	color: ${COLOR.MAIN[800]};
`;

const S = {
	MainWrapper,
	ImageContainer,
	TextInputForm,
	TitleText,
};
