import React from "react";
import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
import { HighlightedText } from "../commons";

const PageNotice = () => {
	return (
		<S.Wrapper>
			<h1>상품등록</h1>
			<p>
				<HighlightedText color={COLOR.PALETTE.magenta.base}>
					* 필수항목
				</HighlightedText>{" "}
				은 꼭 입력해주세요.
			</p>
		</S.Wrapper>
	);
};

export default PageNotice;

const Wrapper = styled.section`
	width: 100%;
	height: fit-content;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const S = {
	Wrapper,
};
