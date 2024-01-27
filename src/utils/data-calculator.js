const getDiffDate = ({ date1, date2 }) => {
	const diffHour = date1.getTime() - date2.getTime();
	return Math.floor(Math.abs(diffHour / (1000 * 60 * 60)));
};

export const printPeriodAsString = ({ formattedDate }) => {
	const todaysDate = new Date(); // 호출 시각

	const enteredDate = new Date(formattedDate);
	if (enteredDate == "Invalid Date") return "invalid_date";

	const diffHour = getDiffDate({ date1: todaysDate, date2: enteredDate });
	if (diffHour < 24) return diffHour + " 시간 전"; // 24시간 이상이 아니라면 "시간" 단위로 반환

	const diffDate = Math.floor(diffHour / 24);
	if (diffDate < 30) return diffDate + " 일 전"; // 30일 이상이 아니라면 "일" 단위로 반환
	if (diffDate < 365)
		return Math.floor(diffDate / 30) + " 달 전"; // 1년 (= 365일) 이상이 아니라면 "월" 단위로 반환
	else return Math.floor(diffDate / (30 * 12)) + " 년 전"; // 1년 이상이라면 "년" 단위로 반환
};
