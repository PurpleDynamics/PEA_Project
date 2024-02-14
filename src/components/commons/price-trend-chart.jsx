import ApexCharts from "apexcharts";
import { useEffect } from "react";
import styled from "styled-components";

import { COLOR } from "../../libs/styled-components";
/**
 * @component
 * @parameter width : string - chart의 넓이
 * @parameter height : string - chart의 높이
 * @parameter barColor : string - bar의 색상 token.COLOR 에서 사용
 * @returns {JSX.Element}
 * @description
 * - 해당 물품과 연관된 category의 평균가격을 보여주는 chart component입니다.
 * - 평균가격은 월 단위로 보여집니다.
 * - 현재 사용자의 '월'을 포함한 이전 6개월의 평균가격을 '월' 단위로 보여줍니다.
 */

const PriceTrendChart = ({ width = "100%", height = "100%", barColor }) => {
	useEffect(() => {
		/**
		 * @function
		 * @returns {Array}
		 * @description
		 * - 현재사용자의 '월'을 포함한 최근6개월의 '월'정보를 받아오는 Array를 return해줍니다.
		 * - 추후에 utils에 chart-editor.js 파일에 들어갈예정이니 참고해주세요***
		 */
		const getRecent6MonthsArray = () => {
			const thisMonth = new Date().getMonth() + 1;
			return Array(6)
				.fill()
				.map((month, idx) => {
					let target = 0;
					if (thisMonth - idx < 1) {
						target = thisMonth - idx + 12;
					} else {
						target = thisMonth - idx;
					}
					month = target;
					return month;
				})
				.reverse();
		};
		const last6MothsPriceDataArr = [3200, 2000, 500, 600, 1854, 200];
		const highestPrice = Math.max(...last6MothsPriceDataArr); // 최근6개월 평균가격중 가장 높은 값

		const options = {
			chart: {
				toolbar: {
					show: false,
				},
				fontFamily: "SOYO_Maple_Bold",
				events: {
					dataPointSelection: function (
						event,
						chartContext,
						{ dataPointIndex }
					) {
						console.log(event, chartContext, dataPointIndex);
					},
				},
				type: "bar",
			},
			series: [
				{
					show: false,
					name: "평균가격",
					data: last6MothsPriceDataArr,
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
				categories: getRecent6MonthsArray(),
				labels: {
					formatter: function (value) {
						return value + "월";
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
		const chart = new ApexCharts(document.querySelector("#chart"), options);
		chart.render();

		return () => {
			if (chart) {
				chart.destroy();
			}
		};
	}, []);

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
