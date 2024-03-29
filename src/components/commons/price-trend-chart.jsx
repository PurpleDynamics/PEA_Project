import ApexCharts from "apexcharts";
import { useEffect } from "react";
import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
/**
 * @component
 * @parameter width : string - chart의 넓이
 * @parameter height : string - chart의 높이
 * @parameter barColor : string - bar의 색상 token.COLOR 에서 사용
 * @parameter priceDataArr : Array - 평균금액 data를 배열형태로 넘겨주어야합니다.
 * @parameter xaxisArray : Array - x축에 전달될 값을 배열형태로
 * @parameter xaxisUnit : string - x축의 단위
 * @parameter handleClickEvent :function - bar클릭시 발생할 event
 * @returns {JSX.Element}
 * @description
 * - 해당 물품과 연관된 category의 평균가격을 보여주는 chart component입니다.
 * - 평균가격은 unit 단위로 보여집니다.
 * - 현재 사용자의 'unit'을 포함한 이전 n개월의 평균가격을 'unit' 단위로 보여줍니다.
 */
const PriceTrendChart = ({
	width = "100%",
	height = "100%",
	barColor,
	priceDataArr,
	xaxisArray,
	xaxisUnit,
	handleClickEvent,
}) => {
	useEffect(() => {
		const highestPrice = Math.max(...priceDataArr); // 최근6개월 평균가격중 가장 높은 값
		// 차트를 그리기위한 options xaxis,yaxis,bar,event에 대한 option들만 사용했습니다.
		const options = {
			chart: {
				toolbar: {
					show: false,
				},
				fontFamily: "SOYO_Maple_Bold",
				events: {
					dataPointSelection: function (
						{ dataPointIndex } // click이벤트 발생시 클릭된 bar의 index를 반환
					) {
						handleClickEvent(dataPointIndex);
					},
				},
				type: "bar",
			},
			series: [
				{
					show: false,
					name: "평균가격",
					data: priceDataArr,
				},
			],
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: 8,
					dataLabels: {
						position: "top",
					},
				},
			},
			xaxis: {
				categories: xaxisArray,
				labels: {
					formatter: function (value) {
						return value + xaxisUnit;
					},
				},
			},
			yaxis: {
				show: false,
				min: 0,
				max: highestPrice * 1.3,
				labels: {
					formatter: function (value) {
						return value + "원";
					},
				},
			},
			dataLabels: {
				style: {
					colors: [COLOR.COMMON[0]],
				},
				offsetY: -30,
				labels: {
					formatter: function (value) {
						return value + "원";
					},
				},
			},
			fill: {
				colors: [barColor],
			},
		};
		/*chart를 그리기위해서는 특정 dom요소를 가져와서 new ApexCharts((DOM요소),(option))를 해주어야함.
			chart.render()를 실행하면 매개변수에 입력된 DOM요소와 해당 option에 맞는 차트를 그려줍니다.
		*/
		const chart = new ApexCharts(document.querySelector("#chart"), options);
		chart.render();
		/* React.RestricMode에의해 차트가 2번그려지는 것을 방지하기 위해
		  chart가 존재한다면 chart.destroy()를통해 기존의 차트를 삭제*/
		return () => {
			if (chart) {
				chart.destroy();
			}
		};
	}, [priceDataArr]);

	return <S.Chart id="chart" $width={width} $height={height} />;
};

export default PriceTrendChart;

const Chart = styled.div`
	width: ${({ $width }) => $width};
	height: ${({ $height }) => $height};
`;

const S = {
	Chart,
};
