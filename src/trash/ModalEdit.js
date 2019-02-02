import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'


class ModalEdit extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      show: false
    }
  }
  handleShow(){
    this.setState({
      show: true
    })
  }
  handleClose(){
    this.setState({
      show: false
    })
  }
  update(e){
    e.preventDefault()
  }

  render(){
    return (
      <Modal 
        show={this.props.show}
        onHide={this.props.onHide}
        centered
      >
        <Modal.Header>
          <p>Delete this entry?</p>
        </Modal.Header>
        <Modal.Body>
          <Button>Yes</Button>
          <Button>No</Button>
        </Modal.Body>
      </Modal>

    )
  }
}

export default ModalEdit