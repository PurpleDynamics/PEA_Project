import { COLOR } from "../libs/styled-components/reference-tokens/color";

/**
 * @param {number} id 고유값
 * @return {Object} 'base', 'light', 'weight' 값
 * @description
 * - id(숫자) 값에 따라 색상 팔레트 중 하나의 색상을 지정한다.
 * - return 값은 색상테마의 객체 {base, light, weight} 형태로 나타난다.
 */
export const pickPaletteOneById = ({ id }) => {
	const paletteArray = Object.values(COLOR.PALETTE);
	const numberOfPalette = paletteArray.length; // 팔레트 색상의 갯수
	const mod = id % numberOfPalette; // id 를 팔레트 색상의 갯수 나눴을 때, 나머지
	return paletteArray[mod];
};

/**
 * @param {string} text 고유한 텍스트
 * @return {Object} 'base', 'light', 'weight' 값
 * @description
 * - text(문자) 값을 유니코드(숫자)로 변환하여 색상 팔레트 중 하나의 색상을 지정한다.
 * - return 값은 색상테마의 객체 {base, light, weight} 형태로 나타난다.
 */
export const pickPaletteOneByText = ({ text }) => {
	let textToNumber = 0;
	const paletteArray = Object.values(COLOR.PALETTE);
	const numberOfPalette = paletteArray.length; // 팔레트 색상의 갯수
	for (let i = 0; i < text.length; i++) {
		textToNumber += text.charCodeAt(i) % numberOfPalette;
	}
	// reduce 적용해보기
	const mod = textToNumber % numberOfPalette; // id 를 팔레트 색상의 갯수 나눴을 때, 나머지
	return paletteArray[mod];
};
