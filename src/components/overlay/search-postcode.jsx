import DaumPostcode from "react-daum-postcode";
import { BsX } from "react-icons/bs";
import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
import { ResponsiveIcon } from "../commons";
import OverlayBase from "./overlay-base";

/**
 * @component
 * @parameter isOpen : boolean - 모달의 열림/닫힘에 관한 상태
 * @parameter onClose : function - 우편번호 찾기 화면을 팝업으로 띄운 후, 검색 결과를 선택하거나, 브라우저의 닫기버튼을 통해 닫았을 때 발생하는 콜백 함수
 * @parameter onComplete : function - 우편번호 검색 결과 목록에서 특정 항목을 클릭한 경우, 해당 정보를 받아서 처리할 콜백 함수 (Daum Postcode의 생성자)
 * @returns {JSX.Element}
 *
 * @description
 * - 우편번호 검색 모달 컴포넌트입니다.
 * - react-daum-postcode 라이브러리를 사용하여 다음 우편번호 서비스를 랜더링합니다.
 * - 모달이 열릴 때에는 isOpen 상태를 true로 설정해야 합니다.
 * - 모달을 닫을 때에는 onClose 콜백 함수를 호출해야 합니다.
 * - 주소 선택이 완료되면 onComplete 콜백 함수가 실행됩니다.
 * - onComplate 함수를 정의하지 않거나 null값일 경우 검색은 가능하지만, 결과 항목을 클릭하면 아무 일도 일어나지 않습니다.
 * - onComplate 함수를 정의할 때 넣는 인자에는 우편번호 검색 결과 목록에서 사용자가 클릭한 주소 정보가 들어가게 됩니다.
 */

const SearchPostcodeModal = ({ isOpen, onClose, onComplete }) => {
	const handleComplete = (data) => {
		onComplete(data);
		onClose();
	};

	const onClickClose = () => {
		onClose();
	};

	return (
		<>
			{isOpen && (
				<OverlayBase isFiltered={true} onClose={onClose}>
					<S.PostcodeWrapper>
						<S.IconContainer>
							<ResponsiveIcon icon={BsX} onClick={onClickClose} />
						</S.IconContainer>
						<S.DaumPostCode onComplete={handleComplete} />
					</S.PostcodeWrapper>
				</OverlayBase>
			)}
		</>
	);
};

export default SearchPostcodeModal;

const IconContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`;
const PostcodeWrapper = styled.div`
	display: inline-block;
	justify-content: center;
	align-items: center;
	width: 45rem;
	height: 55rem;
	padding: 2rem;
	border-radius: 3.8rem;
	background-color: ${COLOR.COMMON[1000]};
`;

/**
 * DaumPostcode Style의 기본 설정 height: 100%.
 * min-height를 주지 않으면 스크롤이 생기는 형태이기때문에, Modal size에 맞춰서 47rem을 지정해서 스크롤을 없앴습니다.*/
const DaumPostCode = styled(DaumPostcode)`
	min-height: 47rem;
`;
const S = { IconContainer, PostcodeWrapper, DaumPostCode };
