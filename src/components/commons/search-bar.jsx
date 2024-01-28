import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
const SearchBar = () => {
	return (
		<>
			<S.SearchWrapper>
				<S.Input placeholder="상품명 또는 카테고리를 입력해주세요" />
				<S.IconContainer>
					<S.Search size="2rem" />
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
	margin-top: 0.5rem;
	z-index: 100;
`;
const Search = styled(BsSearch)`
	&:hover {
		cursor: pointer;
	}
`;
const Input = styled.input`
	width: 40rem;
	height: 3.5rem;
	border-radius: 8px;
	border: none;
	background-color: #eee;
	padding: 1rem;
`;

const S = {
	SearchWrapper,
	Input,
	IconContainer,
	Search,
};
