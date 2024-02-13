import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
import { Input, Spacer } from "../commons";

/**
 * @component
 * @description 상품 판매 지역 선택 ui
 */
const LocationPicker = () => {
	return (
		<div>
			<Input buttonText="검색" />
			<Spacer height={1} />
			<S.Map />
		</div>
	);
};

export default LocationPicker;

const Map = styled.div`
	width: 80%;
	min-width: 25rem;
	height: 30rem;
	border-radius: 1rem;
	background-color: ${COLOR.COMMON[800]};
`;

const S = { Map };
