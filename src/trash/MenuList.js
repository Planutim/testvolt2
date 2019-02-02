import React from 'react'
import RB,{ Container, Row, Col, Button, Table, Modal } from 'react-bootstrap'
import _ from 'lodash'

class MenuList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      show: false,
      list: {
        customers: [],
        products: [],
        invoices: []
      }
    }
    this.handleShow = this.handleShow.bind(this)
    this.handleClose=this.handleClose.bind(this)
  }
  componentDidM(prevProps){
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
    history.back()
  }
  handleClose(){
    this.setState({show: false})
  }
  handleShow(){
    this.setState({show: true})
  }
  render(){
    var pageName = this.props.state.pageName
    var isLoaded = this.props.state.isLoaded[pageName]
    var items = this.props.state.items[pageName] 
    // if(isLoaded) console.log(JSON.stringify(items))
    // console.log(JSON.stringify(this.props.items))
    return (
      <Container className={pageName}>
        <Row>
          <Col>
            <h2>{`${pageName} list`}</h2>
          </Col>  
          <Col>
            <Button variant='outline-dark' onClick={this.handleShow}>Create</Button>
          </Col>
        </Row>
        <br />
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Testing</Modal.Title>
          </Modal.Header>
          <Modal.Body>register</Modal.Body>
        </Modal>
        <Table show={isLoaded}>
          <thead>
            <tr>
              {
                isLoaded&&typeof items[0]=='object'&&Object.keys(items[0]).map((key,i)=>(
                  <th key={i}>{key}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              isLoaded&&items.map((item,i)=>(
                <tr key={i}>
                  {Object.keys(item).map((key,j)=>(
                    <td key={j}>{item[key]}</td>
                  ))}
                </tr>
              ))
            }
          </tbody>
        </Table>
        {/* <p>{JSON.stringify(this.state.items[0])}</p> */}
      </Container>
    )
  }
}

export default MenuList