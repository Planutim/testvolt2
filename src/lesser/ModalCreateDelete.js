import React from 'react'
import { Modal, Button, FormControl, InputGroup, FormGroup, Form} from 'react-bootstrap'
// import Form from 'react-bootstrap/FormControl';
import axios from 'axios'

class ModalCreate extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      editData: {},
      isEditDataLoaded: false,
    }
    this.loadEditData=this.loadEditData.bind(this)
    this.handleEditChange=this.handleEditChange.bind(this)
  }

  componentDidUpdate(){
    // if(!this.state.isEditDataLoaded&&this.props.option=='edit'){
    //   console.log('hha')
    //   this.loadEditData()
    // }
    console.log(this.state.isEditDataLoaded)
    if(this.props.option=='edit'&&!this.state.isEditDataLoaded&&this.props.show){
      this.loadEditData()
    }
  }

  handleEditChange(e){
    var field = e.target.getAttribute('name')
    var value = e.target.value
    this.setState({
      editData:{
        ...this.state.editData, 
        [field]: value
      }
    })
  }
  handleClose(){
    if(this.props.option==='edit'){
      this.setState({
        isEditDataLoaded: false,
        editData: {}
      })
    }
    this.props.handleClose()
  }
  createEntry(e){
    e.preventDefault()
    
    const formData = {}
    this.props.fields.filter(field=>field!=='id').map(field=>(
      formData[field]=e.target.elements[field].value
    ))

    axios
      .post(`/api/${this.props.pageName}`,formData)
      .then(()=>this.props.updateTable(this.props.pageName))
      .catch(e=>alert(e.message))
    
    this.props.handleClose()
    return false;
  }

  editEntry(e){
    e.preventDefault()
    // const formData = {}
    // this.props.fields.filter(field=>field!=='id').map(field=>(
    //   formData[field]=e.target.elements[field].value
    // ))

    axios
      .put(`/api/${this.props.pageName}/${this.props.editDeleteId}`,this.state.editData)
      .then(()=>this.props.updateTable(this.props.pageName))
      .catch(e=>alert(e.message))


    this.handleClose.bind(this)()
    return false
  }

  deleteEntry(e){
    e.preventDefault()

    axios
      .delete(`/api/${this.props.pageName}/${this.props.editDeleteId}`)
      .then(()=>this.props.updateTable(this.props.pageName))
      .catch(e=>alert(e.message))

    this.props.handleClose()
    return false
  }
  loadEditData(){

    axios
    .get(`/api/${this.props.pageName}/${this.props.editDeleteId}`)
    .then((result)=>this.setState({editData:result.data, isEditDataLoaded: true}))
    .catch(e=>alert(e.message))
    
  }
  render(){
      var {show, handleClose, onHide, fields, option, editDeleteId} = this.props
      var fieldsWithoutID=fields.filter(field=>field!=='id')


      var form = option==='create'
        ?<CreateForm 
            fields={fieldsWithoutID} 
            createEntry={this.createEntry.bind(this)}
        />
        :option==='edit'
          ?<EditForm 
              fields={fieldsWithoutID} 
              editEntry={this.editEntry.bind(this)} 
              isEditDataLoaded={this.state.isEditDataLoaded}
              handleEditChange={this.handleEditChange} 
              editData={this.state.editData}
          />
          :<DeleteForm 
              deleteEntry={this.deleteEntry.bind(this)}
          />
          // :this.state.isEditDataLoaded
            
            // :null
    return(
        <Modal 
          show={show}
          onHide={this.handleClose.bind(this)}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{option}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {form}
          </Modal.Body>
          <Modal.Footer>
            <Button type='submit' variant='primary' form='myForm' >{option}</Button>
            <Button variant='secondary' onClick={this.handleClose.bind(this)}>Close</Button>
          </Modal.Footer>
          
        </Modal>
    )
  }
}

const CreateForm = ({createEntry, fields,})=>(
  <Form 
    id='myForm' 
    onSubmit={createEntry}
  >
    {fields.map((field,i)=>(
      <Form.Group key={i}>
        <Form.Label>{field}</Form.Label>
        <Form.Control 
          maxLength={30} 
          name={field}
          type='text' 
          placeholder={`Enter a ${field}`} 
          required
        />
      </Form.Group>
    ))}
  </Form>
)

  



const EditForm = ({editEntry, fields,editData,handleEditChange,isEditDataLoaded})=>(
  <Form 
    id='myForm' 
    onSubmit={editEntry}
  >
    {fields.map((field,i)=>(
      <Form.Group key={i}>
        <Form.Label>{field}</Form.Label>
        <Form.Control 
          maxLength={30} 
          name={field}
          type='text' 
          placeholder={`Enter a ${field}`} 
          required
          value={isEditDataLoaded?editData[field]:""}
          onChange={handleEditChange}
        />
      </Form.Group>
    ))}
  </Form>
)

const DeleteForm = ({deleteEntry})=>(
  <Form
    id='myForm'
    onSubmit={deleteEntry}
  >
    <div>Delete this entry?</div>
  </Form>
)
export default ModalCreate