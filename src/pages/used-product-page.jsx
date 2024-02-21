import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { Banner, Spacer } from "../components/commons";
import UsedFreeList from "../components/used-product/used-free-list";
import { BREAK_POINT, COLOR } from "../libs/styled-components";

/**
 * @function
 * @returns {JSX.Element}
 * @description "중고거래" 버튼 혹은 "무료나눔" 버튼 클릭시, 해당 데이터를 불러오는 페이지입니다.
 */

const UsedProductPage = () => {
	const location = useLocation();

	//메인페이지에서 "중고거래" 혹은 "무료나눔" 중 어떤값을 클릭했는지에 대한 값
	const typeData = location.state?.type;

	const [selectedButton, setSelectedButton] = useState(typeData);

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

	// 버튼 클릭시, 버튼색 변경하는 이벤트함수
	const onClickTypeSelector = ({ id }) => {
		setSelectedButton(id);
	};

	return (
		<>
			<S.Wrapper>
				<Spacer height="2rem" />
				<Banner />
				<S.TradeTypeWrapper>
					<S.TradeTypeSelector
						onClick={() => onClickTypeSelector({ id: "usedTrade" })}
						$isSelected={
							selectedButton === "usedTrade"
								? COLOR.PALETTE.orange.weight
								: COLOR.COMMON[400]
						}
					>
						중고거래
					</S.TradeTypeSelector>
					<S.TradeTypeSelector
						onClick={() => onClickTypeSelector({ id: "freeShare" })}
						$isSelected={
							selectedButton === "freeShare"
								? COLOR.PALETTE.mint.weight
								: COLOR.COMMON[400]
						}
					>
						무료나눔
					</S.TradeTypeSelector>
					{selectedButton === "usedTrade" && (
						<UsedFreeList
							productData={usedProductsData}
							freeOrUsed={
								selectedButton === "usedTrade" && "중고거래"
							}
						/>
					)}
					{selectedButton === "freeShare" && (
						<UsedFreeList
							productData={freeProductsData}
							freeOrUsed={
								selectedButton === "freeShare" && "무료나눔"
							}
						/>
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
	color: ${({ $isSelected }) => $isSelected};
`;

const TradeTypeWrapper = styled.div`
	width: 115.2rem;
	padding: 3rem 3rem;
	@media (max-width: ${BREAK_POINT.lg}) {
		width: 90rem;
	}
`;

const S = {
	Wrapper,
	TradeTypeWrapper,
	TradeTypeSelector,
};
