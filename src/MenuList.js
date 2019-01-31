import React from 'react'
import { Container, Row, Col, Button, Table } from 'react-bootstrap'

class MenuList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list: {
        customers: [],
        products: [],
        invoices: []
      }
    }
  }
  componentDidUpdate(prevProps){
    // if(prevProps.pageName!==this.props.pageName){
    //   fetch(`/api/${this.props.pageName}`)
    //     .then(res=>res.json())
    //     .then((result)=>{
    //       console.log('changed!')
    //       this.setState({
    //         items: result
    //     })
    //   })
    // }
  }
  historyClick(){

  }
  render(){
    return (
      <Container className={this.props.pageName}>
        <Row>
          <Col>
            <h2>{`${this.props.pageName} list`}</h2>
          </Col>
          <Col>
            <Button variant='outline-dark'>Create</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={this.historyClick.bind(this)}>Click me2</Button>
          </Col>
        </Row>
        <Table>
          <thead>
          </thead>
        </Table>
        {/* <p>{JSON.stringify(this.state.items[0])}</p> */}
      </Container>
    )
  }
}

export default MenuList