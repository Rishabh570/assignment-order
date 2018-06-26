import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
require('./total.css')

class Total extends Component {


  render() {
      let sumWithoutDiscount = this.props.items.reduce((total, data) => total + data.price*data.quantity, 0)
      let discount = this.props.items.reduce((total, data) => total + data.discount*data.quantity, 0)
    return (
      <div className="total_container">
        <Row className="show-grid">
            <Col xs={12}>
                <h4 className="total_header">Total</h4>
            </Col>
        </Row>
        <Row>
            <Col xs={9}>
                <p>Items({this.props.items.length})</p>
            </Col>
            <Col xs={3}>
                <p>: ${sumWithoutDiscount}</p>
            </Col>
        </Row>
        <Row>
            <Col xs={9}>
                <p>Discount</p>
            </Col>
            <Col xs={3}>
                <p>: -${discount}</p>
            </Col>
        </Row>
        <Row>
            <Col xs={9}>
                <p>Type Discount</p>
            </Col>
            <Col xs={3}>
                <p>: -$1</p>
            </Col>
        </Row>
        <Row className="total">
            <Col xs={6}>
                <p>Order Total</p>
            </Col>
            <Col xs={6}>
                <p>${sumWithoutDiscount-discount}</p>
            </Col>
        </Row>
      </div>
    );
  }
}

export default Total;
