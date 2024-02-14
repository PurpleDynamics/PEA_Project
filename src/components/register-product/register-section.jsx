import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
import { HighlightedText } from "../commons";

/**
 * @component
 * @parameter titleText : string - 섹션 제목글
 * @parameter additionalText : string - 부가 정보글
 * @parameter isEssential : boolean - 필수 입력 섹션 인지 여부 (true 라면, "*" 표시)
 * @returns {JSX.Element}
 * @description
 * - 사용자로부터 입력을 받아야하는 section
 * - 좌측에는 section 제목글, 설명글 등이 위치
 * - 위측에는 실제 입력 ui 위치
 */
const RegisterSection = ({
	titleText = "",
	additionalText = "",
	isEssential = true,
	children,
}) => {
	return (
		<S.SectionWrapper>
			<div>
				<h4>
					{titleText}{" "}
					{isEssential && (
						<HighlightedText color={COLOR.PALETTE.magenta.base}>
							*
						</HighlightedText>
					)}
				</h4>
				<p>{additionalText}</p>
			</div>

			{children}
		</S.SectionWrapper>
	);
};

export default RegisterSection;

const SectionWrapper = styled.section`
	width: 100%;
	height: fit-content;
	padding: 3rem 0;
	display: grid;
	grid-template-columns: 15rem 1fr; // 3rem: 섹션 제목, 나머지: 입력공간
	gap: 1rem;
`;
const S = {
	SectionWrapper,
};
