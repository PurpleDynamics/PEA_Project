import { useForm } from "react-hook-form";
import styled from "styled-components";

import { Button, Input } from "../../components/commons";
import { VAILDATION } from "../../constants";
import { COLOR } from "../../libs/styled-components";
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
		<S.Container>
			<S.Form onSubmit={handleSubmit(onSubmit)}>
				<S.Title>회원 정보 수정</S.Title>
				<S.Caution>
					<span style={{ fontSize: "1.2rem", color: "red" }}>
						*필수항목
					</span>
					은 꼭 입력해주세요
				</S.Caution>
				<S.Fields>
					<Input
						titleText={
							<>
								<span style={{ color: "red" }}>*</span>
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
						titleText={
							<>
								<span style={{ color: "red" }}>*</span>
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
						borderBoxStyle={{ backgroundColor: "gray" }}
						style={{ backgroundColor: "gray" }}
					/>
					<Input
						titleText={
							<>
								<span style={{ color: "red" }}>*</span>
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
						titleText={
							<>
								<span style={{ color: "red" }}>*</span>
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
						titleText="새 비밀번호"
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
						titleText="새 비밀번호 확인"
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
						<Button
							type="submit"
							width="13rem"
							style={{ backgroundColor: COLOR.COMMON[600] }}
						>
							회원 탈퇴
						</Button>
						<Button
							type="submit"
							width="13rem"
							style={{ backgroundColor: COLOR.COMMON[600] }}
						>
							정보 변경
						</Button>
					</S.Buttons>
				</S.Fields>
			</S.Form>
		</S.Container>
	);
};
export default EditUserInfoWindow;

const Container = styled.div`
	width: 50%;
	height: 90%;
	background-color: white;
	padding: 70px;
	border-radius: 38px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 50%;
`;

const Title = styled.div`
	margin-bottom: 20px;
	font-size: 3rem;
	color: black;
	text-align: center;
`;

const Caution = styled.div`
	margin-bottom: 30px;
	font-size: 1.2rem;
	text-align: right;
`;

const Fields = styled.div`
	align-self: center;
`;

const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 12px;
`;

const S = {
	Container,
	Form,
	Title,
	Caution,
	Fields,
	Buttons,
};
