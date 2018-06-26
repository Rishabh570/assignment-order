import React, { Component } from 'react'
require('../variables/styles/delete_notification.css')

class DeleteNotification extends Component {


  render() {
    return (
      <div className={"delete_container " + this.props.show} >
        <h1>ALERT</h1>
        <p>{this.props.item.name} costing worth ${this.props.item.price} has been deleted from the cart.</p>
      </div>
    );
  }
}

export default DeleteNotification;
