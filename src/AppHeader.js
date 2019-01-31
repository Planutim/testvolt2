import React from 'react'
import { Navbar, Nav, Container, Col } from 'react-bootstrap'

class AppHeader extends React.Component{
  constructor(props){
    super(props)
  }
  changePage(pageName){
    this.props.changePage(pageName)
  }
  test(){
    // console.log(JSON.stringify(location))
  }
  render(){
    return (
    <Navbar bg='light' variant='light' >

      <Navbar.Brand href='#home'>Invoice AppTest</Navbar.Brand>
      <Nav>
        <Nav.Link href='#' onClick={this.changePage.bind(this, 'invoices')}>Invoices</Nav.Link>
        <Nav.Link href='#' onClick={this.changePage.bind(this, 'products')}>Products</Nav.Link>
        <Nav.Link href='#' onClick={this.changePage.bind(this,'customers')}>Customers</Nav.Link>
      </Nav>
    </Navbar>
    )
  }
}
export default AppHeader