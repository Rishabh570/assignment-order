import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap'
import DeleteNotification from './DeleteNotification'
require('./singular_item.css')

class SingularItem extends Component {

  state={
    show: false
  }

  showModal = (id) => {
    this.setState({show:true})
    setInterval(()=>{this.props.removeItem(id)},2000);
    
  }


  render() {
    return (
        <div className="single_item">
        <DeleteNotification show={this.state.show} item={this.props.item} hideModal={this.hideModal} />
            <Row>
              <Col xs={1} md={1} lg={1}>
                <Image className="image_item" src={this.props.item.img_url} />
              </Col>
              <Col xs={8} md={8} lg={8}>
                <p className="item">{this.props.item.name}</p>
              </Col>
              <Col xs={3} md={3} lg={3} className="delete_icon">
                <button onClick={()=> this.showModal(this.props.item.id)}>X</button>
              </Col>
            </Row>
        </div>
    );
  }
}

export default SingularItem;
