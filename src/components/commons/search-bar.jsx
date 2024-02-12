import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
import ResponsiveIcon from "./responsive-icon";
/**
 * @component
 * @description 검색어 입력을 위한 검색창 component입니다.
 * @returns {JSX.Element}
 */
const SearchBar = ({
	width = "40rem",
	height = "3.5rem",
	paddingLeft,
	placeholder,
}) => {
	return (
		<>
			<S.SearchWrapper style={{ paddingLeft }}>
				<S.Input
					width={width}
					height={height}
					placeholder={placeholder}
				/>
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
	padding-left: ${(paddingLeft) => paddingLeft};
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const IconContainer = styled.button`
	width: 3.5rem;
	border-radius: 8px;
	margin-left: -3.5rem;
	z-index: 100;
	background: none;
	border: none;
	cursor: pointer;
`;

const Input = styled.input`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
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
