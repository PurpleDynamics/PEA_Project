import styled from "styled-components";

import { Banner, Spacer } from "../components/commons";

const UsedProductPage = () => {
	return (
		<>
			<S.Wrapper>
				<Spacer height="2rem" />
				<Banner />
				{/* <EightProductGrid
					userData={user}
					eightProductData={usedData}
					salesCategory={"중고거래"}
				/> */}
			</S.Wrapper>
		</>
	);
};
export default UsedProductPage;

const Wrapper = styled.div``;

const S = {
	Wrapper,
};
