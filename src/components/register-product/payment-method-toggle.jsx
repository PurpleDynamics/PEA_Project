import styled from "styled-components";

/**
 * @component
 * @description 거래 형태 선택 ui
 */
const PaymentMethodToggle = () => {
	return (
		<S.ToggleContainer>
			<S.RadioWrapper>
				<input type="radio" />
				<p>중고거래</p>
			</S.RadioWrapper>
			<S.RadioWrapper>
				<input type="radio" />
				<p>무료나눔</p>
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
