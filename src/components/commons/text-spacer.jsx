import styled from "styled-components";

/**
 * @component
 * @parameter spacer: number - 숫자를 입력 받은 만큼 space bar 만큼의 공백을 입력합니다.
 * @returns
 */

const TextSpacer = ({ spacer = 1 }) => {
	return (
		<>
			{Array(spacer)
				.fill()
				.map((_, index) => (
					<S.Space key={index}>&nbsp;</S.Space>
				))}
		</>
	);
};
export default TextSpacer;

const Space = styled.span``;

const S = {
	Space,
};
