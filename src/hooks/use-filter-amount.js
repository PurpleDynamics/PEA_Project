import { useState } from "react";
/**
 * @function
 * @returns : {amount,setAmount ,handleEditAmount}
 * @description  수량정보를 가공하기 위한 hook function
 */
export const useFilterAmount = () => {
	const [amount, setAmount] = useState(""); // 서버로부터 넘어온 수량정보를 담는 state
	/**
	 * - 서버로 부터받아온 user에관한 수량 정보를 받아 자리수에 따라 구분해주는 함수
	 * - 1~9999는 그대로 return amountData
	 * - 10000이상의 숫자인경우 return 제일앞자리숫자 + `만+`|| `십만+` || `백만+`
	 *   ex) 2 천만+
	 */
	const handleEditAmount = (amountData) => {
		/*
		서버에서 전달된 data type === string 형태일것으로 생각해서 아래코드는 생략**
		if (typeof word !== "number") return ;
		*/
		const firstNumber = amountData.split("")[0]; // 서버로부터 넘어온 숫자의 가장 앞자리 숫자를 firstNumber에 저장
		// 숫자의 자리수에 따라 뒤에 붙을 문자를 정하는 logic
		if (amountData.length < 5) return setAmount(amountData);
		if (amountData.length === 5) return setAmount(`${firstNumber} 만+`);
		if (amountData.length === 6) return setAmount(`${firstNumber} 십만+`);
		if (amountData.length === 7) return setAmount(`${firstNumber} 백만+`);
		return setAmount(`${firstNumber} 천만+`);
	};
	return { amount, setAmount, handleEditAmount };
};
