const axios = require('axios');

const fetchData = () => {
  axios.get('https://api.github.com/')
    .then((response1) => {
      const data1 = response1.data;
      console.log('Data from Resource 1:', data1);

      return axios.get('https://api.github.com/');
    })
    .then((response2) => {
      const data2 = response2.data;
      console.log('Data from Resource 2:', data2);

      
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

fetchData();
