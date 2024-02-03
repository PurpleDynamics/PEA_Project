import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import RecentProduct from "./recent-product";
import ResponsiveIcon from "./responsive-icon";
import SideChatBtn from "./side-chat-button";
import TopButton from "./top-button";

/**
 * @component
 * @returns {JSX.Element}
 *
 * @description
 * - 최근 본 상품의 리스트를 보여주는 컴포넌트 입니다.
 */

const RecentProductList = () => {
	return (
		<RecentProductWrapper>
			<S.RecentProductContainer>
				<S.Title>최근 본 상품</S.Title>
				<S.MovedItemButton onClick={() => {}}>
					<ResponsiveIcon icon={BsChevronUp} size={FONT_SIZE.bg} />
				</S.MovedItemButton>
				<S.RecentProductListContainer>
					<RecentProduct />
				</S.RecentProductListContainer>
				<S.MovedItemButton onClick={() => {}}>
					<ResponsiveIcon icon={BsChevronDown} size={FONT_SIZE.bg} />
				</S.MovedItemButton>
				<TopButton />
			</S.RecentProductContainer>
			<SideChatBtn />
		</RecentProductWrapper>
	);
};
export default RecentProductList;

const RecentProductWrapper = styled.div``;

const RecentProductContainer = styled.div`
	width: 10rem;
	border: 1px solid ${COLOR.COMMON[800]};
	padding: 1rem;
	grid-row: 1;
	display: grid;
	grid-template-rows: 1.5fr 1.25fr auto 1.25fr 1.5fr;
	position: fixed;
	top: 30vh;
	right: 5vw;
`;

const RecentProductListContainer = styled.div``;

const Title = styled.p`
	font-family: "SOYO_Maple_Bold";
	font-size: ${FONT_SIZE.md};
	grid-row: 1;
`;

const MovedItemButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0.2rem;
`;

const S = {
	MovedItemButton,
	RecentProductContainer,
	RecentProductListContainer,
	RecentProductWrapper,
	Title,
};
