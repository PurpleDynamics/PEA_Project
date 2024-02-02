import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Button, Input } from "../components/commons";
import { COLOR } from "../libs/styled-components";

/**
 * @components
 * @parameter handleSubmit : form state에 관한 정보를 담고있는 객체입니다
 * @parameter register : input 요소를 리액트훅폼과 연결헤 검증규칙을 적용할수있게하는 메소드입니다
 * @parameter formState : form state에관한 정보를 담고있는 객체입니다
 * @returns {JSX.Element}
 */

const SigninPage = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		validate,
		formState: { errors },
	} = useForm({ mode: "onChange" });
	const onMoveSignPage = () => {
		navigate("/signin");
	};
	return (
		<>
			<S.CenterContainer>
				<S.MainWrapper>
					<S.ImageContainer>
						<S.LogoImage src="https://buly.kr/74To5Al" />
					</S.ImageContainer>
					<S.TextInputForm>
						<S.TitleText>P.E.A</S.TitleText>
						<Input
							register={register}
							titleText="이메일"
							registerKey="email"
							placeholder="이메일을 입력하세요"
							buttonText="중복확인"
							errors={errors}
							validate={{
								required: "필수 응답 항목입니다.",
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
									message: "이메일 형식이 아닙니다.",
								},
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
								required: "필수 응답 항목입니다.",
								pattern: {
									value: /^(.{8,})$/,
									message: "8글자이상 입력해주세요",
								},
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
								required: "필수 응답 항목입니다.",
								pattern: {
									message: "비밀번호가 일치하지 않습니다",
								},
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
								required: "필수 응답 항목입니다.",
								pattern: {
									value: /^[a-zA-Z0-9]*$/,
									message: "특수문자는 사용할 수 없습니다",
								},
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
								required: "필수 응답 항목입니다.",
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
								required: "필수 응답 항목입니다.",
							}}
						/>
						<Button
							type="button"
							width="48%"
							style={{ backgroundColor: COLOR.COMMON[600] }}
							onClick={onMoveSignPage}
						>
							가입하기
						</Button>
					</S.TextInputForm>
				</S.MainWrapper>
			</S.CenterContainer>
		</>
	);
};
export default SigninPage;

const CenterContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const MainWrapper = styled.div`
	width: 125rem;
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr 1fr;
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
	CenterContainer,
	MainWrapper,
	ImageContainer,
	LogoImage,
	TextInputForm,
	TitleText,
};
