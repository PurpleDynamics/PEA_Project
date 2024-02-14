import { useEffect } from "react";
import styled from "styled-components";

import { COLOR } from "../styled-components";

/**
 * @component
 * @parameter setMap : function - Map 객체를 설정하는 콜백 함수
 * @parameter setMarker : function - Marker 객체를 설정하는 콜백 함수
 * @parameter updateAddressFromLatLng : function - 좌표를 받아서 주소를 업데이트 하는 함수
 * @returns {JSX.Element}
 *
 * @description
 * - Kakao Maps API를 사용하여 카카오 맵을 표시하는 컴포넌트 입니다.
 * - 맵을 클릭할 때 발생하는 이벤트를 처리할 수 있습니다.
 * - 맵의 다른 위치를 클릭할 경우, updateAddressFromLatLng 함수로 좌표를 받아서 주소를 업데이트합니다.
 * - Kakao Maps API의 추가적인 Methods와 Parameters는 API Docs에서 확인할 수 있습니다.
 */

/**
 * script로 kakao map api를 가져올 경우 window 전역 객체로 들어가게 되지만, 함수형 컴포넌트에서는 이를 바로 인식하지 못한다고 합니다.
 * 때문에 아래 코드와 같이 작성하여 함수형 컴포넌트에 인지시키고 window에서 kakao 객체를 뽑아서 사용할 수 있습니다.
 */
const { kakao } = window;

const KakaoMap = ({ setMap, setMarker, updateAddressFromLatLng }) => {
	useEffect(() => {
		window.kakao.maps.load(() => {
			const container = document.getElementById("map"); // 지도가 표시될 HTML element
			const option = {
				center: new window.kakao.maps.LatLng(33.450701, 126.570667), //LatLng : 중심 좌표 (필수)
				level: 3, //Number : Map 확대 수준 (기본값: 3)
			};

			const newMap = new window.kakao.maps.Map(container, option);
			setMap(newMap);

			const newMarker = new window.kakao.maps.Marker({
				position: newMap.getCenter(),
				map: newMap,
			});
			setMarker(newMarker);

			/**
			 * @function
			 * @parameter mouseEvent : object - 클릭 이벤트에 대한 마우스 이벤트 객체
			 *
			 * @description 맵을 클릭했을 때, 클릭한 지점의 위도와 경도를 포함하는 객체를 받아서 marker와 map의 위치를 변경합니다.
			 */
			const handleMapClick = (mouseEvent) => {
				const latLng = mouseEvent.latLng;
				newMarker.setPosition(latLng);
				newMap.panTo(latLng);
				updateAddressFromLatLng(latLng);
			};

			window.kakao.maps.event.addListener(
				newMap,
				"click",
				handleMapClick
			);
		});
	}, [setMap, setMarker]);

	return <S.Map id="map" />;
};
export default KakaoMap;

const Map = styled.div`
	width: 80%;
	min-width: 25rem;
	height: 30rem;
	border-radius: 1rem;
	background-color: ${COLOR.COMMON[800]};
`;

const S = {
	Map,
};
