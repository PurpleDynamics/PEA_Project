import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { CATEGORIES_ARRAY, VALIDATION } from "../../constants";
import { CategoryToggle, Input, Spacer } from "../commons";

/**
 * @component
 * @returns {JSX.Element}
 * @description
 * - 카테고리 선택 / 추가 ui
 * - 카테고리를 추가할 수 있도록 출력되는 카테고리 이름을 담은 배열을 상태로 관리
 */
const CategoriesSelector = ({ setUpdatedCategories }) => {
	/** 화면에 출력되는 카테고리 이름을 담은 배열 */
	const [printedCategories, setPrintedCategories] = useState(
		CATEGORIES_ARRAY.map((category) => ({
			name: category,
			isActive: false, //토글 비활성화
		}))
	);

	// const [updatedCategories, setUpdatedCategories] = useState([]);
	//카테고리가 활성화된(클릭된/추가된) 업데이트 카테고리 생성
	useEffect(() => {
		const updatedActiveCategories = printedCategories
			.filter((category) => category.isActive)
			.map((category) => category.name);

		setUpdatedCategories(updatedActiveCategories);
	}, [printedCategories]);

	//카테고리 입력시 토글이 추가되는 함수
	const handleAddCategory = (data) => {
		const trimmedInput = data.tag.trim(); // 공백 제거
		//공백이 없고, 그 값이 이미 존재하지 않는 카테고리인 경우
		if (
			trimmedInput &&
			!printedCategories.some(
				(category) => category.name === trimmedInput
			) // 전체 카테고리에 입력한 카테고리가 없을경우 true를 반환
		) {
			const newCategory = {
				name: trimmedInput,
				isActive: true,
			};
			setPrintedCategories((prev) => [...prev, newCategory]);
			reset({ tag: "" }); //input 입력창 리셋
		}
		console.log("클릭");
	};

	// 활성화된 카테고리 count 하는 함수
	const activeCategoriesCount = printedCategories.filter(
		(category) => category.isActive
	).length;

	// 카테고리의 상태를 활성화 시키는 함수
	const toggleCategory = (index) => {
		setPrintedCategories(
			printedCategories.map((category, idx) => {
				// 기존 카테고리의 idx와 클릭한 카테고리의 index가 같을 때
				if (idx === index) {
					// 카테고리가 활성화되어있거나(inActive가 true) 비활성화되어있는 카테고리지만 활성화된 카테고리수가 5개미만일 경우
					if (
						category.isActive ||
						(!category.isActive && activeCategoriesCount < 5)
					) {
						// 기존 카테고리를 복사, 카테고리를 활성화
						return { ...category, isActive: !category.isActive };
					}
				}
				return category;
			})
		);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ mode: "onChange" });

	return (
		<div>
			<S.NoticeText>태그를 직접 입력하거나 선택해주세요.</S.NoticeText>

			<Spacer height={2} />
			<Input
				register={register}
				registerKey="tag"
				errors={errors}
				validate={{
					pattern: VALIDATION.TAGNAME,
				}}
				placeholder="태그 추가하기 (최대 6글자)"
				buttonText="추가"
				handleButton={handleSubmit(handleAddCategory)}
				isDisabled={activeCategoriesCount >= 5}
			/>
			<S.CategoryWrapper>
				{printedCategories?.map((category, index) => (
					<CategoryToggle
						key={index}
						initActiveState={category.isActive}
						callbackFunc={() => toggleCategory(index)}
						isDisabled={
							!category.isActive && activeCategoriesCount >= 5
						}
					>
						{category.name}
					</CategoryToggle>
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
