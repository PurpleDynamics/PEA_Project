import { useRef } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Button, Input } from "../components/commons";
import { Modal } from "../components/overlay";
import { VALIDATION } from "../constants";
import { useOverlay } from "../hooks/use-overlay";
import { setChattingToken, setSessionToken } from "../libs/axios/auth";
import { postUserLogin } from "../libs/axios/base";
import { BREAK_POINT, FONT_SIZE } from "../libs/styled-components";

/**
 * @component
 * @returns {JSX.Element}
 *
 * @description
 * - 로그인 버튼 클릭시 main-page인 productListPage로 이동합니다.
 * - 회원가입 버튼 클릭시, signup-page로 이동합니다.
 * - 이메일 과 비밀번호 형식이 맞으면 로그인버튼이 활성화 됩니다.
 * - 자동로그인 체크 후 로그인시, 서버에서 넘어온 dang이란 이름을 가진 토큰 값을 cookies에 저장합니다
 * - 창을 닫고 다시 접속했을 때, cookies에 RefreshToken이 존재하면 자동으로 메인페이지로 넘어가게됩니다.
 * - 미체크후 로그인시 SessionStorage에 AccessToken이 저장됩니다.
 */

const SigninPage = () => {
	// react-cookie 훅 사용
	const [cookies, setCookie, removeCookie] = useCookies(["dang"]);
	//로그인 실패시, modal 창 나옴
	const { onOpenOverlay } = useOverlay();
	const navigate = useNavigate();

	const autoLoginRef = useRef(false);
	const {
		register,
		handleSubmit,
		formState: { errors, isValid }, // isVaild: 현재 폼의 유효성 여부
	} = useForm({ mode: "onChange" });

	const handleOpenModal = ({ noticeText, modalState }) => {
		onOpenOverlay({
			overlayComponent: Modal,
			noticeText: noticeText,
			buttonText: "확인",
			modalState: modalState,
			isFiltered: true,
		});
	};

	const onSubmit = async (data) => {
		const authData = {
			email: data.email,
			pw: data.pw,
		};
		try {
			// 로그인 시도
			const response = await postUserLogin({
				email: authData.email,
				pw: authData.pw,
			});

			// 토큰을 response.data에 tokenForHeader에서 가져옴
			const accessToken = response.data.tokenForHeader;
			const chattingToken = response.data.user.token;

			// 응답이 존재하고, 응답에 status가 있는지 확인
			if (response && response.status) {
				// 로그인 성공일 때, 세션 토큰을 token으로 저장
				setSessionToken(accessToken);
				// 로그인 성공일 때, chatting토큰을 저장
				setChattingToken({ chatToken: chattingToken });

				// autoLoginRef가 현재 true인지 확인 (자동 로그인 여부 체크)
				if (autoLoginRef.current) {
					setCookie("accessToken", accessToken, {
						path: "/",
					});
				} else {
					removeCookie("refreshToken");
				}
				navigate("/");
			}
		} catch (error) {
			// 만약 error.response와 status에 400에러가 존재하면,
			if (error.response && error.response.status === 400) {
				handleOpenModal({
					noticeText: "이메일 또는 비밀번호가 다릅니다.",
					modalState: "error",
				});
			} else {
				handleOpenModal({
					noticeText: "에러가 발생했습니다. 재접속해주세요.",
					modalState: "error",
				});
			}
		}
	};

	const onMoveSignupPage = () => {
		navigate("/signup");
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
						required: VALIDATION.COMMON_MESSAGE,
						pattern: VALIDATION.EMAIL,
					}}
					errors={errors}
				/>
				<Input
					register={register}
					titleText="비밀번호"
					registerKey="pw"
					placeholder="비밀번호를 입력하세요"
					type="password"
					validate={{
						required: VALIDATION.COMMON_MESSAGE,
						pattern: VALIDATION.PASSWORD,
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
