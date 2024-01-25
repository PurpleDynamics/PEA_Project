import styled from "styled-components";

import { COLOR } from "../../../libs/styled-components/reference-tokens/color";
import { HeaderIcons, SearchBar } from "../..";

const Header = () => {
	return (
		<S.HeaderContainer>
			<S.MainWrapper>
				<S.Logo src="https://url.kr/trjdsn" />
				<SearchBar />
				<HeaderIcons />
			</S.MainWrapper>
		</S.HeaderContainer>
	);
};
export default Header;

const HeaderContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	width: 100%;
	height: 11rem;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 2px 4px ${COLOR.COMMON[800]}; // 구분을 위한 임시 조치
	background-color: ${COLOR.COMMON[1000]};
`;
const MainWrapper = styled.div`
	display: grid;
	grid-template-columns: 2fr 5fr 1.5fr;
	align-items: center;
	width: 125rem;
	height: 8rem;
`;
const Logo = styled.img`
	padding-bottom: 1rem;
	width: 11rem;
	&:hover {
		cursor: pointer;
	}
`;

const S = {
	HeaderContainer,
	MainWrapper,
	Logo,
};
