import axios from 'axios';
import {AsyncStorage} from 'react-native';

const SERVER_IP = "http://10.102.112.164:3000";

export default Api = {

  newUser(user, callback){
    
    // create the object with the array
    axios({
      method:'post',
      url:SERVER_IP + "/newUser",
      data:{user:user},
    }).then(async (res)=>{
      if(res.status = 200){
        callback();
      }
    });
  },

  testServer(){
    axios({
      method:'get',
      url:'http://10.102.66.37:3000/test',
    }).then((res)=>{
      alert(res.data);
    });
  }
}