import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Button, Input } from "../components/commons";
import { BREAK_POINT, COLOR, FONT_SIZE } from "../libs/styled-components";

/**
 * @components
 * @parameter register : input 요소를 리액트훅폼과 연결헤 검증규칙을 적용할수있게하는 메소드입니다
 * @parameter formState : form state에관한 정보를 담고있는 객체입니다
 * @returns {JSX.Element}
 *
 */

const SigninPage = () => {
	const navigate = useNavigate();
	const {
		register,
		validate,
		formState: { errors, isValid, dirtyFields },
	} = useForm({ mode: "onChange" });
	const onMoveSignupPage = () => {
		navigate("/signup");
	};

	return (
		<S.MainWrapper>
			<S.ImageContainer>
				<S.LogoImage src="https://url.kr/f7bvik" />
			</S.ImageContainer>
			<S.TextInputForm>
				<Input
					register={register}
					titleText="이메일"
					registerKey="email"
					placeholder="이메일을 입력하세요"
					// validate={{
					// 	required: ""
					// }}
					errors={errors}
				/>
				<Input
					register={register}
					titleText="비밀번호"
					registerKey="password"
					placeholder="비밀번호를 입력하세요"
					type="password"
					errors={errors}
				/>
				<CheckboxWrapper>
					<CheckBoxinput type="checkbox" />
					<CheckBoxText>자동로그인</CheckBoxText>
				</CheckboxWrapper>
				<Button
					type="submit"
					width="30rem"
					style={{
						backgroundColor:
							dirtyFields.email && dirtyFields.password
								? COLOR.COMMON[300]
								: COLOR.COMMON[600],
					}}
					disabled={!isValid}
				>
					로그인
				</Button>
				<Button onClick={onMoveSignupPage} type="button" width="30rem">
					회원가입
				</Button>
			</S.TextInputForm>
		</S.MainWrapper>
	);
};
export default SigninPage;

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
const CheckboxWrapper = styled.div`
	margin-left: 20rem;
	display: flex;
	gap: 0.5rem;
`;
const CheckBoxinput = styled.input`
	width: 2.5rem;
	height: 2.5rem;
`;
const CheckBoxText = styled.div`
	font-size: ${FONT_SIZE.sm};
	display: flex;
	align-items: center;
`;

const S = {
	MainWrapper,
	ImageContainer,
	LogoImage,
	CheckboxWrapper,
	CheckBoxinput,
	CheckBoxText,
	TextInputForm,
};
