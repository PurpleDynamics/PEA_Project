import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import styled from "styled-components";

import { Button, CenterBox, Input, Spacer } from "../components/commons";
import { Modal } from "../components/overlay";
import {
	CategoriesSelector,
	ImageLoader,
	PageNotice,
	PaymentMethodToggle,
	RegisterSection,
} from "../components/register-product";
import { VALIDATION } from "../constants";
import { useOverlay } from "../hooks";
import { postProduct } from "../libs/axios/base";
import { COLOR, FONT_SIZE } from "../libs/styled-components";

/**
 * @component
 * @returns {JSX.Element}
 * @description
 * - 상품 등록 페이지 입니다.
 * - 상품 이미지, 상품명, 거래 방식, 가격, 상품 설명, 태그, 거래 희망 장소 를 필수로 작성해야 합니다.
 */
const RegisterProductPage = () => {
	const [selectedOption, setSelectedOption] = useState("0");
	const [updatedCategories, setUpdatedCategories] = useState([]);
	const [uploadImg, setUploadImg] = useState([]);
	const [price, setPrice] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ mode: "onChange" });
	// const onSubmit = async (data) => {
	// 	try {
	// 		const response = await postProduct(data);
	// 		console.log(response, "response");
	// 	} catch (error) {
	// 		console.error(error, "error");
	// 	}
	// };

	const { mutate, isLoading, isError } = useMutation(postProduct, {
		onSuccess: () => {
			// 상품 등록 후 처리
			reset();
			onOpenOverlay({
				overlayComponent: Modal,
				noticeText: "상품이 성공적으로 등록되었습니다.",
				buttonText: "확인",
				modalState: "success",
				isFiltered: true,
			});
			queryClient.invalidateQueries("products"); // 상품 목록 쿼리 무효화
		},
	});

	const onSubmit = (data) => {
		const productData = {
			...data,
			tag: updatedCategories,
			images: uploadImg,
		};
		console.log(productData, "productData");
		mutate(productData);
	};

	//무료나눔 or 중고거래 방식 선택시, 가격input 창 상태 변경하는 함수
	const handleSelectedOption = ({ option }) => {
		setSelectedOption(option);
	};
	const { onOpenOverlay } = useOverlay();
	const handleOpenModal = ({ keyType, modalState }) => {
		onOpenOverlay({
			overlayComponent: Modal,
			noticeText: keyType,
			buttonText: "확인",
			modalState: modalState,
			isFiltered: true,
		});
	};

	const handlePriceChange = (e) => {
		setPrice(e.target.value);
	};

	console.log(selectedOption);

	return (
		<CenterBox>
			<PageNotice />
			<Spacer height={2} />
			<S.Divider $bgColor={COLOR.COMMON[0]} />
			<Spacer height={1} />

			<RegisterSection titleText="상품 이미지">
				<ImageLoader
					uploadImg={uploadImg}
					setUploadImg={setUploadImg}
				/>
			</RegisterSection>

			<S.Divider />

			<RegisterSection titleText="상품명">
				<form id="productForm" onSubmit={handleSubmit(onSubmit)}>
					<Input
						register={register}
						registerKey="title"
						errors={errors}
						validate={{
							required: VALIDATION.COMMON_MESSAGE,
							pattern: VALIDATION.PRODUCTNAME,
						}}
					/>
				</form>
			</RegisterSection>

			<S.Divider />

			<RegisterSection titleText="거래 방식">
				<PaymentMethodToggle
					onSelectedOption={handleSelectedOption}
					selectedOption={selectedOption}
				/>
			</RegisterSection>

			<S.Divider />

			<RegisterSection titleText="가격">
				{selectedOption === "0" ? (
					<Input
						unitText="원"
						type="number"
						registerKey="price"
						value={price}
						onChange={handlePriceChange}
					/>
				) : (
					<Input
						unitText="0 원"
						type="number"
						registerKey="price"
						disabled={selectedOption === "1"}
						value=" "
					/>
				)}
			</RegisterSection>

			<S.Divider />

			<RegisterSection
				titleText="상품 설명"
				additionalText="(500자 이내)"
			>
				<S.DetailTextontainer>
					<S.DetailArea
						{...register("description", {
							required: VALIDATION.COMMON_MESSAGE,
						})}
						maxLength={500}
					/>
					{errors.description && (
						<S.ErrorText>{errors.description.message}</S.ErrorText>
					)}
				</S.DetailTextontainer>
			</RegisterSection>

			<S.Divider />

			<RegisterSection titleText="태그" additionalText="(최대 5개)">
				<CategoriesSelector
					setUpdatedCategories={setUpdatedCategories}
				/>
			</RegisterSection>

			<S.Divider />

			<RegisterSection titleText="거래 희망 장소">
				<Input register={register} registerKey="region" />
				{/* <LocationPicker /> */}
			</RegisterSection>

			<Spacer height={2} />

			<S.ButtonsWrapper>
				<Button
					palette="mint"
					type="submit"
					form="productForm"
					disabled={isLoading}
				>
					등록
				</Button>
				<Button>취소</Button>
			</S.ButtonsWrapper>
			{isError && <div>에러발생</div>}
		</CenterBox>
	);
};
export default RegisterProductPage;

const Divider = styled.div`
	width: 100%;
	height: 2px;
	background-color: ${({ $bgColor = COLOR.COMMON[900] }) => $bgColor};
`;
const ButtonsWrapper = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	justify-content: end;
	align-items: center;
	gap: 2rem;
`;
const DetailTextontainer = styled.div`
	position: relative;
`;
const ErrorText = styled.div`
	color: ${COLOR.SYSTEM.error};
	font-size: ${FONT_SIZE.ti};
`;
const DetailArea = styled.textarea`
	width: 65%;
	height: 20rem;
	border: 1px solid ${COLOR.COMMON[800]};
	border-radius: 0.5rem;
	resize: none;
	padding: 0.5rem;
`;

const S = {
	Divider,
	DetailArea,
	ButtonsWrapper,
	DetailTextontainer,
	ErrorText,
};
