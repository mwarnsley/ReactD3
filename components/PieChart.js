import d3 from 'd3';
import React from 'react';
import ReactDOM from 'react-dom';
import Faux from 'react-faux-dom';
import ReactFauxDOM from 'react-faux-dom';


const PiePaths = React.createClass({

    render(){

      const data = [
          { name: 'IE', count: 40 },
          { name: 'Chrome', count: 32 },
          { name: 'Safari', count: 14 },
          { name: 'Firefox', count: 9 },
          { name: 'Others', count: 6 }
      ];
          var arc = d3.svg.arc()
              .outerRadius(0)
              .innerRadius(300);
              var pie = d3.layout.pie()
                        .value(function(d){return d.count});

              var color = d3.scale.ordinal()
                        .range([
                          '#' + Math.floor(Math.random() * 16777215).toString(16),
                        '#' + Math.floor(Math.random() * 16777215).toString(16),
                        '#' + Math.floor(Math.random() * 16777215).toString(16),
                        '#' + Math.floor(Math.random() * 16777215).toString(16),
                        '#' + Math.floor(Math.random() * 16777215).toString(16),
                        '#' + Math.floor(Math.random() * 16777215).toString(16)
                      ]);



          var transform = 'translate(400, 300)';
      var paths = (pie(data)).map(function(d, i) {
          return (
              <path fill={color(i)} d={arc(d)} key={i}/>
          )
      });

        return(
            <g transform={transform}>
                {paths}
            </g>
        )
    }
});
const PieChart = React.createClass({
  getDefaultProps(){
    return {
      svgHeight: 700,
      svgWidth: 700
    }
  },

  render() {
          return(
            <svg
              height={this.props.svgHeight}
              width={this.props.svgWidth}
            >
            <PiePaths
              width={600}
              height={400}
            />
            </svg>
          );
  }
});

export default PieChart;
