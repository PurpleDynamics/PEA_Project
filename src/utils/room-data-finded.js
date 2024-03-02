/**
 * @function
 * @parameter roomData: Array<전체 방 데이터> - 전체 방의 데이터를 받아옵니다.
 * @parameter roomId: string - 현재 접속한 방의 id값을 받아옵니다.
 * @returns {object}
 *
 * @description 전체 방 데이터에서 현재 방의 id값을 비교하여 그에 맞는 방을 찾아오는 함수입니다.
 */

export const saleData = ({ roomData, roomId }) => {
	const found = roomData.find((item) => item.idx === roomId);
	return found;
};
