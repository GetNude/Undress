const axios = require('axios');
const sign = require('../sign');
const config = require('../config');
let data = {
  "timestamp": Date.now(),
  "merchant_no": config.merchant_no,
  "file_id": "1"
};

data.sign = sign(data)
console.log(data)
let httpCconfig = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://getnude.app/api/mch/position',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(httpCconfig)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
