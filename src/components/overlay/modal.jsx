import styled, { css } from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
/**
 * @component
 * @parameter ModalContents : JSX.Element - 모달의 제목 + 내용 전달 바랍니다
 * @parameter $modalWidth : string || 30rem- 모달 가로사이즈
 * @parameter onClickBaseBtn : function - 기본 버튼의 기능
 * @parameter addText : string - 추가되는 버튼 TEXT
 * @parameter onClickAddBtn : function - 추가되는 버튼의 기능
 * @parameter onClose : function 모달을 끄는 기능
 * @returns {JSX.Element}
 *
 * @description
 * 전달된 ModalContents 를통해 모달의 height가 늘어나고 기능을추가 사용가능하게 하기위해 컴포넌트로 작성되있습니다
 * 전달된 "baseBtn" 에 의해 , "확인" 클릭 시 기능작동합니다
 * 기본적으로 하나의 버튼만 보여집니다
 * "addText"이 추가 될시 화면상 왼쪽부분에 추가됩니다
 * "modalWidth"전달되지않을 경우 default값 30rem 사이즈가 출력됩니다
 * overlay 를 통해 modal사용시 baseBtn에서
 * @example
 * - <Modal modalText="사용 가능한 이메일 입니다 modalContents={ModalContents} "$modalWidth="40rem" baseBtn={BaseBtn} addBtn={AddBtn} addText="취소" />
 */
const Modal = ({
	modalContents: ModalContents,
	$modalWidth = "30rem",
	onClickBaseBtn,
	onClickAddBtn,
	addText, //addText가 전달되지않을경우 버튼은 baseBtn만 작동및 ui로 나타납니다
	onClose,
}) => {
	return (
		<S.Wrapper width={$modalWidth}>
			<S.ModalContentBox>
				<ModalContents />
			</S.ModalContentBox>
			<S.BtnBox addText={addText}>
				{addText && (
					<S.AddBtn onClick={onClickAddBtn}>{addText}</S.AddBtn>
				)}
				<S.BaseBtn
					onClick={() => {
						onClickBaseBtn();
						onClose();
					}}
				>
					확인
				</S.BaseBtn>
			</S.BtnBox>
		</S.Wrapper>
	);
};

export default Modal;

const Wrapper = styled.div`
	width: ${({ width }) => {
		return width;
	}};
	height: fit-content;
	border-radius: 8px;
	border: 0.1rem solid ${COLOR.COMMON[600]};
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	display: grid;
	color: ${COLOR.COMMON[400]};
	grid-template-columns: 1fr;
	grid-template-rows: auto auto;
	font-family: "SOYO_Maple_Regular";
`;
const ModalContentBox = styled.div`
	width: 100%;
	height: 100%;
	min-height: 7rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const BtnBox = styled.div`
	width: 100%;
	min-height: 7rem;
	height: 100%;
	border-top: 1px solid ${COLOR.COMMON[600]};
	display: flex;
	justify-content: ${({ addText }) => {
		return addText ? "space-between" : "center";
	}};
	font-size: ${FONT_SIZE.bg};
`;
const buttonStyle = css`
	width: 100%;
	background-color: ${COLOR.COMMON[1000]};
	cursor: pointer;
`;
const BaseBtn = styled.button`
	${buttonStyle}
	color: ${COLOR.SYSTEM.success};
	border-radius: ${({ addText }) => (addText ? "0 8px 8px 0" : "8px")};
`;
const AddBtn = styled.button`
	${buttonStyle}
	color: ${COLOR.COMMON[400]};
	border-radius: 8px 0 0 8px;
`;

const S = {
	Wrapper,
	ModalContentBox,
	BtnBox,
	BaseBtn,
	AddBtn,
};
