import { useState } from "react";
import styled from "styled-components";

/**
 * @component
 * @description 거래 형태 선택 ui
 */
const PaymentMethodToggle = () => {
	const [selectedOption, setSelectedOption] = useState(null);
	const handleSelectedOption = ({ option }) => {
		setSelectedOption(option);
	};
	return (
		<S.ToggleContainer>
			<S.RadioWrapper>
				<input
					type="radio"
					id="usedTrade"
					checked={selectedOption === "usedTrade"}
					onChange={() =>
						handleSelectedOption({ option: "usedTrade" })
					}
				/>
				<label>중고거래</label>
			</S.RadioWrapper>
			<S.RadioWrapper>
				<input
					type="radio"
					id="freeShare"
					checked={selectedOption === "freeShare"}
					onChange={() =>
						handleSelectedOption({ option: "freeShare" })
					}
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
