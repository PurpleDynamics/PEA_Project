import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Button, Input } from "../components/commons";
import { VAILDATION } from "../constants";
import { BREAK_POINT, COLOR } from "../libs/styled-components";

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
		validate,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onChange" });
	const onSubmit = () => {
		navigate("/signin");
	};
	return (
		<S.MainWrapper>
			<S.ImageContainer>
				<S.LogoImage src="https://buly.kr/74To5Al" />
			</S.ImageContainer>
			<S.TextInputForm onSubmit={handleSubmit(onSubmit)}>
				<S.TitleText>P.E.A</S.TitleText>
				<Input
					register={register}
					titleText="이메일"
					registerKey="email"
					placeholder="이메일을 입력하세요"
					buttonText="중복확인"
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
					registerKey="nickName"
					placeholder="닉네임을 입력하세요"
					buttonText="중복확인"
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
					registerKey="address"
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
					style={{ backgroundColor: COLOR.COMMON[600] }}
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
const LogoImage = styled.img`
	width: 50rem;
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
	LogoImage,
	TextInputForm,
	TitleText,
};
