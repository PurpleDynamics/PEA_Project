import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
/**
 * @component
 * @parameter modalText : string - 모달컨텐츠
 * @parameter modalWidth : string ||30rem - 모달 가로사이즈
 * @parameter modalHeight : string - 모달 세로 사이즈
 * @parameter baseBtn : function - 기본 버튼 기능
 * @parameter addBTN : function - 추가 버튼 기능
 * @parameter addText : string - 추가 버튼 TEXT
 * @returns {JSX.Element}
 *
 * @description
 * 전달된 "baseBtn" 에 의해 , "확인" 클릭 시 기능작동합니다
 * 기본적으로 하나의 버튼만 보여집니다
 * "addText"이 추가 될시 화면상 왼쪽부분에 추가됩니다
 * "modalWidth","modalHeight" 전달되지않을 경우 default값 30rem , 15rem 사이즈가 출력됩니다
 * @example
 * - <Modal modalText="사용 가능한 이메일 입니다" modalWidth="25rem" modalHeight="11rem" baseBtn={BaseBtn}  addBtn={AddBtn} addText="취소" />
 */
const Modal = ({
	modalText,
	modalWidth = "30rem",
	modalHeight = "15rem",
	baseBtn,
	addBTN,
	addText,
}) => {
	return (
		<>
			<S.Wrapper width={modalWidth} height={modalHeight}>
				{modalText}
				<S.Line></S.Line>
				<S.BtnBox addText={addText}>
					{addText && <S.AddBTN onClick={addBTN}>{addText}</S.AddBTN>}
					<S.BaseBtn onClick={baseBtn}>확인</S.BaseBtn>
				</S.BtnBox>
			</S.Wrapper>
		</>
	);
};

export default Modal;
const Wrapper = styled.div`
	width: ${({ width }) => width || "30rem"};
	height: ${({ height }) => height || "15rem"};
	border: 0.1rem solid ${COLOR.COMMON[600]};
	color: ${COLOR.COMMON[400]};
	border-radius: 8px; //임의 못찾음
	display: grid;
	grid-template-rows: 50% 50%;
	align-items: center;
	justify-content: center;
	text-align: center;
	position: relative;
	font-family: "SOYO_Maple_Regular";
`;
const Line = styled.hr`
	position: absolute;
	width: 100%;
	top: 50%;
	border: none;
	height: 0.1rem;
	background-color: ${COLOR.COMMON[600]};
`;
const BtnBox = styled.div`
	display: flex;
	justify-content: ${({ addText }) => (addText ? "space-between" : "center")};
	grid-row-start: 2;
`;
const BaseBtn = styled.button`
	background-color: ${COLOR.COMMON[1000]};
	color: ${COLOR.SYSTEM.success};
	cursor: pointer;
	font-size: ${FONT_SIZE.bg};
`;
const AddBTN = styled.button`
	background-color: ${COLOR.COMMON[1000]};
	color: ${COLOR.COMMON[400]};
	cursor: pointer;
	font-size: ${FONT_SIZE.bg};
`;

const S = {
	Wrapper,
	Line,
	BtnBox,
	BaseBtn,
	AddBTN,
};
