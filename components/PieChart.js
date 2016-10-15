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
        ],
            arc = d3.svg.arc()
                    .outerRadius(0)
                    .innerRadius(300),
            pie = d3.layout.pie()
                    .value((d) =>{
                      return d.count
                    }),
            color = d3.scale.ordinal()
                    .range([
                        '#' + Math.floor(Math.random() * 16777215).toString(16),
                        '#' + Math.floor(Math.random() * 16777215).toString(16),
                        '#' + Math.floor(Math.random() * 16777215).toString(16),
                        '#' + Math.floor(Math.random() * 16777215).toString(16),
                        '#' + Math.floor(Math.random() * 16777215).toString(16),
                        '#' + Math.floor(Math.random() * 16777215).toString(16)
                      ]),
            transform = 'translate(400, 300)',
            paths = (pie(data)).map((d, i) => {
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
