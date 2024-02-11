import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Button, Input } from "../components/commons";
import { VAILDATION } from "../constants";
import { BREAK_POINT, COLOR } from "../libs/styled-components";

const BASE_URL = "http://49.165.177.17:3055";
/**
 * @component
 * @parameter register : input 요소를 리액트훅폼과 연결해 검증규칙을 적용할수있게하는 메소드입니다
 * @parameter formState : form state에관한 정보를 담고있는 객체입니다.
 * @parameter vaildate : 유효성 검사를 위해 사용되는 parameter 입니다.
 * @parameter handleSubmit : form 제출시 사용되는 parameter입니다.
 * @returns {JSX.Element}
 */

const SignupPage = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = useForm({ mode: "onChange" });

	const [isEmailChecked, setIsEmailChecked] = useState(false);
	const [isNicknameChecked, setIsNicknameChecked] = useState(false);

	const [isEmailAvailable, setIsEmailAvilabl] = useState(false);
	const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);

	const emailValue = watch("email");
	const nicknameValue = watch("nickname");

	const onSubmit = async (data) => {
		const Data = {
			email: data.email,
			password: data.password,
			nickname: data.nickname,
			phone_number: data.phoneNumber,
			location: data.location,
		};
		try {
			const response = await axios.post(`${BASE_URL}/signup`, Data);
			console.log(response, "response");
			if (response.status === 200) {
				navigate("/signin");
			}
		} catch (error) {
			console.error("회원가입 오류", error);
		}
	};

	const onEmailDup = async () => {
		if (!emailValue) {
			alert("이메일을 입력해주세요.");
			return;
		}
		const emailUrl = `${BASE_URL}/check_email?email=${encodeURIComponent(emailValue)}`;
		console.log("이메일 중복 체크", emailUrl);
		try {
			const response = await axios.get(emailUrl);
			if (response.data.isAvailable) {
				alert("사용가능한 이메일 입니다.");
				setIsEmailChecked(true);
				setIsEmailAvilabl(true);
			} else {
				alert("중복된 이메일입니다");
				setIsEmailChecked(false);
				setIsEmailAvilabl(false);
			}
			setIsEmailChecked(true);
		} catch (error) {
			console.error("중복확인 오류", error);
		}
	};
	const onNicknameDup = async () => {
		if (!nicknameValue) {
			alert("닉네임을 입력해주세요");
			return;
		}

		const nicknameUrl = `${BASE_URL}/check_nickname?nickname=${encodeURIComponent(nicknameValue)}`;
		try {
			const response = await axios.get(nicknameUrl);
			if (response.data.isAvailable) {
				alert("사용가능한 닉네임입니다");
				setIsNicknameAvailable(true);
				setIsNicknameChecked(true);
			} else {
				alert("중복된 닉네임입니다");
				setIsNicknameAvailable(false);
				setIsNicknameChecked(false);
			}
			setIsNicknameChecked(true);
		} catch (error) {
			console.error("중복확인 오류", error);
		}
	};
	// 이메일 값이 변경될 때마다 중복 확인 상태를 초기화하기 위하여 사용
	useEffect(() => {
		setIsEmailChecked(false);
	}, [emailValue]);

	useEffect(() => {
		setIsNicknameChecked(false);
	}, [nicknameValue]);

	const isSubmitDisabled =
		!isEmailChecked ||
		!isNicknameChecked ||
		!isEmailAvailable ||
		!isNicknameAvailable;

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
					// style={{ backgroundColor: COLOR.COMMON[600] }}
					disabled={isSubmitDisabled || !isValid}
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
		grid-template-columns: 1fr; // 1개의 컬럼으로 변경
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
