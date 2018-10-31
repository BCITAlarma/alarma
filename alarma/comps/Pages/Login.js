import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Link, Image, TouchableOpacity, } from 'react-native';

import {connect} from 'react-redux';
import {ChangePage} from '../../redux/actions';

class Login extends React.Component {
  
    handleProfile=()=>{
    this.props.dispatch(ChangePage(4));
    
  }
  
  handleLanding=()=>{
    this.props.dispatch(ChangePage(0));
    
  }

  render() {
    return (
      <View>
        <Text>Login page here.</Text>
          
          <Button style={styles.container} 
            onPress={this.handleProfile}
            title="Home"
          /> 
      
          <Button style={styles.container} 
            onPress={this.handleLanding}
            title="Landing"
          /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


function mapStateToProps(state){
  return{
    compPage:state.Page.page
  }

}

//export after connecting to redux
export default connect(mapStateToProps)(Login);