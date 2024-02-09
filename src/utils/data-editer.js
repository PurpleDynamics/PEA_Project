/**
 * @function
 * @paramter amountData : 서버에서 받아온 수량 data
 * @paramter unit : 수량 data에 맞는 단위
 * @returns {string}
 * @description 
 * - 수량data와 그에맞는 단위를 입력받아 data의 자리수에 따라 다른 문자열을 반환
 * - unit = º 일경우 소수점 아래 첫째자리까지 표현
 * - unit != º 일경우 정수만 표현
 */

export const appendUnit = ({ amountData, unit }) => {
  /*
  숫자의 자리수에 따라 뒤에 붙을 문자를 정하는 logic
  서버에서 전달된 data type === string 형태일것으로 생각해서 아래코드는 생략**
  if (typeof word !== "number") return ;
  */

  // 수량data 가장 앞자리 숫자를 firstNumber에 저장
  const firstNumber = amountData.split("")[0];
  let amount = (+amountData).toFixed(1); // data가 소수일 경우 소수점 아래 첫째자리 밑은 제거
  if (unit !== "º") {
    amount = Math.floor(amount);
  } // 온도에 관한 데이터가 아닌경우 정수만 취급함
  if (amount < 10000) return amount + unit;
  if (amount < 100000) return `${firstNumber} 만 ${unit}`;
  if (amount < 1000000) return `${firstNumber} 십만 ${unit}`;
  if (amount < 10000000) return `${firstNumber} 백만 ${unit}`;
  return `1 천만 이상 `;
};
