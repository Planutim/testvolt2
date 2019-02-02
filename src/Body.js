import React from 'react'
import { Container, Modal, Button, Row, Col } from 'react-bootstrap'
import ModalCreateEditDelete from './lesser/ModalCreateDelete'
import ListComponent from './lesser/List'
import ModalEdit from './lesser/ModalEdit'
import ModalDelete from './lesser/ModalDelete';

class Body extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      editDeleteId: null,
      option: null,
      showModal: false
    }
    // // this.updateEntry=this.updateEntry.bind(this)
    // this.deleteEntry=this.deleteEntry.bind(this)
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  setOptionAndShow(option, editDeleteId=null){
    
    this.setState({
      option,
      showModal: true,
      editDeleteId
    })
    return false;
  }
  showModal(){
    this.setState({
      showModal: true
    })
  }
  hideModal(){
    this.setState({
      showModal: false
    })
    return false;
  }
  render(){
    var {isLoaded, items, fields, pageName, updateTable} = this.props
    var list = isLoaded?
      <ListComponent 
        items={items} 
        fields={fields} 
        updateEntry={this.updateEntry}
        deleteEntry={this.deleteEntry}
        setOptionAndShow={this.setOptionAndShow.bind(this)}
      />
      :null
    // var editModal = this.state.showEditModal?
    return (
      <Container className={location.pathname}>
        <Row>
          <Col xs={6}>
            <h2>{`${this.props.pageName} list`}</h2>
          </Col>
          <Col xs={3}>
            <Button onClick={this.setOptionAndShow.bind(this, 'create')}>Create</Button>
          </Col>
          <br/>
        </Row>
        <ModalCreateEditDelete
          show={this.state.showModal} 
          handleClose={this.hideModal}
          onHide={this.hideModal} 
          pageName={pageName}
          fields={fields}
          updateTable={updateTable}
          option={this.state.option}
          pageName={this.props.pageName}
          editDeleteId={this.state.editDeleteId}
        />
        {list}
      </Container>
    )
  }
}

export default Body