import React, { Component } from 'react';
import { Table, Grid, Row, Col } from 'react-bootstrap'
import SingularItem from './SingularItem'
require('../variables/styles/items.css')

class Items extends Component {


  render() {

    let items = this.props.items.map((data)=>{
      return( 
      <Row key={data.id}>
        <Col xs={8}>
            <SingularItem item={data} />
        </Col>
        <Col xs={2}>
            <button onClick={()=> this.props.addSubtractQuantity(data.id,"sub")}>-</button><span>{data.quantity}</span><button onClick={()=>this.props.addSubtractQuantity(data.id,"add")}>+</button>
        </Col>
        <Col xs={2}>
            <p>{data.price}</p>
        </Col>
      </Row>
    )
    })

    return (
      <div className="items_container">
      <Row className="show-grid row-header">
        <Col xs={8}>
            <h4>Items({this.props.items.length})</h4>
        </Col>
        <Col xs={2}>
            <h4>Qty</h4>
        </Col>
        <Col xs={2}>
            <h4>Price</h4>
        </Col>
      </Row>
        {items}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    items: state.initial.items,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
      { 

        addSubtractQuantity,
        initiateStates
      },
      dispatch
  );
};


export default (
  connect(mapStateToProps, mapDispatchToProps)(Items)
);

