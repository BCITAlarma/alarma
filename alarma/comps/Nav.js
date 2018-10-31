import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {connect} from 'react-redux';
import {ChangePage} from '../redux/actions';

import Landing from './Pages/Landing';
import Login from './Pages/Login';
import FBlogin from './Pages/FBlogin';
import Createacc from './Pages/Createacc';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import { Svg } from 'expo';


class Nav extends React.Component {
  render(){
    var comp = null;
    
    if(this.props.compPage === 0){
      comp = <Landing />
    } 
    
    if (this.props.compPage === 1){
      comp = <Login />
    }
    
    if (this.props.compPage === 2){
      comp = <FBlogin />
    }
    
    if (this.props.compPage === 3){
      comp = <Createacc />
    }
    
    if (this.props.compPage === 4){
      comp = <Home />
    }
      
    if (this.props.compPage === 5){
      comp = <Profile />
    }
    
    return(
      <View>
        {comp}
      </View>
    )
  }
}

function mapStateToProps(state){
  return{
    compPage:state.Page.page
  }

}

//export after connecting to redux
export default connect(mapStateToProps)(Nav);