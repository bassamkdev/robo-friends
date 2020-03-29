import axios from 'axios';
export const apiCall = (link) => 
  axios({
    url: link,
    method: 'get'
  })