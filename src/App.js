import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';

import Api from './util/api';
import {observable} from 'mobx';

export default class App extends Component{
@observable msg = '';
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <TextInput 
            placeholder="Send a message..." style={styles.textInput}
            onChangeText={(text)=>this.msg = text}/>
          <Button title="Send" onPress={() => Api.sendMsg(this.msg)} />
        </View>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:20,
    paddingBottom:20,
    justifyContent:"flex-end",
    alignItems:"center"
  },
  textInput:{
    borderColor:'gray',
    borderWidth:1,
    borderRadius:30,
    height:40,
    paddingLeft:15,
    flex:1,
    
  },
  textInputContainer:{
    flexDirection:'row',
    alignSelf:"flex-start",
    alignItems:"center",
  },
});