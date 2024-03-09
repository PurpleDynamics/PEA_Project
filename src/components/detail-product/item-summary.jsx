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
 * @parameter productData : object<특정상품데이터> - 툭정제품의 전체 정보를  가져오는 api데이터
 * @parameter findProduct : object<특정상품검색데이터> - 특정 제품의 정보중 상세정보의 data
 * @returns {JSX.Element}
 *
 * @description
 * - DetailInfo 컴포넌트중 "판매 물품의 세부사항을 수치로 나타내는 부분입니다"
 * - ItemSummaryDataList 배열로 데이터를 관리합니다
 */
const ItemSummary = ({ productData, findProduct }) => {
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
			SpecsMainText: findProduct.liked.toString(),
			SpecsMainUnit: "명",
			SpecsStartText: "",
			SpecsEndText: "이 관심을 가진상품입니다.",
		},
		{
			icon: BsClockHistory,
			SpecsMainText: productData.chat.length.toString(),
			SpecsMainUnit: "명",
			SpecsStartText: "",
			SpecsEndText: "과 채팅이 이뤄졌습니다.",
		},
	];
	return (
		<S.ItemSummaryWrapper>
			{ItemSummaryDataList.map((data, index) => (
				<S.ProductSpecsWrapper key={index}>
					<S.IconContainer>
						<data.icon
							size={"3.5rem"}
							color={COLOR.PALETTE.cyan.base}
						/>
					</S.IconContainer>
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
const SpecsText = styled.div`
	padding: 0.5rem;
	display: flex;
	align-items: center;
	font-size: ${FONT_SIZE.md};
`;
const IconContainer = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const SpecsMainText = styled.span`
	color: ${COLOR.PALETTE.cyan.base};
`;
const S = {
	ItemSummaryWrapper,
	ProductSpecsWrapper,
	SpecsText,
	IconContainer,
	SpecsMainText,
};
