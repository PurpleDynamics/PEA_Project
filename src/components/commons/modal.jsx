import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
/**
 * @component
 * @parameter ModalContents : JSX.Element - 모달의 제목 + 내용 전달 바랍니다
 * @parameter modalWidth : string || 30rem- 모달 가로사이즈
 * @parameter modalHeight : string - 모달 세로 사이즈
 * @parameter baseBtn : function - 기본 버튼 기능
 * @parameter addBtn : function - 추가 버튼 기능
 * @parameter addText : string - 추가 버튼 TEXT
 * @returns {JSX.Element}
 *
 * @description
 * 전달된 ModalContents 를통해 모달의 height가 늘어나고 기능을추가 사용가능하게 하기위해 컴포넌트로 작성되있습니다
 * 전달된 "baseBtn" 에 의해 , "확인" 클릭 시 기능작동합니다
 * 기본적으로 하나의 버튼만 보여집니다
 * "addText"이 추가 될시 화면상 왼쪽부분에 추가됩니다
 * "modalWidth"전달되지않을 경우 default값 30rem 사이즈가 출력됩니다
 * @example
 * - <Modal modalText="사용 가능한 이메일 입니다 modalContents={ModalContents} "modalWidth="30rem" baseBtn={BaseBtn} addBtn={AddBtn} addText="취소" />
 */
const Modal = ({
	modalContents: ModalContents,
	modalWidth = "30rem",
	baseBtn,
	addBtn,
	addText,
}) => {
	return (
		<S.Wrapper width={modalWidth}>
			<S.ModalContentBox>
				<ModalContents />
			</S.ModalContentBox>
			<S.BtnBox addText={addText}>
				{addText && <S.AddBtn onClick={addBtn}>{addText}</S.AddBtn>}
				<S.BaseBtn onClick={baseBtn}>확인</S.BaseBtn>
			</S.BtnBox>
		</S.Wrapper>
	);
};
// 모달기본 height 가 전달받고
//원하는건 1 : 2없을시 절반최소 줘서 2번이 커지면  min사이즈 까지 줄이기평소에는 default=1절반 2 : 3 : 1과동일 그리고 사이즈 조절가능하게??
export default Modal;
const Wrapper = styled.div`
	width: ${({ width }) => {
		return width;
	}};

	height: fit-content;
	min-height: 14rem;
	border: 0.1rem solid ${COLOR.COMMON[600]};
	color: ${COLOR.COMMON[400]};
	border-radius: 8px;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto auto;
	font-family: "SOYO_Maple_Regular";
`;
const ModalContentBox = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const BtnBox = styled.div`
	width: 100%;
	height: 100%;
	border-top: 1px solid ${COLOR.COMMON[600]};
	display: flex;
	justify-content: ${({ addText }) => {
		return addText ? "space-between" : "center";
	}};
	font-size: ${FONT_SIZE.bg};
	cursor: pointer;
`;
const BaseBtn = styled.button`
	background-color: ${COLOR.COMMON[1000]};
	color: ${COLOR.SYSTEM.success};
`;
const AddBtn = styled.button`
	background-color: ${COLOR.COMMON[1000]};
	color: ${COLOR.COMMON[400]};
`;

const S = {
	Wrapper,
	ModalContentBox,
	BtnBox,
	BaseBtn,
	AddBtn,
};
