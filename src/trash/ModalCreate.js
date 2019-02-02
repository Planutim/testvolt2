import React from 'react'
import { Modal, Button, FormControl, InputGroup, FormGroup, Form} from 'react-bootstrap'
// import Form from 'react-bootstrap/FormControl';
import axios from 'axios'

class ModalCreate extends React.Component{
  constructor(props){
    super(props)

    this.validate = this.validate.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }
  validate(formData){
    if(this.props.pageName=='customers'){
      
    }
    for(field in formData){

    }
  }
  register(e){
    // axios.post(`/api/${this.props.pageName}`,{
      
    // })
    e.preventDefault()
    
    const formData = {}
    for(let field in this.refs){
      formData[field] = this.refs[field].value
    }

    axios.post(`/api/${this.props.pageName}`,formData)
      .then(()=>this.props.updateTable(this.props.pageName))
      .catch(e=>alert(e.message))
    
    this.props.handleClose()
    return false;
  }
  render(){
    return(
        <Modal 
          show={this.props.show}
          onHide={this.props.onHide}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form id='registerForm' method='POST' onSubmit={this.register.bind(this)}>
              {this.props.fields.filter(field=>field!=='id').map((field,i)=>(
                <Form.Group key={i} controlId={`${field} ${i}`}>
                  <Form.Label>{field}</Form.Label>
                  <Form.Control maxLength={30} ref={field}
                    type='text' 
                    placeholder={`Enter a ${field}`} 
                    required
                  />
                </Form.Group>
              ))}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button type='submit' variant='primary' form='registerForm' >Register</Button>
            <Button variant='secondary' onClick={this.props.handleClose}>Close</Button>
          </Modal.Footer>
          
        </Modal>
    )
  }
}

export default ModalCreate