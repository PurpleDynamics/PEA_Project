import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Button, Input } from "../components/commons";
import { Modal } from "../components/overlay";
import { VAILDATION } from "../constants";
import { useOverlay } from "../hooks/use-overlay";
import { BREAK_POINT, COLOR } from "../libs/styled-components";
import { CheckDuplication } from "../utils";

const BASE_URL = "https://topdragon.co.kr/api/user";
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
	const handleOpenModal = ({ keyType, modalState }) => {
		onOpenOverlay({
			overlayComponent: Modal,
			noticeText: keyType,
			buttonText: "확인",
			modalState: modalState,
			isFiltered: true,
		});
	};

	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = useForm({ mode: "onChange" });

	const isEmailAvailable = useRef(false); //이메일 중복 여부
	const isNicknameAvailable = useRef(false); //닉네임 중복 여부

	const [isSubmitDisabled, setIsSubmitDisabled] = useState(true); // 가입하기 버튼 활성화 여부

	const emailValue = watch("email");
	const nicknameValue = watch("nickName");

	const onSubmit = async (data) => {
		const authData = {
			email: data.email,
			pw: data.pw,
			nickName: data.nickName,
			phone: data.phone,
			region: data.region,
		};
		//비밀번호 와 비밀번호확인이 같은지 확인하는 함수
		if (data.pw !== data.passwordConfirm) {
			handleOpenModal({
				keyType: "비밀번호가 일치하지않습니다",
				modalState: "error",
			});
			return;
		}
		try {
			const response = await axios.post(`${BASE_URL}`, authData);
			if (response.status === 200) {
				navigate("/signin");
			}
		} catch (error) {
			handleOpenModal("회원가입에 실패했습니다. 다시 시도해주세요.");
		}
	};

	//이메일&닉네임이 모두 중복여부 확인후 setIsSubmitDisabled가 false로 바뀜(가입하기버튼활성화)
	const enableIfAllTrue = () => {
		if (isEmailAvailable.current && isNicknameAvailable.current) {
			setIsSubmitDisabled(false);
		}
	};

	//이메일 중복 확인함수
	const onEmailDup = async () => {
		await CheckDuplication({
			keyType: "email",
			value: emailValue,
			avilableRef: isEmailAvailable,
			handleOpenModal: ({ keyType, modalState }) =>
				handleOpenModal({ keyType, modalState }),
			errors: errors,
		});
		enableIfAllTrue(); //중복확인 버튼을 눌렀는지 체크해주는 함수
	};
	//닉네임 중복 확인함수
	const onNicknameDup = async () => {
		await CheckDuplication({
			keyType: "nickname",
			value: nicknameValue,
			avilableRef: isNicknameAvailable,
			handleOpenModal: ({ keyType, modalState }) =>
				handleOpenModal({ keyType, modalState }),
			errors: errors,
		});
		enableIfAllTrue();
	};
	//input 창에 값이 변경될때 가입하기 버튼 비활성화 시키는 함수
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
					registerKey="pw"
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
					registerKey="nickName"
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
					registerKey="phone"
					placeholder="EX) 010-0000-0000"
					errors={errors}
					validate={{
						required: VAILDATION.COMMON_MESSAGE,
						pattern: VAILDATION.PHONE_NUMBER,
					}}
				/>
				<Input
					register={register}
					titleText="주소"
					registerKey="region"
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
	padding-bottom: 3rem;
	font-size: 4.5rem;
	color: ${COLOR.MAIN[800]};
`;

const S = {
	MainWrapper,
	ImageContainer,
	TextInputForm,
	TitleText,
};
