import styled from "styled-components";

import {
	GraphSection,
	InforMationSection,
	ManageProductsSection,
	ProductListSection,
} from "../components/my-info";
const MyInfoPage = () => {
	return (
		<S.MainWrapper>
			<InforMationSection />
			<GraphSection />
			<ManageProductsSection />
			<ProductListSection />
		</S.MainWrapper>
	);
};
export default MyInfoPage;

const MainWrapper = styled.div`
	width: 100%;
	height: 100%;
`;

const S = {
	MainWrapper,
};
