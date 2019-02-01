import React from 'react'
import { Container, Modal } from 'react-bootstrap'
import ModalComponent from './lesser/Modal'
import ListComponent from './lesser/List'

class Customers extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Container className='Customers'>
        <ModalComponent />
        <ListComponent />
      </Container>

    )
  }
}