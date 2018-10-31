import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Link, Image, TouchableOpacity, } from 'react-native';
import {Camera, Permissions, LinearGradient} from 'expo';


  
import {connect} from 'react-redux';
import {ChangePage} from '../../redux/actions';


class Landing extends React.Component {
  
  handleLogin=()=>{
    this.props.dispatch(ChangePage(1));
    
  }
  
  handleFBlogin=()=>{
    this.props.dispatch(ChangePage(2));
  }
  
  handleCreateacc=()=>{
    this.props.dispatch(ChangePage(3));
  }  
  
  render() {
    return (
      <LinearGradient
          colors={['#49CBC6', '#4B7CB0']}
          style={{width: '100%', height:'100%', alignItems: 'center'}}>
      <View style={styles.container}> 
      
        <Image style={styles.logoImg} source={require('../Content/icons/PNG/AlarmaLogo.png')} />
        
        <Text style={styles.titleAlarma} >ALARMA</Text>
       
        <View style={styles.buttonContainer}>   

        
           <TouchableOpacity style={styles.containerBut} onPress={this.handleLogin}>
             <Text style={styles.textBut} >Log In</Text>
           </TouchableOpacity> 

          <TouchableOpacity style={styles.containerBut} onPress={this.handleFBlogin}>
             <Text style={styles.textBut} >Connect with Facebook</Text>
          </TouchableOpacity> 


          <TouchableOpacity style={styles.containerBut} onPress={this.handleCreateacc}>
             <Text style={styles.textBut} >Create Account</Text>
          </TouchableOpacity>

        </View>
      </View>
</LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',

  },
  
  logoImg: {
    marginTop:50, 
    width:165,
    height: 170
  },
  
  titleAlarma: {
    color: 'white',
    marginTop: 20,
    fontSize: 50,
    //fontFamily: 'Raleway',
  },
  
  buttonContainer: {
    padding:50,
    width: 400,
    height: 250,
    justifyContent: 'space-between',
    
  },
  
  containerBut: {
    alignItems: 'center',
    padding: 5,
    borderRadius: 7,
    backgroundColor: 'white',
    width:300,
    height:40,
  },
  
  textBut: {
    fontSize: 20,
    color: 'black',
    //fontFamily: 'Raleway',
  },
  
});



function mapStateToProps(state){
  return{
    compPage:state.Page.page
  }

}

//export after connecting to redux
export default connect(mapStateToProps)(Landing);