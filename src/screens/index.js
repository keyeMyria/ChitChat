import {Navigation} from 'react-native-navigation';
import Home from './home';

export function registerScreens(store={}, Provider={}){
  Navigation.registerComponent('Home', () => Home, store, Provider );

}