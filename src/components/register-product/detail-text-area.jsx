import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";

const DetailTextArea = () => {
	return <S.DetailArea />;
};

export default DetailTextArea;

const DetailArea = styled.textarea`
	width: 65%;
	height: 20rem;
	border: 1px solid ${COLOR.COMMON[800]};
	border-radius: 0.5rem;
	resize: none;
	padding: 0.5rem;
	font-family: "SOYO_Maple_Regular";
`;
const S = {
	DetailArea,
};
