/**
 * @function
 * @parameters koreanRegion : string - 한국식 주소
 * @parameters targetRegionalUnit : string - 추출하려는 한국식 행정구역 단위 ("도","시","구","동" 등)
 * @description
 * - 한국식 행정구역 단위 중 특정 주소만 추출합니다.
 * - 입력받은 주소에서 targetRegionalUnit 에 해당하는 주소가 없을 경우, 최초 입력된 주소를 그대로 반환합니다.
 * @example
 * consol.log(extractRegionalUnit({koreanRegion: "서울 강남구 역삼동", targetRegionalUnit: "동"})) // console: 역삼동
 * consol.log(extractRegionalUnit({koreanRegion: "서울 강남구 역삼동", targetRegionalUnit: "구"})) // console: 서울 강남구
 * consol.log(extractRegionalUnit({koreanRegion: "서울 강남구 역삼동", targetRegionalUnit: "시"})) // console: 서울 강남구 역삼동
 */
export const extractRegionalUnit = ({
	koreanRegion,
	targetRegionalUnit = "동",
}) => {
	const addressSplitArray = koreanRegion.split(" ");
	const unitDong = addressSplitArray.find((addressSplit) =>
		addressSplit.endsWith(targetRegionalUnit)
	);
	return unitDong ? unitDong : koreanRegion;
};
