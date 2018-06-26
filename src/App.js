import React, { Component } from 'react';
import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap'
import Items from './Items'
import Total from './Total'
require('./App.css')

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      items: [ 
        { "id": 9090, "quantity": 1, "name": "Item1", "price": 200, "discount": 10, "type": "fiction", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" },
        { "id": 9091, "quantity": 1, "name": "Item2", "price": 250, "discount": 15, "type": "literature", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" },
        { "id": 9092, "quantity": 1, "name": "Item3", "price": 320, "discount": 5, "type": "literature", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" },
        { "id": 9093, "quantity": 1, "name": "Item4", "price": 290, "discount": 0, "type": "thriller", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" },
        { "id": 9094, "quantity": 1, "name": "Item5", "price": 500, "discount": 25, "type": "thriller", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" },
        { "id": 9095, "quantity": 1, "name": "Item6", "price": 150, "discount": 5, "type": "literature", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" },
        { "id": 9096, "quantity": 1, "name": "Item7", "price": 700, "discount": 22, "type": "literature", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" },
        { "id": 9097, "quantity": 1, "name": "Item8", "price": 350, "discount": 18, "type": "fiction", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" } 
      ]
    }
  }

  removeItem = (id) => {
    let len = this.state.items.length
    let copyState = [...this.state.items]
    let newState = []
    for(let i=0;i<len;i++){
      if(copyState[i]["id"]!==id){
        newState.push(this.state.items[i])
      }
    }
    this.setState({
      items: newState
    })
  }

  addSubtractQuantity = (id, operation) =>{
    let len = this.state.items.length
    let copyState = [...this.state.items]
    for(let i=0;i<len;i++){
      if(copyState[i]["id"]===id){
        if(operation==="add"){
          copyState[i]["quantity"] += 1
        }else{
          copyState[i]["quantity"] -= 1
        }
      }
    }
    this.setState({
      items: copyState
    })
  }

  render() {
    return (
      <div className="outermost_container">
        <Grid className="grid outer-grid">
        <Row className="show-grid">
            <Col md={1} sm={1} xs={1}>
            <Button>
                <Glyphicon glyph="glyphicon glyphicon-chevron-left" />
            </Button>
            </Col>
            <Col xs={11}>
              <h1 className="ordertop">Order Summary</h1>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} md={4} mdPush={8} className="two">
              <Total items={this.state.items}/>
            </Col>
            <Col xs={12} md={8} mdPull={4} className="one">
              <Items
                items={this.state.items}
                removeItem={this.removeItem}
                addSubtractQuantity={this.addSubtractQuantity}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
