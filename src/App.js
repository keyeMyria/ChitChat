import {Navigation} from 'react-native-navigation';
import {registerScreens} from'./screens';
import stores from './stores';
import MobxRnnProvider from './util/mobxProvider';

registerScreens(stores, MobxRnnProvider);

Navigation.startSingleScreenApp({
  screen:{
    screen:'Home',
    title:'ChitChat',
  }
})
