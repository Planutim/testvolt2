import React from 'react'
import ReactDOM from 'react-dom'
import {hot} from 'react-hot-loader/root'

import AppHeader from './AppHeader'
import MenuList from './MenuList'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      pageName: ''
    }
  }
  changePage(pageName){
    history.pushState(pageName, null, pageName)
    this.setState({
      pageName
    })
  }
  render(){

    return (
      <div>
        <AppHeader changePage={this.changePage.bind(this)}/>
        <MenuList />
        <p>Test3</p>
      </div>
    )
  }
}

export default hot(App)