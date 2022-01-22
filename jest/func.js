const axios = require('axios');

function Bob() {
    this.bobs_age = 25; //Bobs current age
    this.get_age = () => {
     return this.bobs_age; //get Bobs current age
    }
    this.get_json = () =>{
        return {data:"example"};
    }

    this.get_bobs_friends = () =>{
        return axios.get("https://jsonplaceholder.typicode.com/users/10")
            .then(response => response.data)
            .catch(err => err)
    }
   }
module.exports = new Bob();