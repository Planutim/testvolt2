import React from 'react'
import { Container, Modal } from 'react-bootstrap'
import ModalComponent from '../lesser/Modal'
import ListComponent from '../lesser/List'

class Products extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      // <Container className='Products'>
      //   <ModalComponent />
      //   <ListComponent />
      // </Container>
      <div>Products</div>
    )
  }
}

export default Products