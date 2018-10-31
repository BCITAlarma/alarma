import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Link, Image, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo';
import Nav from './Nav';




import {connect} from 'react-redux';
import {ChangePage} from '../../redux/actions';

class Profile extends React.Component {
  
  
    handleLanding=()=>{
    this.props.dispatch(ChangePage(0));
    
  }

  render() {
    return (
          <View  style={styles.container}> 
         <LinearGradient   colors={['#49CBC6', '#4B7CB0']}
          style={{width:400, height:'100%', alignItems: 'center'}}>
    
        <Text>Profile page here.</Text>
   
      
            
            <Image 
            source={require('../Content/Imgs/ProfilePic.jpg')}
            style={{width: 150, height: 150, borderRadius: 75, borderColor: '#49CBC6', borderWidth:5}}
            resizeMode="cover"
            />
          
         
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#fff',
            }}>
            Profile Page
          </Text>
             
          <Button style={styles.container} 
            onPress={this.handleLanding}
            title="Landing"
          /> 
             
                     <Nav />

             </LinearGradient>
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
      width: '100%'
  },
});


function mapStateToProps(state){
  return{
    compPage:state.Page.page
  }

}

//export after connecting to redux
export default connect(mapStateToProps)(Profile);