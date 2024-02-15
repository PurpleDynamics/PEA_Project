/**
 * @function
 * @returns {Array}
 * @description
 * - 현재사용자의 '월'을 포함한 최근6개월의 '월'정보를 받아오는 Array를 return해줍니다.\
 */
export const getRecent6MonthsArray = () => {
	const thisMonth = new Date().getMonth() + 1; // 현재 '월'에서 -1된 값을 반환해서 +1해준겁니다.
	return Array(6)
		.fill(thisMonth + 11)
		.map((month, idx) => {
			return ((month - idx) % 12) + 1;
		})
		.reverse(); // 배열의 마지막 요소가 현재 '월'이어야 하기때문에 revers()를 해줍니다.
};
