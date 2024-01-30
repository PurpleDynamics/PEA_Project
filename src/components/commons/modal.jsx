import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
/**
 * @component
 * @parameter modalText : string - 모달컨텐츠
 * @parameter modalWidth : string - 모달 가로사이즈
 * @parameter modalHeight : string - 모달 세로 사이즈
 * @parameter baseBtn : function - 기본 버튼 기능
 * @parameter baseText : string - 기본 버튼 TEXT
 * @parameter addBTN : function - 추가 버튼 기능
 * @parameter addText : string - 추가 버튼 TEXT
 * 
 * @returns {JSX.Element}
 *
 * @description
 *
 * @example
 * - <Modal modalText="사용 가능한 이메일 입니다" modalWidth="250px" modalHeight="110px" baseBtn={BaseBtn} baseText="확인" addBtn={AddBtn} addText="취소" />
 * - const Success = () => {};
 * - const Cancel = () => {};

 */
const Modal = ({
	modalText,
	modalWidth,
	modalHeight,
	baseBtn,
	baseText,
	addBTN,
	addText,
}) => {
	return (
		<>
			<S.Wrapper width={modalWidth} height={modalHeight}>
				{modalText}
				<S.Line></S.Line>
				<S.BtnBox cancelText={cancelText}>
					{addText && <S.AddBTN onClick={addBTN}>{addText}</S.AddBTN>}
					<S.BaseBtn onClick={baseBtn}>{baseText}</S.BaseBtn>
				</S.BtnBox>
			</S.Wrapper>
		</>
	);
};
0;
export default Modal;
const Wrapper = styled.div`
	width: ${({ width }) => width || "300px"}; //사이즈 글씨에 따라 변형
	height: ${({ height }) => height || "150px"};
	border: 0.1rem solid ${COLOR.COMMON[600]};
	color: ${COLOR.COMMON[400]};
	border-radius: 8px; //임의 못찾음
	display: grid;
	grid-template-rows: 50% 50%;
	align-items: center;
	justify-content: center;
	position: relative;
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
`;
const AddBTN = styled.button`
	background-color: ${COLOR.COMMON[1000]};
	color: ${COLOR.COMMON[400]};
`;

const S = {
	Wrapper,
	Line,
	BtnBox,
	BaseBtn,
	AddBTN,
};
