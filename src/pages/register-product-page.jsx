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
	SectionHeadingTexts,
} from "../components/register-product";
import { COLOR, FONT_SIZE } from "../libs/styled-components";

const RegisterProductPage = () => {
	return (
		<CompressionContainer tb="1rem" rl="10%">
			<PageNotice />
			<Spacer height={2} />
			<S.Divider />
			<Spacer height={1} />

			<S.RegisterSection>
				<SectionHeadingTexts
					titleText="상품 이미지"
					additionalText="( 5 / 5 )"
				/>
				<ImageLoader />
			</S.RegisterSection>

			<S.Divider $bgColor={COLOR.COMMON[900]} />

			<S.RegisterSection>
				<SectionHeadingTexts titleText="상품명" />
				<Input />
			</S.RegisterSection>

			<S.Divider $bgColor={COLOR.COMMON[900]} />

			<S.RegisterSection>
				<SectionHeadingTexts titleText="거래 방식" />
				<PaymentMethodToggle />
			</S.RegisterSection>

			<S.Divider $bgColor={COLOR.COMMON[900]} />

			<S.RegisterSection>
				<SectionHeadingTexts titleText="가격" />
				<Input unitText="원" type="number" />
			</S.RegisterSection>

			<S.Divider $bgColor={COLOR.COMMON[900]} />

			<S.RegisterSection>
				<SectionHeadingTexts
					titleText="상품 설명"
					additionalText="(500자 이내)"
				/>
				<DetailTextArea />
			</S.RegisterSection>

			<S.Divider $bgColor={COLOR.COMMON[900]} />

			<S.RegisterSection>
				<SectionHeadingTexts
					titleText="태그"
					additionalText="(최대 5개)"
				/>
				<CategoriesSelector />
			</S.RegisterSection>

			<S.Divider $bgColor={COLOR.COMMON[900]} />

			<S.RegisterSection>
				<SectionHeadingTexts titleText="거래 희망 장소" />
				<LocationPicker />
			</S.RegisterSection>

			<Spacer height={2} />

			<S.ButtonsWrapper>
				<Button palette="mint">등록</Button>
				<Button>취소</Button>
			</S.ButtonsWrapper>
		</CompressionContainer>
	);
};
export default RegisterProductPage;

const HeadingSection = styled.section`
	width: 100%;
	height: fit-content;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const NoticeText = styled.p`
	font-size: ${FONT_SIZE.sm};
`;

const Divider = styled.div`
	width: 100%;
	height: 2px;
	background-color: ${({ $bgColor = COLOR.COMMON[0] }) => $bgColor};
`;

const RegisterSection = styled.section`
	width: 100%;
	height: fit-content;
	padding: 3rem 0;
	display: grid;
	grid-template-columns: 15rem 1fr; // 3rem: 섹션 제목, 나머지: 입력공간
	gap: 1rem;
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
	NoticeText,
	HeadingSection,
	RegisterSection,
	ButtonsWrapper,
};
