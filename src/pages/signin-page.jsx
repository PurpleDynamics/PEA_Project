import axios from "axios";
import { useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Button, Input } from "../components/commons";
import { Modal } from "../components/overlay";
import { VAILDATION } from "../constants";
import { useOverlay } from "../hooks/use-overlay";
import { BREAK_POINT, FONT_SIZE } from "../libs/styled-components";
import { setLocalToken, setSessionToken } from "../utils";

const BASE_URL = "http://49.165.177.17:3055";

/**
 * @component
 * @returns {JSX.Element}
 *
 * @description
 * - 로그인 버튼 클릭시 main-page인 productListPage로 이동합니다.
 * - 회원가입 버튼 클릭시, signup-page로 이동합니다.
 * - 이메일 과 비밀번호 형식이 맞으면 로그인버튼이 활성화 됩니다.
 * - 자동로그인 체크후 로그인시, LocalStorage에 저장되고 미체크후 로그인시 SessionStorage에 저장됩니다.
 *
 * @example 참고해주세요!
 * - email: test1@test.test
 * - password: qwer1234
 */

const SigninPage = () => {
	//로그인 실패시, modal 창 나옴
	const { onOpenOverlay } = useOverlay();
	const handleOpenModal = () => {
		onOpenOverlay({
			overlayComponent: Modal,
			modalContents: ModalContents,
			isFiltered: true,
		});
	};

	const ModalContents = useCallback(() => {
		return <div>로그인에 실패하였습니다.</div>;
	}, []);

	const navigate = useNavigate();
	const onMoveSignupPage = () => {
		navigate("/signup");
	};
	const autoLoginRef = useRef(false);
	const {
		register,
		handleSubmit,
		formState: { errors, isValid }, // isVaild: 현재 폼의 유효성 여부
	} = useForm({ mode: "onChange" });
	const onSubmit = async (data) => {
		const authData = {
			email: data.email,
			password: data.password,
		};
		try {
			const response = await axios.post(`${BASE_URL}/signin`, authData);
			const token = response.data.token;

			// 로그인이 성공적이고, 자동로그인 체크시 localStorage에 , 미체크시 sessionStorage에 토큰이 저장
			if (response.status === 200) {
				if (autoLoginRef.current) {
					setLocalToken({ token: token });
				} else {
					setSessionToken({ token: token });
				}
				navigate("/");
			}
		} catch {
			handleOpenModal();
		}
	};

	return (
		<S.MainWrapper>
			<S.ImageContainer>
				<img width="440rem" src="https://url.kr/f7bvik" />
			</S.ImageContainer>
			<S.TextInputForm onSubmit={handleSubmit(onSubmit)}>
				<Input
					register={register}
					titleText="이메일"
					registerKey="email"
					placeholder="이메일을 입력하세요"
					validate={{
						required: VAILDATION.COMMON_MESSAGE,
						pattern: VAILDATION.EMAIL,
					}}
					errors={errors}
				/>
				<Input
					register={register}
					titleText="비밀번호"
					registerKey="password"
					placeholder="비밀번호를 입력하세요"
					type="password"
					validate={{
						required: VAILDATION.COMMON_MESSAGE,
						pattern: VAILDATION.PASSWORD,
					}}
					errors={errors}
				/>
				<S.CheckboxWrapper>
					<S.CheckboxInput
						type="checkbox"
						onChange={(e) =>
							(autoLoginRef.current = e.target.checked)
						}
					/>
					<S.CheckboxText>자동로그인</S.CheckboxText>
				</S.CheckboxWrapper>
				<S.ButtonWrapper>
					<Button type="submit" width="30rem" disabled={!isValid}>
						로그인
					</Button>
					<Button
						onClick={onMoveSignupPage}
						type="button"
						width="30rem"
					>
						회원가입
					</Button>
				</S.ButtonWrapper>
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
const CheckboxWrapper = styled.div`
	margin-left: 20rem;
	display: flex;
	gap: 0.5rem;
`;
const CheckboxInput = styled.input`
	width: 2.5rem;
	height: 2.5rem;
`;
const CheckboxText = styled.div`
	font-size: ${FONT_SIZE.sm};
	display: flex;
	align-items: center;
`;
const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 6.5rem;
	gap: 1.5rem;
`;

const S = {
	MainWrapper,
	ImageContainer,
	CheckboxWrapper,
	CheckboxInput,
	CheckboxText,
	TextInputForm,
	ButtonWrapper,
};
