import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { VAILDATION } from "../../constants";
import { useOverlay } from "../../hooks";
import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import { Button, Input } from "../commons";
import Modal from "./modal";

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

	// password를 지켜보면서 실시간으로 변화하는 값을 passwordConfirm과 비교하기 위한 변수 newPassword를 정의한다.
	const newPassword = watch("password");
	const [modalType, setModalType] = useState("");
	const updatedData = useRef();
	const { onOpenOverlay } = useOverlay();

	// type="submit" 인 버튼을 눌렀을 때, modalType이 "updateInfo" 이면 data가 updatedData.current 에 저장된다.
	// password 가 입력되지 않으면, data 값에서 password 와 passwordConfirm 값을 삭제한다.
	const onSubmit = (data) => {
		if (modalType === "updateInfo") {
			if (!data.password) {
				delete data.password;
				delete data.passwordConfirm;
			}
			updatedData.current = data;
		}
	};

	// "정보 변경" 버튼에서 "확인" 버튼을 누르면 updatedData.current 에 저장한 값을 서버에 보내서 회원 정보가 수정되는 기능을 구현할 예정이다.
	const handleUpdateData = () => {};

	// 모달창을 overlay 기능으로 구현한다. 모달의 type 에 따라 "회원 탈퇴" 또는 "정보 변경" 모달을 불러온다.
	const handleOpenModal = (type) => {
		setModalType(type);

		// 에러가 있을 경우 상위의 에러가 alert 되도록 한다.
		if (type === "updateInfo" && Object.keys(errors).length) {
			const errorKeys = [
				"nickName",
				"email",
				"address",
				"phoneNumber",
				"password",
				"passwordConfirm",
			].find((key) => errors[key]);

			if (errorKeys) {
				alert(errors[errorKeys].message);
				return;
			}
		}

		onOpenOverlay({
			overlayComponent: Modal,
			position: "midCenter",
			isFiltered: true,
			isCancelButton: "true",
			noticeText:
				type === "deleteAccount"
					? "정말 탈퇴하시겠습니까?"
					: "이대로 변경하시겠습니까?",
			callbackFunc: type === "deleteAccount" ? onClose : handleUpdateData,
		});
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
					defaultValue={""}
				/>
				<Input
					titleText="이메일"
					placeholder="이메일을 입력하세요"
					defaultValue={""}
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
					defaultValue={"주소를 입력하세요"}
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
					defaultValue={""}
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
						width="13rem"
					>
						정보 변경
					</Button>
				</S.ButtonBox>
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

const S = {
	EditUserInfoWindowContainer,
	EditUserInfoForm,
	EditUserInfoTitle,
	ButtonBox,
};
