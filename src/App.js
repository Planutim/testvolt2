import React from 'react'
import {hot} from 'react-hot-loader/root'
import _ from 'lodash'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Header from './Header'
import Body from './Body'


class App extends React.Component{
  constructor(props){
    super(props)
    //state
    this.state = {
      pageName: 'customers',
      invoices: {
        items: [],
        isLoaded: false,
        fields: []
      },
      products: {
        items: [],
        isLoaded: false,
        fields: ['id','name','price']
      },
      customers: {
        items: [],
        isLoaded: false,
        fields: ['id','name','address','phone']
      },
    }
  }

  changePage(pageName){ 
    this.setState({
      pageName
    })
    this.loadData.bind(this,pageName)()
    // console.log(pageName, '\n', JSON.stringify(this.state[pageName]))
  }

  loadData(pageName){
    if(!this.state[pageName].isLoaded){
      fetch(`/api/${pageName}`)
        .then(res=>res.json())
        .then(result=>{
          result = result.map(item=>_.omit(item,['createdAt','updatedAt']))
          this.setState({
            [pageName]:{
              ...this.state[pageName],
              items: result,
              isLoaded: true
            }
          })
        })
    }
  }
  updateTable(pageName){
    this.setState({
      [pageName]:{
        ...this.state[pageName],
        isLoaded: false
      }
    })
    this.loadData.bind(this,pageName)()
  }
 
  render(){
    var props = {}
    document.title = this.state.pageName
    return (
      <Router>
        <div>
          <Header changePage={this.changePage.bind(this)}/>
          <Route path="/invoices" render={()=><div>WIP</div>} />
          <Route path="/products" render={()=><Body     {...this.state.products} 
            pageName={this.state.pageName}
            updateTable={this.updateTable.bind(this)}
          />} />
          <Route path="/customers" render={()=><Body      {...this.state.customers} 
            pageName={this.state.pageName}
            updateTable={this.updateTable.bind(this)}
          />} />
        </div>
      </Router>
    )
  }
}
const Test = ()=><div>Test</div>

export default hot(App)