import d3 from 'd3';
import React from 'react';
import ReactDOM from 'react-dom';

const Grid = React.createClass({
    propTypes: {
        height: React.PropTypes.number,
        grid: React.PropTypes.func,
        gridType: React.PropTypes.oneOf(['x','y'])
    },

    componentDidUpdate() {
      this.renderGrid();
    },
    componentDidMount() {
      this.renderGrid();
    },
    renderGrid() {
        var node = ReactDOM.findDOMNode(this);
        d3.select(node).call(this.props.grid);
    },
    render() {
        var translate = "translate(0," + (this.props.h) + ")";
        return (
            <g className="y-grid" transform={this.props.gridType === 'x' ? translate: ""}></g>
        );
    }

});

export default Grid;
