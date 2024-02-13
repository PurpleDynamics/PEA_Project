import { useState } from "react";
import styled from "styled-components";

import { CATEGORIES_ARRAY } from "../../constants";
import { CategoryToggle, Input, Spacer } from "../commons";

/**
 * @component
 * @returns {JSX.Element}
 * @description
 * - 카테고리 선택 / 추가 ui
 * - 카테고리르 추가할 수 있도록 출력되는 카테고리 이름을 담은 배열을 상태로 관리
 */
const CategoriesSelector = () => {
	/** 화면에 출력되는 카테고리 이름을 담은 배열 */
	const [printedCategories, setPrintedCategories] =
		useState(CATEGORIES_ARRAY);

	return (
		<div>
			<S.NoticeText>태그를 직접 입력하거나 선택해주세요.</S.NoticeText>

			<Spacer height={2} />
			<Input
				placeholder={"태그 추가하기 (최대 6글자)"}
				buttonText="추가"
			/>
			<S.CategoryWrapper>
				{printedCategories.map((category, index) => (
					<CategoryToggle key={index}>{category}</CategoryToggle>
				))}
			</S.CategoryWrapper>
		</div>
	);
};

export default CategoriesSelector;

const NoticeText = styled.p`
	font-family: "SOYO_Maple_Regular";
`;

const CategoryWrapper = styled.div`
	width: 80%;
	height: fit-content;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	align-items: center;
	gap: 1.5rem;
`;
const S = {
	NoticeText,
	CategoryWrapper,
};
