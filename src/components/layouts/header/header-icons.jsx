import { BsFileEarmarkText, BsGeoAlt, BsHeart, BsPerson } from "react-icons/bs";
import styled from "styled-components";
const HeaderIcons = () => {
	return (
		<S.IconsWrapper>
			<S.FileEarmarkText size="2.5rem" />
			<S.Heart size="2.5rem" />
			<S.GeoAlt size="2.5rem" />
			<S.Person size="2.5rem" />
		</S.IconsWrapper>
	);
};
export default HeaderIcons;

const IconsWrapper = styled.ul`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 2rem;
`;
const FileEarmarkText = styled(BsFileEarmarkText)`
	&:hover {
		cursor: pointer;
	}
`;
const Heart = styled(BsHeart)`
	&:hover {
		cursor: pointer;
	}
`;
const GeoAlt = styled(BsGeoAlt)`
	&:hover {
		cursor: pointer;
	}
`;
const Person = styled(BsPerson)`
	&:hover {
		cursor: pointer;
	}
`;

const S = { IconsWrapper, FileEarmarkText, Heart, GeoAlt, Person };
