import React from 'react';
import { StyleSheet, Text, View, Button, Slider, Image, ImageBackground } from 'react-native';
import {Camera, Permissions, LinearGradient} from 'expo';
import Profile from './Profile';
import Bell from "./svg/bell";
import Task from "./svg/task";
import AddButt from "./svg/addButt";

export default class Nav extends React.Component {
state={
    pages: null
}

ChangePage=(page)=>{
    this.setState({
        pages:page
        
    })
    
    
}
  render() {
      var curpage = <Profile />;
      
      switch (this.state.pages){
        case 1:
            curpage = <Profile />
            break;
            
    }
    return (
      <View style={styles.container}>
        <Image 
            source={require('../Content/Imgs/ProfilePic.jpg')}
            style={{width: 70, height: 70, borderRadius: 35, borderColor: '#49CBC6', borderWidth:5}}
            resizeMode="cover"
            />
            
            <Task />
            <Bell />
            
            {/* <Image style={styles.img }
                source={require('../Content/icons/PNG/task.png')}
                />
        
        <Image style={styles.img }
                source={require('../Content/icons/PNG/noti.png')}
                />
        
        <Image style={styles.img }
                source={require('../Content/icons/PNG/addButt.png')}
                />  
                
                */} 

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    margin:15,
      

  },
   
    img: {
    width: 200,
    height: 100,
    padding: 0,

  },
});

//Questions to ask henry:
//  1) how to change the width of the actual images not the container around it :/
//  2) How can i fix the profile image?
//  3) How can i navigate through the pages
// 4)How can i make the svg clickable
