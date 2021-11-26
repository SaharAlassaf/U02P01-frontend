import React, { Component } from 'react';
import CanvasJSReact from "/Users/shr/Documents/U02P01-frontend/src/assets/js/canvasjs.react.js"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class PieChartWithCustomization extends Component {
	render() {
		const options = {
			theme: "dark2",
			animationEnabled: true,
			exportFileName: "Subscription",
			exportEnabled: true,
			// title:{
			// 	text: "Top Categories of New Year's Resolution"
			// },
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 32, label: "Health" },
					{ y: 22, label: "Finance" },
					{ y: 15, label: "Education" },
					{ y: 19, label: "Career" },
					{ y: 5, label: "Family" },
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default PieChartWithCustomization;