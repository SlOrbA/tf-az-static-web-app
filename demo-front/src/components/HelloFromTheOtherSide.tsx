import axios from 'axios';
import React from 'react';

class HelloFromTheOtherSide extends React.Component {

    hello: string = 'Yello';

    render() {
      let options = {
        url: 'https://icy-river-0d35d7e03.azurestaticapps.net/HelloFromTheOtherside?name=Me',
        method: 'GET'
      };
        
      axios(options)
      .then(response => {
        this.hello = JSON.stringify(response.data);
      })
      .catch( error => {
        console.log(error);
      });
    
      return(
        <div>
          <p>{this.hello}</p>
        </div>
      );
    }
}
export default HelloFromTheOtherSide;