import axios from 'axios';

const SERVER_IP = "http://10.102.66.37:3000";

export default Api = {
  
  sendMsg: (msg) =>{
    axios({
      method:'post',
      url:SERVER_IP + "/newMsg",
      data:{
        message:msg,
      }
    });
  },

  testServer: () => {
    axios({
      method:'get',
      url:'http://10.102.66.37:3000/test',
    }).then((res)=>{
      alert(res.data);
    });
  }
}