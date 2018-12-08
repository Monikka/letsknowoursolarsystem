import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries
} from 'react-vis';

export default function BubbleChart(props) {
    const dataArr  = props.data.map((d)=> {
      const mySize = Math.round(d.Diameter/1000);
      return {x: d.AverageDistanceFromSun, y: d.MeanSurfaceTemperature, size: mySize}
  }); 
  
  return (
    <XYPlot xDomain= {[0.5, 40]} yDomain = {[30, 450]}
            xType="linear" yType="linear" 
            width={props.width} height={props.height}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis title="Avg. Distance from the Sun (AU)"/>
      <YAxis title="Mean surface Temperature (K)"/>
      <MarkSeries
        animation= "wobbly"
        margin= {{left: 40, right: 10, top: 10, bottom: 40}}
        className="bubble-chart"
        strokeWidth={2}
        opacity="0.8"
        data={dataArr}
      />
    </XYPlot>
  );
}