import axios from 'axios'
import React from 'react';

class HelloFromTheOtherSide extends React.Component {

  hello: string;
  apiPath: string;

  constructor(props: {} | Readonly<{}>){
    super(props);

    this.hello = 'Yello';
    this.apiPath = '/api/HelloFromTheOtherside?name=Me';
  }

  async componentDidMount() {
    const resp = await axios.get(this.apiPath);
    this.hello = resp.data;
  }
  
  render() {
    console.log('Starting rendering');
    return this.hello !== 'Yello' ?
      <div>
        <p>{this.hello}</p>
      </div>
      : null;
  }
}
export default HelloFromTheOtherSide;

