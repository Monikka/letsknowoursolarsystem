import React from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';

const LineChart = (props) => {

    const dataArr = props.data.map((d)=> {
        return {x: d.x, y: d.y}
    });

    return (

        // <XYPlot width={400} height={400} xDomain={[0,20]} yDomain={[0,20]}>
        <XYPlot
            xType="ordinal"
            width={props.width}
            height={props.height}>
            <XAxis title="X-axis" />
            <YAxis title="Y-axis" />
            <HorizontalGridLines />
            <VerticalGridLines />
                <LineSeries
                    data={props.data}
                    style={{stroke: 'violet', strokeWidth: 3}}/>
        </XYPlot>
    );
}

export default LineChart;