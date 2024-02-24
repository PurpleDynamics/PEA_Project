import { useState } from "react";
import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
import { CenterBox, EightProductGrid } from "../commons";
/**
 * @component
 * @parameter mypageProdcutListArray : Array - /api/user/my-page/product-list&page={page}?category={category} 로 불러온 상품데이터배열
 * @returns {JSX.Element}
 * @description
 * - user와 연관된 상품들의 정보를 보여주는 컴포넌트입니다.
 * - isClicked는 판매 || 나눔 인지에따라 해당 내용에 맞는 상품들을 보여줍니다.
 */
const ProductListSection = ({ mypageProdcutListArray }) => {
	const [isClicked, setIsClicked] = useState(null);
	const handleClick = ({ id }) => {
		setIsClicked(id);
	};
	return (
		<CenterBox>
			<S.MainWrapper>
				<S.TitleContainer>
					<S.TitleText>등록상품</S.TitleText>
				</S.TitleContainer>
				<S.SaleOrUsedArea>
					<S.Sale
						id={1}
						onClick={() => handleClick({ id: 1 })}
						$isClicked={isClicked === 1}
					>
						판매
					</S.Sale>
					<S.Used
						id={2}
						onClick={() => handleClick({ id: 2 })}
						$isClicked={isClicked === 2}
					>
						나눔
					</S.Used>
				</S.SaleOrUsedArea>
				<EightProductGrid productData={mypageProdcutListArray} />
			</S.MainWrapper>
		</CenterBox>
	);
};
export default ProductListSection;

const MainWrapper = styled.div`
	width: 100%;
	height: 100%;
`;
const TitleContainer = styled.div`
	width: 100%;
	height: 30%;
	padding-top: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const TitleText = styled.h2`
	color: ${COLOR.COMMON[0]};
`;
const SaleOrUsedArea = styled.div`
	height: 7rem;
	display: flex;
	align-items: center;
	color: ${COLOR.COMMON[600]};
	justify-content: space-evenly;
	gap: 10rem;
`;
const Sale = styled.h3`
	cursor: pointer;
	color: ${({ $isClicked }) => $isClicked && COLOR.PALETTE.orange.weight};
`;
const Used = styled.h3`
	cursor: pointer;
	color: ${({ $isClicked }) => $isClicked && COLOR.PALETTE.mint.weight};
`;
const S = {
	MainWrapper,
	TitleContainer,
	TitleText,
	SaleOrUsedArea,
	Sale,
	Used,
};
