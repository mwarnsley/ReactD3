import d3 from 'd3';
import React from 'react';
import ReactDOM from 'react-dom';
import Axis from './Axis';
import Grid from './Grid';

const Bar = React.createClass({
  getDefaultProps(){
    return {
      svgHeight: 450,
      svgWidth: 800,
      svgId: 'bar_svg'
    };
  },
  render(){
    const margin = { top: 20, bottom: 100, left: 80, right: 20 },
          height = this.props.svgHeight - margin.top - margin.bottom,
          width = this.props.svgWidth - margin.left - margin.right,
          transform = 'translate(' + margin.left + ',' + margin.top + ')',
          data = [
            {"day":"Mon", "hits": 476},
            {"day":"Tue", "hits": 678},
            {"day":"Wed", "hits": 567},
            {"day":"Thur", "hits": 425},
            {"day":"Fri", "hits": 387},
            {"day":"Sat", "hits": 1025},
            {"day":"Sun", "hits": 978}
          ],
          colorPicker = (v) => {
            return '#' + Math.floor(Math.random() * 16777215).toString(16)
          },
          xScale = d3.scale.ordinal()
                      .domain(data.map((d) => {
                        return d.day
                      }))
                      .rangeBands([0, width]),
          yScale = d3.scale.linear()
                      .domain([0, d3.max(data, (d) => {
                        return d.hits;
                      })])
                      .range([height, 0]),
          xAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient('bottom'),
          yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient('left'),
          yGrid = d3.svg.axis()
                    .scale(yScale)
                    .orient('left')
                    .tickSize(-width, 0, 0)
                    .tickFormat(""),
          xGrid = d3.svg.axis()
                    .scale(xScale)
                    .orient('bottom')
                    .tickSize(-height, 0, 0)
                    .tickFormat(""),
          rectColor = (d) => {
            return colorPicker(d.hits);
          },
          rectHeight = (d, i) => {
            return height - yScale(d.hits);
          },
          rectWidth = (d, i) => {
            return xScale.rangeBand() - 10;
          },
          x = (d, i) => {
            return xScale(d.day);
          },
          y = (d, i) => {
            return yScale(d.hits);
          },
          rect = (data).map((d, i) => {
            return(
              <rect
                fill={rectColor(d)}
                x={x(d,i)}
                y={y(d,i)}
                key={i}
                height={rectHeight(d)}
                width={rectWidth(d)}
              />
            )
          });

    return(
      <svg
        id={this.props.svgId}
        height={this.props.svgHeight}
        width={this.props.svgWidth}
      >
         <g transform={transform}>
           <Grid height={height} grid={yGrid} gridType="y"/>
           <Axis height={height} width={width} axis={xAxis} axisType="x" />
           <Axis height={height} axis={yAxis} axisType="y" />
           {rect}
        </g>
      </svg>
    );
  }
});

export default Bar;
