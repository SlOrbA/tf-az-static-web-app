import axios from 'axios';
import React from 'react';

class HelloFromTheOtherSide extends React.Component {

    hello: string = 'Yello';

    async componentDidMount() {
      let options = {
        url: 'https://icy-river-0d35d7e03.azurestaticapps.net/api/HelloFromTheOtherside?name=Me',
        method: 'GET'
      };
        
      axios(options)
      .then(response => {
        console.log(JSON.stringify(response.data));
        this.hello = JSON.stringify(response.data);
      })
      .catch( error => {
        console.log(error);
      });
    }

    render() {
      console.log('Starting rendering');
      return(
        <div>
          <p>{this.hello}</p>
        </div>
      );
    }
}
export default HelloFromTheOtherSide;