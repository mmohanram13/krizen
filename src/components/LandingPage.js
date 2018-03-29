import React, { Component } from 'react';

import Splash from './Splash';
import Router from './Router';

export default class LandingPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            component : <Splash />
        };
    }

  componentDidMount(){
        this.timeoutHandle = setTimeout(()=>{
            this.setState({ component: <Router /> })
        }, 2000);
   }

   componentWillUnmount(){
        clearTimeout(this.timeoutHandle);
   }

  render() {
    return (
        this.state.component
    );
  }
}
