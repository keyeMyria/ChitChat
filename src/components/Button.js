import React, {Component} from 'react';
import {TouchableHighlight, Text, View, StyleSheet} from 'react-native';

export default class Button extends Component{
  render(){
    const onPress = this.props.onPress;
    return(
      <TouchableHighlight onPress={onPress} style={styles.btn}>
        <Text style={styles.btnText}>Test</Text>
      </TouchableHighlight>
    )
  }
};

const styles = StyleSheet.create({
  btn:{
    borderRadius:30,
    backgroundColor: "blue",
    marginTop:60,
  },
  btnText:{
   color:'white',
  },
});