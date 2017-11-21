import { observable, action, computed } from 'mobx';
import {AsyncStorage} from 'react-native';

export default class UserStore{
  @observable alias = '';

  @action setUserName(name){
    this.alias = name;
  }

  @computed get userName(){
    return this.alias;
  }
}