import {
	BsClockHistory,
	BsCreditCard2BackFill,
	BsHeartPulseFill,
} from "react-icons/bs";
import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import { appendUnit } from "../../utils";
import { TextSpacer } from "../commons";

/**
 * @component
 * * @parameter findProduct : object<특정된 상품데이터> - detail-product-page 에서 Params로id를 특정해 받아옴
 * @returns {JSX.Element}
 *
 * @description
 * - DetailInfo속 컴포넌트입니다.
 * - 판매 물품 정보중 세부 데이터를 포함한 컴포넌트입니다
 * - ItemSummaryDataList 배열로 데이터를 관리합니다
 */
const ItemSummary = ({ findProduct }) => {
	const ItemSummaryDataList = [
		{
			icon: BsClockHistory,
			iconColor: COLOR.PALETTE.cyan.base,
			SpecsMainText: "6",
			SpecsMainUnit: "일",
			SpecsStartText: "",
			SpecsEndText: "전에 등록됐어요.",
		},
		{
			icon: BsCreditCard2BackFill,
			SpecsMainText: "8",
			SpecsMainUnit: "%",
			SpecsStartText: "시세보다",
			SpecsEndText: "저럼해요",
		},
		{
			icon: BsHeartPulseFill,
			SpecsMainText: "34",
			SpecsMainUnit: "명",
			SpecsStartText: "",
			SpecsEndText: "이 관심을 가진상품입니다.",
		},
		{
			icon: BsClockHistory,
			SpecsMainText: "49",
			SpecsMainUnit: "명",
			SpecsStartText: "",
			SpecsEndText: "과 채팅이 이뤄졌습니다.",
		},
	];
	return (
		<S.ItemSummaryWrapper>
			{ItemSummaryDataList.map((data, index) => (
				<S.ProductSpecsWrapper key={index}>
					<S.iconContainer>
						<data.icon
							size={"3.5rem"}
							color={COLOR.PALETTE.cyan.base}
						/>
					</S.iconContainer>
					<S.SpecsText>
						{data.SpecsStartText && (
							<>
								{data.SpecsStartText}
								<TextSpacer spacer={2} />
							</>
						)}
						<S.SpecsMainText>
							{appendUnit({
								amountData: data.SpecsMainText,
								unit: data.SpecsMainUnit,
							})}
						</S.SpecsMainText>
						<TextSpacer spacer={2} />
						{data.SpecsEndText}
					</S.SpecsText>
				</S.ProductSpecsWrapper>
			))}
		</S.ItemSummaryWrapper>
	);
};
export default ItemSummary;

const ItemSummaryWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;
const ProductSpecsWrapper = styled.div`
	width: 36rem;
	height: 4.2rem;
	display: flex;
	align-items: center;
	gap: 0.8rem;
`;
const SpecsText = styled.p`
	padding: 0.5rem;
	display: flex;

	align-items: center;
	font-size: ${FONT_SIZE.md};
`;
const iconContainer = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const SpecsMainText = styled.div`
	color: ${COLOR.PALETTE.cyan.base};
`;
const S = {
	ItemSummaryWrapper,
	ProductSpecsWrapper,
	SpecsText,
	iconContainer,
	SpecsMainText,
};
