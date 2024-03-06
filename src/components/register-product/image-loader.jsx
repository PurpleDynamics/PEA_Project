import { useRef } from "react";
import { BsCameraFill } from "react-icons/bs";
import styled from "styled-components";

import { COLOR, FONT_SIZE } from "../../libs/styled-components";

/**
 * @component
 * @description 등록된 이미지 미리보기 목적의 ui
 */
const ImageLoader = ({ uploadImg, setUploadImg }) => {
	const fileInputRef = useRef(null);

	//이미지 업로드 버튼 클릭 핸들러
	const handleImgUpload = () => {
		fileInputRef.current.click();
	};
	//파일 업로드시 필요한 핸들러
	const onChangeImgUpload = (e) => {
		const imageLists = e.target.files;
		const imageUrlLists = [...uploadImg];
		for (let i = 0; i < imageLists.length; i++) {
			const currentImageUrl = URL.createObjectURL(imageLists[i]); //이미지 URL생성
			imageUrlLists.push(currentImageUrl); //배열에 이미지 추가
		}
		setUploadImg(imageUrlLists.slice(0, 5));
		fileInputRef.current.value = null; // input 파일 업로드 값 초기화
	};
	//사진 클릭했을때 선택된 사진 삭제
	const onDeleteImg = (index) => {
		const imageUrlLists = [...uploadImg];
		imageUrlLists.splice(index, 1);
		setUploadImg(imageUrlLists);
	};

	return (
		<>
			<S.ImageCountContainer>
				<ImageCount>({uploadImg.length} / 5)</ImageCount>
			</S.ImageCountContainer>
			<S.ImageLoadWrapper>
				<S.ImageLoadButton onClick={handleImgUpload}>
					<BsCameraFill size="5rem" />
					<S.ButtonText>이미지 등록</S.ButtonText>
				</S.ImageLoadButton>
				{uploadImg.length === 0 && (
					<Text>한 장 이상의 사진을 등록해주세요</Text>
				)}
				<S.PreviewBoxList>
					{uploadImg.map((image, index) => (
						<S.PreviewBox key={index}>
							{index === 0 && (
								<S.MainImageText>대표</S.MainImageText>
							)}
							<S.XButton
								key={index}
								onClick={() => onDeleteImg(index)}
							>
								x
							</S.XButton>
							<img
								src={image}
								alt={`Uploaded ${index}`}
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "1rem",
								}}
							/>
						</S.PreviewBox>
					))}

					{Array.from({
						length: Math.max(5 - uploadImg.length, 0),
					}).map((_, index) => (
						<S.PreviewBox key={uploadImg.length + index} />
					))}
					<input
						type="file"
						onChange={onChangeImgUpload}
						ref={fileInputRef}
						style={{ display: "none" }}
						multiple //여러 파일 선택 가능하게 해줌
					/>
				</S.PreviewBoxList>
			</S.ImageLoadWrapper>
		</>
	);
};

export default ImageLoader;

const ImageLoadWrapper = styled.div`
	/* width: 100%; */
	height: 30rem;
	overflow-x: hidden;
	display: grid;
	/* grid-template-rows: repeat(2, 12rem); */
	grid-row-gap: 1rem;
	padding: 1rem 0;
`;
const Text = styled.p`
	color: ${COLOR.PALETTE.magenta.base};
	/* position: absolute; */
	font-size: ${FONT_SIZE.sm};
	height: 0rem;
`;
const MainImageText = styled.div`
	position: absolute;
	color: ${COLOR.COMMON[1000]};
	font-size: ${FONT_SIZE.ti};
	line-height: 2rem;
	text-align: center;
	width: 3.5rem;
	height: 2rem;
	background-color: ${COLOR.PALETTE.mint.base};
	font-family: "SOYO_Maple_Regular";
`;
const ImageCountContainer = styled.div`
	position: absolute;
	padding: 1.8rem 0rem;
`;
const ImageCount = styled.p``;
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
	cursor: pointer;
`;
const ButtonText = styled.p`
	font-family: "SOYO_Maple_Regular";
`;
const XButton = styled.button`
	position: absolute;
	margin-left: 10.5rem;
	background-color: transparent;
	border-radius: 10rem solid;
`;
const S = {
	ImageCountContainer,
	ImageLoadWrapper,
	ImageLoadButton,
	PreviewBox,
	PreviewBoxList,
	ButtonText,
	XButton,
	MainImageText,
};
