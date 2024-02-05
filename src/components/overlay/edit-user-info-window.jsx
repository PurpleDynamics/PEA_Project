import { useForm } from "react-hook-form";
import styled from "styled-components";

import { Button, Input } from "../../components/commons";
import { VAILDATION } from "../../constants";
import { COLOR, FONT_SIZE } from "../../libs/styled-components";
/**
 * 회원 정보 수정 모달 컴포넌트
 * @component
 * @parameter {Function} onClose - 모달을 닫는 콜백 함수
 * @returns {JSX.Element}
 *
 * @description
 * - useForm을 사용하여 폼 관리 및 유효성 검사를 수행합니다.
 * - 모달 창 내부에서 회원 정보를 수정하고, '정보 변경' 버튼을 눌러 변경사항을 저장할 수 있습니다.
 *
 *
 */
const EditUserInfoWindow = ({ onClose }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onChange" });

	const onSubmit = (data) => {
		console.log("Updated User Info:", data);
		onClose();
	};

	return (
		<S.EditUserInfoWindowContainer>
			<S.EditUserInfoForm onSubmit={handleSubmit(onSubmit)}>
				<S.EditUserInfoTitle>회원 정보 수정</S.EditUserInfoTitle>
				<S.EditUserInfoCaution>
					<S.Span>*필수항목</S.Span>은 꼭 입력해주세요
				</S.EditUserInfoCaution>
				<S.EditUserInfoInputFields>
					<Input
						EditUserInfoTitleText={
							<>
								<S.Span>*</S.Span>
								닉네임
							</>
						}
						register={register}
						registerKey="nickName"
						placeholder="닉네임을 입력하세요"
						buttonText="중복확인"
						errors={errors}
						validate={{
							required: VAILDATION.COMMON_MESSAGE,
							pattern: VAILDATION.NICKNAME,
						}}
						autoComplete="off"
						defaultValue={"유저닉네임로딩"}
					/>
					<Input
						EditUserInfoTitleText={
							<>
								<S.Span>*</S.Span>
								이메일
							</>
						}
						placeholder="이메일을 입력하세요"
						value={"유저이메일로딩@api.com"}
						errors={errors}
						validate={{
							required: VAILDATION.COMMON_MESSAGE,
							pattern: VAILDATION.EMAIL,
						}}
						readOnly={true}
						borderBoxStyle={{ backgroundColor: COLOR.COMMON[800] }}
						style={{ backgroundColor: COLOR.COMMON[800] }}
					/>
					<Input
						EditUserInfoTitleText={
							<>
								<S.Span>*</S.Span>
								주소
							</>
						}
						register={register}
						registerKey="address"
						placeholder="주소를 입력하세요"
						buttonText="검색"
						errors={errors}
						validate={{
							required: VAILDATION.COMMON_MESSAGE,
						}}
						defaultValue={"주소로딩"}
					/>

					<Input
						EditUserInfoTitleText={
							<>
								<S.Span>*</S.Span>
								휴대폰 번호
							</>
						}
						register={register}
						registerKey="phoneNumber"
						placeholder="휴대폰번호를 입력하세요 (-제외)"
						errors={errors}
						validate={{
							required: VAILDATION.COMMON_MESSAGE,
						}}
						defaultValue={"휴대폰번호로딩"}
					/>

					<Input
						EditUserInfoTitleText="새 비밀번호"
						register={register}
						registerKey="password"
						placeholder="새 비밀번호를 입력하세요"
						type="password"
						errors={errors}
						validate={{
							required: VAILDATION.COMMON_MESSAGE,
							pattern: VAILDATION.PASSWORD,
						}}
					/>
					<Input
						EditUserInfoTitleText="새 비밀번호 확인"
						register={register}
						registerKey="passwordConfirm"
						placeholder="새 비밀번호를 다시 입력하세요"
						type="password"
						errors={errors}
						validate={{
							required: VAILDATION.COMMON_MESSAGE,
							pattern: VAILDATION.PASSWORD_CONFIRM,
						}}
					/>
					<S.Buttons>
						<Button type="submit" width="13rem">
							회원 탈퇴
						</Button>
						<Button type="submit" width="13rem">
							정보 변경
						</Button>
					</S.Buttons>
				</S.EditUserInfoInputFields>
			</S.EditUserInfoForm>
		</S.EditUserInfoWindowContainer>
	);
};
export default EditUserInfoWindow;

const EditUserInfoWindowContainer = styled.div`
	width: 80rem;
	max-height: 100vh;
	overflow-y: auto;
	background-color: ${COLOR.COMMON[1000]};
	padding: 2rem;
	border-radius: 3.8rem;
	box-shadow: 0px 0.4rem 0.8rem rgba(${COLOR.COMMON[0]}, 0.1);
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const EditUserInfoForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 50%;
	align-items: center;
`;

const EditUserInfoTitle = styled.div`
	margin-bottom: 2rem;
	font-size: ${FONT_SIZE.xl};
	color: ${COLOR.COMMON[0]};
	text-align: center;
`;

const Span = styled.span`
	color: ${COLOR.PALETTE.magenta.base};
`;

const EditUserInfoCaution = styled.div`
	margin-bottom: 3rem;
	font-size: ${FONT_SIZE.sm};
	width: 17rem;
	margin-left: 18rem;

	span {
		font-size: ${FONT_SIZE.sm};
	}
`;

const EditUserInfoInputFields = styled.div`
	align-self: center;
`;

const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 1rem;
`;

const S = {
	EditUserInfoWindowContainer,
	EditUserInfoForm,
	EditUserInfoTitle,
	Span,
	EditUserInfoCaution,
	EditUserInfoInputFields,
	Buttons,
};
