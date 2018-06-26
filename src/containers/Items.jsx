import React, { Component } from 'react';
import { Table, Grid, Row, Col } from 'react-bootstrap'
import { addSubtractQuantity, initiateStates } from '../actions/index'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SingularItem from './SingularItem'
require('../variables/styles/items.css')

class Items extends Component {


  addSubtractQuantityHandler = (id, operation) => {
    console.log("id: ", id, "operation: ", operation, '\n')
    let len = this.props.items.length
    let copyState = [...this.props.items]
    for(let i=0;i<len;i++){
      if(copyState[i]["id"]===id){
        if(operation==="add"){
          copyState[i]["quantity"] += 1
        }else{
          copyState[i]["quantity"] -= 1
        }
      }
    }
    // Dispatch an action to store this state
    this.props.addSubtractQuantity(copyState);
  }  

  render() {

    let items = this.props.items.map((data)=>{
      return( 
      <Row key={data.id}>
        <Col xs={8}>
            <SingularItem item={data} />
        </Col>
        <Col xs={2}>
            <button onClick={()=> this.addSubtractQuantityHandler(data.id,"sub")}>-</button><span>{data.quantity}</span><button onClick={()=>this.props.addSubtractQuantity(data.id,"add")}>+</button>
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

