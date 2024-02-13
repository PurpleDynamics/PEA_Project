import styled, { css } from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
/**
 * @component
 * @parameter ModalContents : JSX.Element - 모달의 제목 + 내용 전달 바랍니다
 * @parameter modalWidth : string || 30rem- 모달 가로사이즈
 * @parameter onClickBaseButton : function - 기본 버튼의 기능
 * @parameter addButtonText : string - 추가되는 버튼 TEXT
 * @parameter onClickAddButton : function - 추가되는 버튼의 기능
 * @parameter onClose : function - 모달을 끄는 기능
 * @returns {JSX.Element}
 *
 * @description
 * - overlay사용해서 modal사용해야됩니다
 * - 전달된 ModalContents 를통해 모달의 height가 늘어나고 기능을추가 사용가능하게 하기위해 컴포넌트로 작성되있습니다
 * - 전달된 "baseButton" 에 의해 , "확인" 클릭 시 기능작동합니다
 * - 기본적으로 하나의 버튼만 보여집니다
 * - "addText"이 추가 될시 화면상 왼쪽부분에 추가됩니다
 * - "modalWidth"전달되지않을 경우 default값 30rem 사이즈가 출력됩니다
 * - modal사용시 baseButton 과 addButton에서 onClose가 기본적으로 들어가있습니다
 * - ModalContentsBox와ButtonBox 의 min-height는 7rem으로 설정했고 ModalContentsBox는 contnet에따라 늘어납니다
 * @example
 * - const ModalContents=()=>{} 
 * - const { onOpenOverlay } = useOverlay();
 * const onButtonClick = () => {
      onOpenOverlay({
         overlayComponent: Modal,
         modalContents: ModalContents,
         modalWith: "40rem",
         onClickBaseButton: 함수,
      });
   };
 * - <button onClick={onButtonClick}>이 버튼 누르면 나온다.</button>
 */
const Modal = ({
	modalContents: ModalContents,
	modalWidth = "30rem",
	onClickBaseButton,
	onClickAddButton,
	addButtonText, //addText가 전달되지않을경우 버튼은 baseButton만 작동및 ui로 나타납니다
	onClose,
}) => {
	return (
		<S.Wrapper $width={modalWidth}>
			<S.ModalContentBox>
				<ModalContents />
			</S.ModalContentBox>
			<S.ButtonBox $addButtonText={addButtonText}>
				{addButtonText && (
					<S.AddButton
						onClick={() => {
							onClickAddButton();
							onClose();
						}}
					>
						{addButtonText}
					</S.AddButton>
				)}
				<S.BaseButton
					onClick={() => {
						onClickBaseButton && onClickBaseButton();
						onClose();
					}}
				>
					확인
				</S.BaseButton>
			</S.ButtonBox>
		</S.Wrapper>
	);
};

export default Modal;

const Wrapper = styled.div`
	width: ${({ $width }) => $width};
	height: fit-content;
	min-height: 14rem;
	border-radius: 8px;
	border: 0.1rem solid ${COLOR.COMMON[600]};
	flex-direction: column;
	display: grid;
	color: ${COLOR.COMMON[400]};
	grid-template: auto 7rem /1fr;
	font-family: "SOYO_Maple_Regular";
	background-color: ${COLOR.COMMON[1000]};
`;
const ModalContentBox = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const ButtonBox = styled.div`
	width: 100%;
	height: 100%;
	border-top: 1px solid ${COLOR.COMMON[600]};
	display: flex;
	justify-content: ${({ $addButtonText }) => {
		$addButtonText ? "space-between" : "center";
	}};
	font-size: ${FONT_SIZE.bg};
`;
const buttonStyle = css`
	width: 100%;
	background-color: ${COLOR.COMMON[1000]};
	cursor: pointer;
`;
const BaseButton = styled.button`
	${buttonStyle}
	color: ${COLOR.SYSTEM.success};
	border-radius: ${({ $addButtonText }) =>
		$addButtonText ? "0 8px 8px 0" : "8px"};
`;
const AddButton = styled.button`
	${buttonStyle}
	color: ${COLOR.COMMON[400]};
	border-radius: 8px 0 0 8px;
`;

const S = {
	Wrapper,
	ModalContentBox,
	ButtonBox,
	BaseButton,
	AddButton,
};
