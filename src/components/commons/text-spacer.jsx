import styled from "styled-components";

/**
 * @component
 * @parameter spacer: number - 숫자를 입력 받은 만큼 space bar 만큼의 공백을 입력합니다.
 * @returns {JSX.Element}
 *
 * @description 글자 사이에 {" "} 혹은 space가 안되는 곳에 사용할 수 있는 text-spacer입니다.
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
