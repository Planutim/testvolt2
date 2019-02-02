import React from 'react'
import { Navbar, Nav, Container, Col } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap/'

class Header extends React.Component{
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
        <Navbar.Brand href='#home'>Invoice App</Navbar.Brand>
        <Nav>
          <LinkContainer to='/invoices'>
            <Nav.Link onClick={this.props.changePage.bind(null, 'invoices')}>Invoices</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/products'>
            <Nav.Link onClick={this.props.changePage.bind(null, 'products')}>Products</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/customers'>
            <Nav.Link onClick={this.props.changePage.bind(null, 'customers')}>Customers</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    )
  }
}
export default Header