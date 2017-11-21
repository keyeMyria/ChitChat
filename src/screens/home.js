import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  AsyncStorage,
} from 'react-native';

import Api from '../util/api';
import {observable} from 'mobx';
import {inject} from 'mobx-react';

@inject('userStore')

export default class Home extends Component{

  async testStorage(){
    const value = await AsyncStorage.getItem('user');
    alert(value);
  }

  render() {
    let userStore = this.props.userStore;
    
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>
            Enter A User Name
          </Text>
        </View>        
        <View style={styles.textInputContainer}>
          <TextInput 
            autoFocus
            placeholder="Send a message..." style={styles.textInput}
            onChangeText={(text)=> userStore.setUserName(text)}/>
          <Button title="Confirm" onPress={() => Api.newUser(userStore.userName, ()=> alert('Good'))} />
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
    flex:1,
    flexDirection:'row',
  },
  header:{
    flex:1,
    fontSize:24,
    fontWeight: "bold",
    alignSelf:"center",
  },
  headerContainer:{
    flexDirection:'row',
    flex:1,
  }
});