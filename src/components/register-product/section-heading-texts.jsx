import { COLOR } from "../../libs/styled-components";
import { HighlightedText } from "../commons";

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
