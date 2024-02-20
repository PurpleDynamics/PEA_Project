import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";

/**
 * @component
 * @parameter noticeText : string - 모달 상단에 적힐 텍스트
 * @parameter buttonText : string - 버튼에 적힐 텍스트
 * @parameter modalState : "success" | "alert" | "error" - 모달 상태 (버튼 색상이 변경)
 * @parameter isCancelButton : boolean - 취소 버튼이 있는지 여부 (취소 버튼 클릭 시, 모달 close)
 * @parameter callbackFunc : function - 취소 버튼 외 버튼 클릭 시 실행될 추가 로직
 * @returns {JSX.Element}
 * @description
 * - 취소 버튼 클릭 시, 모달이 닫힙니다.
 * - 클릭되는 버튼이 "취소" 가 아니라면, callbackFunc 으로 전달되는 로직 실행과 함께 모달이 닫힙니다.
 * - modalState 값에 따라 버튼의 색상이 달라집니다.
 */
const Modal = ({
	noticeText = "",
	buttonText = "확인",
	modalState = "success",
	isCancelButton = false,
	callbackFunc = () => {},
	onClose,
}) => {
	const onClickAccess = () => {
		callbackFunc();
		onClose();
	};
	return (
		<S.Wrapper>
			<S.NoticeTextSection>{noticeText}</S.NoticeTextSection>
			<S.ButtonWrapper>
				{isCancelButton ? (
					<>
						<S.ModalButton
							$color={COLOR.COMMON[600]}
							onClick={onClose}
						>
							취소
						</S.ModalButton>
						<S.ModalButton
							$color={COLOR.SYSTEM[modalState]}
							onClick={onClickAccess}
						>
							{buttonText}
						</S.ModalButton>
					</>
				) : (
					<S.ModalButton
						$color={COLOR.SYSTEM[modalState]}
						onClick={onClickAccess}
					>
						{buttonText}
					</S.ModalButton>
				)}
			</S.ButtonWrapper>
		</S.Wrapper>
	);
};

export default Modal;

const Wrapper = styled.div`
	width: 40rem;
	height: fit-content;
	min-height: 20rem;
	border: 1px solid ${COLOR.COMMON[800]};
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	color: ${COLOR.COMMON[400]};
	background-color: ${COLOR.COMMON[1000]};
	font-family: "SOYO_Maple_Regular";
`;
const NoticeTextSection = styled.section`
	width: 100%;
	height: 100%;
	min-height: 15rem;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	overflow-wrap: break-all;
	padding: 1rem;
`;
const ButtonWrapper = styled.div`
	width: 100%;
	height: 5rem;
	border-top: 1px solid ${COLOR.COMMON[800]};
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const ModalButton = styled.button`
	width: 100%;
	height: 100%;
	color: ${({ $color }) => $color};
	background-color: transparent;
	&:hover {
		color: ${COLOR.COMMON[400]};
	}
	cursor: pointer;
`;

const S = {
	Wrapper,
	NoticeTextSection,
	ButtonWrapper,
	ModalButton,
};
