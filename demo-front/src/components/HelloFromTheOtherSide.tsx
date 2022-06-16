import axios, { AxiosResponse } from 'axios'
import React from 'react';

class HelloFromTheOtherSide extends React.Component {

  hello: string;
  apiPath: string;

  constructor(props: {} | Readonly<{}>){
    super(props);

    this.hello = 'Yello';
    this.apiPath = '/api/HelloFromTheOtherside?name=Me';
  }

  componentWillMount() {
    axios.get(this.apiPath).then((response: AxiosResponse) => {
      this.hello = response.data;
    });
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

