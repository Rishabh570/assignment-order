import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap'
import DeleteNotification from './DeleteNotification'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { 
  removeItem,
  addSubtractQuantity,
  initiateStates,
  showModal
} from '../actions/index'

require('../variables/styles/singular_item.css')

const ran = false;

class SingularItem extends Component {

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (!ran) {
  //     this.props.getShowStatus();
  //     ran = true;
  //   }
  // }
  state = {
    show: false,
  }


  render() {
    return (
        <div className="single_item">
        <DeleteNotification show={this.state.show} item={this.props.item} />
            <Row>
              <Col xs={1} md={1} lg={1}>
                <Image className="image_item" src={this.props.item.img_url} />
              </Col>
              <Col xs={8} md={8} lg={8}>
                <p className="item">{this.props.item.name}</p>
              </Col>
              <Col xs={3} md={3} lg={3} className="delete_icon">
                <button onClick={(e)=> this.props.showModal(e, this.props.item.id)}>X</button>
              </Col>
            </Row>
        </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    // items: state.initial.items,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
      {
        removeItem,
        addSubtractQuantity,
        initiateStates,
        showModal
      },
      dispatch
  );
};


export default (
  connect(mapStateToProps, mapDispatchToProps)(SingularItem)
);

