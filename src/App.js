import React from 'react'
import ReactDOM from 'react-dom'
import {hot} from 'react-hot-loader/root'
import _ from 'lodash'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import AppHeader from './AppHeader'
import MenuList from './MenuList'
import { Button } from 'react-bootstrap';

class App extends React.Component{
  constructor(props){
    super(props)
    //state
    this.state = {
      pageName: 'customers',
      isLoaded: {
        customers: false,
        products: false,
        invoices: false,
      },
      items: {
        customers: [],
        products: [],
        invoices: []
      }
    }
  }

  changePage(pageName){ 
    this.setState({
      pageName
    })

    this.loadData.bind(this,pageName)()
  }

  loadData(pageName){
    if(!this.state.items[pageName].length){
      fetch(`/api/${pageName}`)
        .then(res=>res.json())
        .then(result=>{
          result = result.map(item=>_.omit(item,['createdAt','updatedAt']))
          console.log(Object.keys(result))
          this.setState({
            items:{
              ...this.state.items,
              [pageName]: result,
            },
            isLoaded: {
              ...this.state.isLoaded,
              [pageName]: true
            }
          })
        })
    }
  }


  render(){
    return (
      <Router>
        <div>
          <AppHeader
          changePage={this.changePage.bind(this)}
          />
          {/* <MenuList 
            state={this.state}
            changePage={this.changePage.bind(this)}
          /> */}
          {/* <Button onClick={this.changeAddress.bind(this,false)}>Change</Button>
          <Button onClick={this.changeAddress.bind(this,true)}>Back</Button> */}
          <Link to='/users'>Users</Link>
          <Route path="/users" component={Test} />
          <Route path="/test" component={Test} />
        </div>
      </Router>
    )
  }
}
const Test = ()=><div>Test</div>

export default hot(App)