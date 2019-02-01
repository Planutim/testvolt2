import React from 'react'
import { ListGroup, Table } from 'react-bootstrap'


const List = ({items})=>(
  <Table>
    <thead>
      {
        Object.keys(items[0]).map((key,i)=>(
          <th key={i}>{key}</th>
        ))
      }
    </thead>
    <tbody>
      {
        items.map((item,i)=>(
          <tr key={i}>
            {Object.keys(item).map((key,j)=>(
              <td key={j}>{item[key]}</td>
            ))}
          </tr>
        ))
      }
    </tbody>
  </Table>
)

export default List