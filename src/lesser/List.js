import React from 'react'
import { ListGroup, Table, Nav, Button } from 'react-bootstrap'
import './List.css'

const  ListComponent = ({items,fields,setOptionAndShow,updateEntry, deleteEntry})=>(
  <Table>
    <thead>
      <tr>
        {
          // Object.keys(items[0]).map((key,i)=>(
          //   <th key={i}>{key}</th>
          // ))
          fields.map((field,i)=>(
            <th key={i}>{field}</th>
          ))
        }
      </tr>
    </thead>
    <tbody >
      {
        items.map((item,i)=>(
          <tr key={i} >
            {/* {Object.keys(item).map((key,j)=>(
              <td key={j}>{item[key]}</td>
            ))} */}
            {fields.map((field,j)=>(
              <td key={j}>
                {item[field]}
              </td>
            ))}
            {/* <td className='text-right'><Button  variant='outline-secondary' onClick={setOptionAndShow.bind(null, 'edit', item.id)}>Edit</Button></td> */}
            <td className='text-right'>
              <Button  className='mr-5' variant='outline-secondary' onClick={setOptionAndShow.bind(null, 'edit', item.id)}>Edit</Button>
              <Button  variant='outline-warning' onClick={setOptionAndShow.bind(null, 'delete', item.id)}>Delete</Button>
              </td>
          </tr>
        ))
      }
    </tbody>
    
  </Table>
  
)

export default ListComponent