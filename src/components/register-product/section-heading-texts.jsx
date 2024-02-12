import { COLOR } from "../../libs/styled-components";
import { HighlightedText } from "../commons";

/**
 * @component
 * @description
 * - 각 section 의 좌측에 위치
 * - section 에 대한 이름 및 안내 텍스트 출력
 */
const SectionHeadingTexts = ({
	titleText = "",
	additionalText = "",
	isEssential = true,
}) => {
	return (
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
	);
};
export default SectionHeadingTexts;
