import { BsFileEarmarkText, BsGeoAlt, BsHeart, BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
import { ResponsiveIcon, SearchBar } from "../commons";
/**
 * @component
 * @description Header
 * @returns {JSX.Element}
 */
const Header = () => {
	const navigate = useNavigate();
	return (
		<S.HeaderContainer>
			<S.MainWrapper>
				<S.Logo src="https://url.kr/trjdsn" />
				<SearchBar
					paddingLeft={"14rem"}
					placeholder="상품명 또는 카테고리를 입력해주세요"
				/>
				<S.IconsWrapper>
					<ResponsiveIcon icon={BsFileEarmarkText} />
					<ResponsiveIcon icon={BsGeoAlt} />
					<ResponsiveIcon icon={BsHeart} />
					<ResponsiveIcon
						icon={BsPerson}
						onClick={() => {
							navigate("/my-info");
						}}
					/>
				</S.IconsWrapper>
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
	box-shadow: 0 2px 4px ${COLOR.COMMON[800]};
	background-color: ${COLOR.COMMON[1000]};
`;
const MainWrapper = styled.div`
	display: grid;
	grid-template-columns: 2fr 5fr 1.5fr;
	align-items: center;
	width: 115.2rem;
	height: 8rem;
`;
const IconsWrapper = styled.ul`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 2rem;
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
	IconsWrapper,
	Logo,
};
