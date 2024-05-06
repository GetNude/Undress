
const axios = require('axios');
const sign = require('../sign');
const config = require('../config');

const timestamp = Date.now();
const data = {
  "timestamp": timestamp,
  merchant_no: config.merchant_no
}
const signStr = sign(data)
data.sign = signStr
let httpConfig = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://getnude.app/api/mch/balance',
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

