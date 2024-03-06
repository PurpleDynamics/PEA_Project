import styled from "styled-components";

/**
 * @component
 * @parameter selectedOption : string - 현재 선택된 거래 형태 ("usedTrade" | "1")
 * @parameter onSelectedOption : function - 거래 형태 선택시 ,
 *
 * @description 거래 형태를 선택하여 UI를 제공하는 컴포넌트입니다.
 */
const PaymentMethodToggle = ({ selectedOption, onSelectedOption }) => {
	return (
		<S.ToggleContainer>
			<S.RadioWrapper>
				<input
					type="radio"
					id="0"
					checked={selectedOption === "0"}
					onChange={() => onSelectedOption({ option: "0" })}
				/>
				<label>중고거래</label>
			</S.RadioWrapper>
			<S.RadioWrapper>
				<input
					type="radio"
					id="1"
					checked={selectedOption === "1"}
					onChange={() => onSelectedOption({ option: "1" })}
				/>
				<label>무료나눔</label>
			</S.RadioWrapper>
		</S.ToggleContainer>
	);
};

export default PaymentMethodToggle;

const ToggleContainer = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: start;
	gap: 3rem;
`;

const RadioWrapper = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

const S = {
	ToggleContainer,
	RadioWrapper,
};
