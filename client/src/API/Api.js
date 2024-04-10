const axios =require('axios');

axios.get("https://www.boredapi.com/api/activity")
    .then(response =>{
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    