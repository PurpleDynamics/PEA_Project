/**
 * @function
 * @parameters koreanRegion : string - 한국식 주소
 * @description
 * - 한국의 행정구역 중 '-동' 단위의 주소만 추출합니다.
 * - 입력받은 주소에서 '-동' 단위의 주소가 없을 경우, 최초 입력된 주소를 그대로 반환합니다.
 * @example
 * consol.log(extractRegionalUnitDong({koreanRegion: "서울 강남구 역삼동"})) // console: 역삼동
 * consol.log(extractRegionalUnitDong({koreanRegion: "서울 강남구"})) // console: 서울 강남구
 */
export const extractRegionalUnitDong = ({ koreanRegion }) => {
	const addressSplitArray = koreanRegion.split(" ");
	const unitDong = addressSplitArray.find((addressSplit) =>
		addressSplit.endsWith("동")
	);
	return unitDong ? unitDong : koreanRegion;
};

/**
 * @function
 * @parameters koreanRegion : string - 한국식 주소
 * @description
 * - 한국의 행정구역 중 '-구' 단위의 주소만 추출합니다.
 * - 입력받은 주소에서 '-구' 단위의 주소가 없을 경우, 최초 입력된 주소를 그대로 반환합니다.
 * @example
 * consol.log(extractRegionalUnitDong({koreanRegion: "서울 강남구 역삼동"})) // console: 강남구
 * consol.log(extractRegionalUnitDong({koreanRegion: "서울"})) // console: 서울
 */
export const extractRegionalUnitGu = ({ koreanRegion }) => {
	const addressSplitArray = koreanRegion.split(" ");
	const unitGu = addressSplitArray.find((addressSplit) =>
		addressSplit.endsWith("동")
	);
	return unitGu ? unitGu : koreanRegion;
};
