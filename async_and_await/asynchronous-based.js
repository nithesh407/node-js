const axios = require('axios');

const fetchData = async () => {
  try {
    const response1 = await axios.get('https://api.github.com/');
    const data1 = response1.data;

    const response2 = await axios.get('https://api.github.com/');
    const data2 = response2.data;

    console.log('Data from Resource 1:', data1);
    console.log('Data from Resource 2:', data2);

  } catch (error) {
    console.error('An error occurred:', error);
  }
}

fetchData();
