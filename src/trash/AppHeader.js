import React from 'react'
import { Container, Modal } from 'react-bootstrap'
import ModalComponent from '../lesser/Modal'
import ListComponent from '../lesser/List'

class Body extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Container className='Customers'>
        <ModalComponent />
        <ListComponent items={this.props.items}/>
        <div>Customers</div>
      </Container>
      
    )
  }
}

export default Body