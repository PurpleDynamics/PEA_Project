import { BsCameraFill } from "react-icons/bs";
import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";

/**
 * @component
 * @description 이미지 등록 및 등록된 이미지 미리보기 목적
 */
const ImageLoader = () => {
	return (
		<S.Wrapper>
			<S.ImageLoadButton>
				<BsCameraFill size="5rem" />
				<S.ButtonText>이미지 등록</S.ButtonText>
			</S.ImageLoadButton>
			<S.PreviewBoxList>
				{Array.from({ length: 5 }).map((_, index) => (
					<S.PreviewBox key={index} />
				))}
			</S.PreviewBoxList>
		</S.Wrapper>
	);
};
export default ImageLoader;

const Wrapper = styled.div`
	width: 100%;
	height: 30rem;
	overflow-x: hidden;
	display: grid;
	grid-template-rows: repeat(2, 12rem);
	grid-row-gap: 1rem;
	padding: 1rem 0;
`;
const PreviewBoxList = styled.div`
	display: grid;
	width: 100%;
	height: fit-content;
	grid-template-columns: repeat(5, 12rem);
	grid-column-gap: 1rem;
	overflow-x: scroll;
	overflow-y: hidden;
	padding: 1rem 0;
`;
const PreviewBox = styled.div`
	width: 12rem;
	height: 12rem;
	background-color: ${COLOR.COMMON[800]};
	border-radius: 1rem;
`;
const ImageLoadButton = styled(PreviewBox)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
`;
const ButtonText = styled.p`
	font-family: "SOYO_Maple_Regular";
`;
const S = {
	Wrapper,
	ImageLoadButton,
	PreviewBox,
	PreviewBoxList,
	ButtonText,
};
