import d3 from 'd3';
import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';
import Bar from './components/Bar';
import Line from './components/Line';
import PieChart from './components/PieChart';

ReactDOM.render(
  <Row>
    <Col md={4}>
      <Bar/>
    </Col>
    <Col md={4}>
      <Line/>
    </Col>
    <Col md={4}>
      <PieChart/>
    </Col>
  </Row>
  ,document.getElementById('app')
);
