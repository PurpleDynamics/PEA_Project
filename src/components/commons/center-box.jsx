import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
import { CompressionWrapper } from "./";

const CenterBox = ({ bgColor = COLOR.COMMON[1000], children, ...rest }) => {
	return (
		<S.ColoredContainer $bgColor={bgColor}>
			<S.FixedWidthWrapper {...rest}>
				<CompressionWrapper lr="1rem" tb="1rem">
					{children}
				</CompressionWrapper>
			</S.FixedWidthWrapper>
		</S.ColoredContainer>
	);
};

export default CenterBox;

const ColoredContainer = styled.div`
	width: 100%;
	height: fit-content;
	background-color: ${({ $bgColor }) => $bgColor};
	display: flex;
	justify-content: center;
`;
const FixedWidthWrapper = styled.div`
	width: 115.2rem;
	height: fit-content;
`;
const S = {
	ColoredContainer,
	FixedWidthWrapper,
};
