import styled from "styled-components";

import {
	Button,
	CompressionContainer,
	Input,
	Spacer,
} from "../components/commons";
import {
	CategoriesSelector,
	DetailTextArea,
	ImageLoader,
	LocationPicker,
	PageNotice,
	PaymentMethodToggle,
	RegisterSection,
} from "../components/register-product";
import { COLOR } from "../libs/styled-components";

/**
 * @component
 * @returns {JSX.Element}
 * @description
 * - 상품 등록 페이지 입니다.
 * - 상품 이미지, 상품명, 거래 방식, 가격, 상품 설명, 태그, 거래 희망 장소 를 필수로 작성해야 합니다.
 */
const RegisterProductPage = () => {
	return (
		<CompressionContainer tb="1rem" rl="10%">
			<PageNotice />
			<Spacer height={2} />
			<S.Divider $bgColor={COLOR.COMMON[0]} />
			<Spacer height={1} />

			<RegisterSection titleText="상품 이미지" additionalText="( 5 / 5 )">
				<ImageLoader />
			</RegisterSection>

			<S.Divider />

			<RegisterSection titleText="상품명">
				<Input />
			</RegisterSection>

			<S.Divider />

			<RegisterSection titleText="거래 방식">
				<PaymentMethodToggle />
			</RegisterSection>

			<S.Divider />

			<RegisterSection titleText="가격">
				<Input unitText="원" type="number" />
			</RegisterSection>

			<S.Divider />

			<RegisterSection
				titleText="상품 설명"
				additionalText="(500자 이내)"
			>
				<DetailTextArea />
			</RegisterSection>

			<S.Divider />

			<RegisterSection titleText="태그" additionalText="(최대 5개)">
				<CategoriesSelector />
			</RegisterSection>

			<S.Divider />

			<RegisterSection titleText="거래 희망 장소">
				<LocationPicker />
			</RegisterSection>

			<Spacer height={2} />

			<S.ButtonsWrapper>
				<Button palette="mint">등록</Button>
				<Button>취소</Button>
			</S.ButtonsWrapper>
		</CompressionContainer>
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
const S = {
	Divider,
	ButtonsWrapper,
};
