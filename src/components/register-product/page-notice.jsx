import React from "react";
import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
import { HighlightedText } from "../commons";

/**
 * @component
 * @description
 * - 등록 페이지 최상단에 위치
 * - 페이지에 대한 안내 텍스트 출력 목적의 ui
 */
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
