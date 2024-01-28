import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
import ResponsiveIcon from "./responsive-icon";
const SearchBar = () => {
	return (
		<>
			<S.SearchWrapper>
				<S.Input placeholder="상품명 또는 카테고리를 입력해주세요" />
				<S.IconContainer>
					<ResponsiveIcon icon={BsSearch} />
				</S.IconContainer>
			</S.SearchWrapper>
		</>
	);
};
export default SearchBar;

const SearchWrapper = styled.form`
	width: 100%;
	padding-left: 14rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const IconContainer = styled.button`
	width: 3.5rem;
	border-radius: 8px;
	margin-left: -3.5rem;
	z-index: 100;
`;

const Input = styled.input`
	width: 40rem;
	height: 3.5rem;
	border-radius: 8px;
	border: none;
	background-color: ${COLOR.COMMON[900]};
	padding: 1rem;
`;

const S = {
	SearchWrapper,
	Input,
	IconContainer,
};
