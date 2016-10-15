import d3 from 'd3';
import React from 'react';
import ReactDOM from 'react-dom';


const Axis = React.createClass({
    propTypes: {
        height: React.PropTypes.number,
        axis: React.PropTypes.func,
        axisType: React.PropTypes.oneOf(['x','y'])

    },
    componentDidUpdate() {
      this.renderAxis();
    },
    componentDidMount() {
      this.renderAxis();
    },
    renderAxis() {
        var node = ReactDOM.findDOMNode(this);
        d3.select(node).call(this.props.axis);

    },
    render() {
        var translate = "translate(0," + (this.props.height) + ")";
        var yLabel = "Hits";
        var xLabel = "Days";
        var middleText = {
          textAnchor: 'middle'
        };
        var transformYLabel = 'translate(-50,' + this.props.height / 2 +') rotate(-90)';
        var transformXLabel = 'translate(' + this.props.width / 2 + ',60)';

        if(this.props.axisType === 'x'){
          return (
              <g className="axis" transform={translate} >
                <text
                  x={0}
                  y={0}
                  style={middleText}
                  transform={transformXLabel}
                >
                  {xLabel}
                </text>
              </g>
          );
        }else if(this.props.axisType === 'y') {
          return (
              <g className="axis" transform={""} >
                <text
                  x={0}
                  y={0}
                  style={middleText}
                  transform={transformYLabel}
                >
                  {yLabel}
                </text>
              </g>
            );
        }
    }
});

export default Axis;
