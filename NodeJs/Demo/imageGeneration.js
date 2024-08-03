const axios = require('axios');
const sign = require('../sign');
const config = require('../config');

let data = {
  "file_base64": "Your base64 string", // The field needs to contain: data:image/jpeg;base64
  "timestamp": Date.now(),
  "merchant_no": config.merchant_no,
  "mode": "nude",
  "notify_url": "xxx"
};

data.sign = sign(data)  

let httpConfig = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://getnude.app/api/mch/img-2-img',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(httpConfig)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
