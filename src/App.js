import './App.css';


import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import NavBar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {


  state ={
    progress : 0
  }

  setP = (progress)=>{
    this.setState({progress:progress});
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          height={3}
          color={'red'}
          progress={this.state.progress}
          ></LoadingBar>
          <Routes>
            <Route exact path="/home" element={<News setP={this.setP} key="general" pageSize={5} country="in" category="general" />}/>
            <Route exact path="/business" element={<News setP={this.setP} key="business" pageSize={5} country="in" category="business" />}/>
            <Route exact path="/entertainment" element={<News setP={this.setP} key="entertainment" pageSize={5} country="in" category="entertainment" />}/>
            <Route exact path="/general" element={<News setP={this.setP} key="general" pageSize={5} country="in" category="general" />}/>
            <Route exact path="/health" element={<News setP={this.setP} key="health" pageSize={5} country="in" category="health" />}/>
            <Route exact path="/science" element={<News setP={this.setP} key="science" pageSize={5} country="in" category="science" />}/>
            <Route exact path="/sports" element={<News setP={this.setP} key="sports" pageSize={5} country="in" category="sports" />}/>
            <Route exact path="/technology" element={<News setP={this.setP} key="technology" pageSize={5} country="in" category="technology" />}/>
          </Routes>
        </Router>
      </div>
    )
  }
}