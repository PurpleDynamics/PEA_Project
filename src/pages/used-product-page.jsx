import { useState } from "react";
import styled from "styled-components";

import { Banner, Spacer } from "../components/commons";
import { FreeShare, UsedTrade } from "../components/used-product";
import { COLOR } from "../libs/styled-components";

const UsedProductPage = () => {
	const [selectedButton, setSelectedButton] = useState("usedTrade");

	const usedProductsData = [
		{ title: "최하영", price: "1000000", location: "역삼동" },
		{ title: "김진솔", price: "1000000", location: "역삼동" },
		{ title: "김진솔", price: "1000000", location: "역삼동" },
		{ title: "김진솔", price: "1000000", location: "역삼동" },
		{ title: "김진솔", price: "1000000", location: "역삼동" },
		{ title: "김진솔", price: "1000000", location: "역삼동" },
		{ title: "김진솔", price: "1000000", location: "역삼동" },
		{ title: "김진솔", price: "1000000", location: "역삼동" },
		{ title: "김진솔", price: "1000000", location: "역삼동" },
	];

	const freeProductsData = [
		{ title: "최하영무료", price: "0000", location: "역삼동" },
		{ title: "김진솔무료", price: "00000", location: "역삼동" },
		{ title: "김진솔무료", price: "00000", location: "역삼동" },
		{ title: "김진솔무료", price: "00000", location: "역삼동" },
		{ title: "김진솔무료", price: "0000", location: "역삼동" },
		{ title: "김진솔무료", price: "000000", location: "역삼동" },
		{ title: "김진솔무료", price: "00000", location: "역삼동" },
		{ title: "김진솔무료", price: "00000", location: "역삼동" },
	];

	const onClickTypeSelector = (buttonKey) => {
		const defaultColor = `${COLOR.COMMON[400]}`;
		if (buttonKey === selectedButton) {
			return buttonKey === "usedTrade"
				? `${COLOR.PALETTE.orange.weight}`
				: `${COLOR.PALETTE.mint.weight}`;
		}
		return defaultColor;
	};

	return (
		<>
			<S.Wrapper>
				<Spacer height="2rem" />
				<Banner />
				<S.TradeTypeWrapper>
					<S.TradeTypeSelector
						onClick={() => setSelectedButton("usedTrade")}
						$textColor={onClickTypeSelector("usedTrade")}
					>
						중고거래
					</S.TradeTypeSelector>
					<S.TradeTypeSelector
						onClick={() => setSelectedButton("freeShare")}
						$textColor={onClickTypeSelector("freeShare")}
					>
						무료나눔
					</S.TradeTypeSelector>
					{selectedButton === "usedTrade" && (
						<UsedTrade data={usedProductsData} />
					)}
					{selectedButton === "freeShare" && (
						<FreeShare data={freeProductsData} />
					)}
				</S.TradeTypeWrapper>
			</S.Wrapper>
		</>
	);
};
export default UsedProductPage;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const TradeTypeSelector = styled.button`
	padding: 0 2rem;
	cursor: pointer;
	background-color: ${COLOR.COMMON[1000]};
	color: ${(props) => props.$textColor};
`;

const TradeTypeWrapper = styled.div`
	width: 115.2rem;
	padding: 3rem 3rem;
`;

const S = {
	Wrapper,
	TradeTypeWrapper,
	TradeTypeSelector,
};
