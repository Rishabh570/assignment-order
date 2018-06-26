import React, { Component } from 'react';
import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Items from './Items'
import Total from './Total'
import { initiateStates, addSubtractQuantity, removeItem } from '../actions/index'


require('../variables/styles/App.css')


let ran = false;

class App extends Component {

    static getDerivedStateFromProps(nextProps, prevState) {
      if (!ran) {
        console.log("Going to trigger an action to initialize our states\n")
        this.props.initiateStates();
        ran = true;
      }
    }


  render() {

    const { classes } = this.props;


    return (
      <div className='outermost_container'>
        <Grid className='grid outer-grid'>
        <Row className='show-grid'>
            <Col md={1} sm={1} xs={1}>
            <Button>
                <Glyphicon glyph="glyphicon glyphicon-chevron-left" />
            </Button>
            </Col>
            <Col xs={11}>
              <h1 className='ordertop'>Order Summary</h1>
            </Col>
          </Row>

          <Row className='show-grid'>
            <Col xs={12} md={4} mdPush={8} className='two'>
              <Total items={this.props.items}/>
            </Col>
            <Col xs={12} md={8} mdPull={4} className='one' >
              <Items
                items={this.props.items}
                addSubtractQuantity={this.props.addSubtractQuantity}/>
            </Col>
          </Row>
        </Grid>
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
        removeItem,
        addSubtractQuantity,
        initiateStates
      },
      dispatch
  );
};


export default (
  connect(mapStateToProps, mapDispatchToProps)(App)
);

