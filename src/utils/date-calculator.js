/**
 * @function
 * @parameter date1 : Date - 차이를 구할 날짜 1
 * @parameter date2 : Date - 차이를 구할 날짜 2
 * @returns {number}
 *
 * @description
 * - 두 날짜 간의 차이를 시간 단위로 반환합니다.
 */
const getDiffHour = ({ date1, date2 }) => {
	const diffHour = date1.getTime() - date2.getTime();
	return Math.floor(Math.abs(diffHour / (1000 * 60 * 60)));
};

/**
 * @function
 * @parameter formattedDate : string - 'yyyy-mm-dd' 형태의 날짜
 * @returns {string}
 *
 * @description
 * - 전달 받은 일로부터 오늘까지의 기간이 문자열로 출력됩니다.
 * - 잘못된 날짜가 입력된다면 "invalid_date" 라는 문자열이 반환됩니다.
 * - 24 시간 미만 이라면 "최근" 으로 반환됩니다.
 * - 30 일 미만 이라면 "x 일 전" 으로 반환됩니다.
 * - 365 일 미만 이라면 "x 달 전" 으로 반환됩니다.
 * - 그 이상의 차이가 있다며누 "x 년 전" 으로 반환합니다.
 */
export const printPeriodAsString = ({ formattedDate }) => {
	const todaysDate = new Date(); // 호출 시각

	const enteredDate = new Date(formattedDate);
	if (enteredDate == "Invalid Date") return "invalid_date";

	const diffHour = getDiffHour({ date1: todaysDate, date2: enteredDate });
	if (diffHour < 24) return "최근"; // 24시간 이상이 아니라면 "시간" 단위로 반환

	const diffDate = Math.floor(diffHour / 24);
	if (diffDate < 30) return diffDate + " 일 전"; // 30일 이상이 아니라면 "일" 단위로 반환
	if (diffDate < 365)
		return Math.floor(diffDate / 30) + " 달 전"; // 1년 (= 365일) 이상이 아니라면 "월" 단위로 반환
	else return Math.floor(diffDate / (30 * 12)) + " 년 전"; // 1년 이상이라면 "년" 단위로 반환
};

/**
 * @function
 * @returns {Array}
 * @description 현재사용자의 '월'을 포함한 최근6개월의 '월'정보를 받아오는 Array를 return해줍니다.
 */
export const getRecentNthMonthsArray = ({ Nmonth }) => {
	const thisMonth = new Date().getMonth() + 1; // 현재 '월'에서 -1된 값을 반환해서 +1해준겁니다.
	return Array(Nmonth)
		.fill(thisMonth + 11)
		.map((month, idx) => {
			return ((month - idx) % 12) + 1;
		})
		.reverse(); // 배열의 마지막 요소가 현재 '월'이어야 하기때문에 reverse()를 해줍니다.
};
