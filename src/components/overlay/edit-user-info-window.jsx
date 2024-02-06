import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { Button, Input } from "../../components/commons";
import { VAILDATION } from "../../constants";
import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import TestModal from "./testModal";

/**
 * 회원 정보 수정 오버레이 컴포넌트
 * @component
 * @parameter {Function} onClose - 오버레이를 닫는 콜백 함수
 * @returns {JSX.Element}
 *
 * @description
 * - useForm을 사용하여 폼 관리 및 유효성 검사를 수행합니다.
 * - 오버레이에서 회원 정보를 수정하고, '정보 변경' 버튼을 눌러 변경사항을 저장할 수 있습니다.
 * - '회원 탈퇴' 버튼을 눌러 탈퇴 할 수 있습니다.
 * - Input 의 value 값에는 user의 현재 회원정보가 반영됩니다.
 *
 */
const EditUserInfoWindow = ({ onClose }) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ mode: "onChange" });

	const newPassword = watch("password");

	const [isModalOpen, setModalOpen] = useState(false);
	const [modalType, setModalType] = useState("");

	const onSubmit = (data) => {
		if (modalType === "updateInfo") {
			if (!data.password) {
				delete data.password;
				delete data.passwordConfirm;
			}
			console.log("정보 변경 처리", data);
			setModalOpen(false);
		}
	};

	const handleOpenModal = (type) => {
		if (type === "deleteAccount") {
			setModalType(type);
			setModalOpen(true);
		} else if (type === "updateInfo") {
			if (!Object.keys(errors).length) {
				setModalType(type);
				setModalOpen(true);
			} else {
				const errorKeys = [
					"nickName",
					"email",
					"address",
					"phoneNumber",
					"password",
					"passwordConfirm",
				];
				for (let key of errorKeys) {
					if (errors[key]) {
						alert(errors[key].message);
						break;
					}
				}
			}
		}
	};

	const handleCancelModal = () => {
		setModalOpen(false);
	};

	const onCloseEditUserInfoWindow = () => {
		setModalOpen(false);
		if (onClose) onClose();
	};

	return (
		<S.EditUserInfoWindowContainer>
			<S.EditUserInfoForm onSubmit={handleSubmit(onSubmit)}>
				<S.EditUserInfoTitle>회원 정보 수정</S.EditUserInfoTitle>
				<Input
					titleText="닉네임"
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
					value={""}
				/>
				<Input
					titleText="이메일"
					placeholder="이메일을 입력하세요"
					value={""}
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
					titleText="주소"
					register={register}
					registerKey="address"
					placeholder="주소를 입력하세요"
					buttonText="검색"
					errors={errors}
					validate={{
						required: VAILDATION.COMMON_MESSAGE,
					}}
					value={""}
					readOnly={true}
				/>

				<Input
					titleText="휴대폰 번호"
					register={register}
					registerKey="phoneNumber"
					placeholder="휴대폰번호를 입력하세요 (-제외)"
					errors={errors}
					validate={{
						required: VAILDATION.COMMON_MESSAGE,
					}}
					value={""}
				/>

				<Input
					titleText="새 비밀번호"
					register={register}
					registerKey="password"
					placeholder="새 비밀번호를 입력하세요"
					type="password"
					errors={errors}
					validate={{
						pattern: VAILDATION.PASSWORD,
					}}
				/>
				<Input
					titleText="새 비밀번호 확인"
					register={register}
					registerKey="passwordConfirm"
					placeholder="새 비밀번호를 다시 입력하세요"
					type="password"
					errors={errors}
					validate={{
						pattern: VAILDATION.PASSWORD_CONFIRM,
						validate: (value) =>
							value === newPassword ||
							(!value && !newPassword) ||
							VAILDATION.PASSWORD_CONFIRM.message,
					}}
				/>
				<S.ButtonBox>
					<Button
						onClick={() => handleOpenModal("deleteAccount")}
						width="13rem"
					>
						회원 탈퇴
					</Button>
					<Button
						onClick={() => handleOpenModal("updateInfo")}
						type="button"
						width="13rem"
					>
						정보 변경
					</Button>
				</S.ButtonBox>
				{isModalOpen && (
					<S.ModalContainer>
						<TestModal
							modalType={modalType}
							onSubmit={handleSubmit(onSubmit)}
							onCancel={handleCancelModal}
							onClose={onCloseEditUserInfoWindow}
						/>
					</S.ModalContainer>
				)}
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
	margin-bottom: 6rem;
	font-size: ${FONT_SIZE.xl};
	color: ${COLOR.COMMON[0]};
	text-align: center;
`;

const ButtonBox = styled.div`
	display: flex;
	width: 30rem;
	justify-content: space-between;
	margin-top: 1rem;
`;

const ModalContainer = styled.div`
	position: absolute;
	background-color: blue;
	top: 50%;
	transform: translate(0, -50%);
	width: 30rem;
	text-align: center;
	height: 15rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const S = {
	EditUserInfoWindowContainer,
	EditUserInfoForm,
	EditUserInfoTitle,
	ButtonBox,
	ModalContainer,
};
