import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";

/**
 * @component
 * @parameter width : string - 너비 수치 + 단위
 * @parameter titleText : string - 입력받아야 할 항목의 제목
 * @parameter buttonText : string - Input 컴포넌트 내부에 버튼이 있어야할 경우, 버튼에 적힐 텍스트
 * @parameter unitText : string - 단위가 필요할 경우, 해당 단위 ( 화페 단위(원), 상품 갯수(개) 등 )
 * @parameter register : function - react-hook-form 을 통해 유효성 검사 규칙을 적용해야 할 등록 함수
 * @parameter validate : object - 유효성 검사 규칙
 * @parameter errors : object - error message 가 담길 객체
 * @parameter handleButton : function - Input 컴포넌트 내부에 버튼이 있어야할 경우, 버튼 클릭 이벤트를 처리할 콜백함수
 * @returns {JSX.Element}
 *
 * @description
 * - 시용자 입력에 대하여 유효성 검사 및 검사 실패 시 에러메시지가 출력되는 컴포넌트입니다.
 * - react-hook-form 라이브러리 사용을 전제합니다.
 * - 'unitText' 값이 전달될 시, 입력값이 우측 정렬되어 출력되며, 해당 단위가 출력됩니다.
 * - 'buttonText' 값이 전달될 시, 해당 컴포넌트 내부 우측에 해당 텍스트 내용이 담긴, button 이 생성됩니다.
 * - 'disabled' 상태 시, 입력을 할 수 없습니다.
 */
const Input = ({
	width = "30rem",
	titleText = " ",
	buttonText = "",
	unitText = "",
	register = () => {},
	validate = {},
	errors = {},
	handleButton = () => {},
	...rest
}) => {
	return (
		<S.InputWrapper $width={width}>
			{titleText && <S.Title>{titleText}</S.Title>}
			<S.BorderBox>
				<S.BorderInput
					$align={unitText.length ? "right" : "left"} // 'unitText' 값이 있다면, 텍스트 우측 정렬됩니다.
					{...register(titleText, validate)}
					{...rest}
				/>
				{
					unitText && <p>{unitText}</p> // 'unitText' 값이 있다면, 입력값 우측에 해당 단위가 출력됩니다.
				}
				{buttonText.trim() && (
					<S.TextButton
						onClick={(e) => {
							handleButton();
							e.preventDefault(); // form 태그 내부에 작성된 버튼이기 때문에, 제출 이벤트를 방지합니다.
						}}
					>
						{buttonText.trim()}
					</S.TextButton>
				)}
			</S.BorderBox>
			<S.Error>{errors[titleText] && errors[titleText].message}</S.Error>
		</S.InputWrapper>
	);
};

export default Input;

const InputWrapper = styled.div`
	height: auto;
	display: grid;
	grid-template-rows: auto auto auto;
	grid-gap: 0.5rem;
	width: ${({ $width }) => {
		return $width;
	}};
`;
const Title = styled.h4`
	grid-row: 1;
`;
const BorderBox = styled.div`
	grid-row: 2;

	height: fit-content;
	min-height: 4rem;

	position: relative;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	border: 1px solid ${COLOR.COMMON[800]};
	border-radius: 0.5rem;

	padding: 0.2rem 1rem;
`;
const BorderInput = styled.input`
	width: 100%;

	text-align: ${({ $align = "left" }) => {
		return $align;
	}};

	padding: 0.5rem;
	border: none;
	font-family: "SOYO_Maple_Regular";

	&:disabled {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: ${COLOR.COMMON[600]};
		opacity: 0.5;
	}
`;
const TextButton = styled.button`
	width: auto;
	padding: 1rem;
	background-color: ${COLOR.COMMON[800]};
	font-size: ${FONT_SIZE.ti};
	border-radius: 0.5rem;
	word-break: keep-all;
	&:hover {
		background-color: ${COLOR.COMMON[600]};
	}
`;
const Error = styled.div`
	grid-row: 3;
	height: auto;
	min-height: ${FONT_SIZE.lg};
	font-size: ${FONT_SIZE.ti};
	color: ${COLOR.SYSTEM.error};
`;

const S = { InputWrapper, Title, BorderInput, TextButton, Error, BorderBox };
