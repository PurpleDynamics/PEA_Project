import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
import ResponsiveIcon from "./responsive-icon";
/**
 * @component
 * @parameter width: string - search bar의 넓이를 입력받습니다. (default: 40, 단위 rem)
 * @parameter height: string - search bar의 높이를 입력받습니다. (default: 3.5, 단위 rem)
 * @parameter paddingLeft: string - search bar를 감싼 wrapper의 padding left를 설정합니다
 * @parameter placeHolder: string - search bar의 placeholder를 입력받습니다.
 *
 * @description 검색어 입력을 위한 검색창 component입니다.
 * @returns {JSX.Element}
 */
const SearchBar = ({ width, height, paddingLeft, placeHolder }) => {
	return (
		<>
			<S.SearchWrapper paddingLeft={paddingLeft}>
				<S.Input
					placeholder={placeHolder}
					width={width}
					height={height}
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
	padding-left: ${({ paddingLeft }) => paddingLeft};
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const IconContainer = styled.button`
	width: 2rem;
	border-radius: 8px;
	margin-left: -3.5rem;
	z-index: 100;
`;

const Input = styled.input`
	width: ${({ width }) => width || "40rem"};
	height: ${({ height }) => height || "3.5rem"};
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
