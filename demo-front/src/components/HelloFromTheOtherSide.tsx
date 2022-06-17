import axios from 'axios'
import React from 'react';

interface IProps {
}

interface IState {
  hello?: string;
}

class HelloFromTheOtherSide extends React.Component<IProps, IState> {

  apiPath: string;

  constructor(props: IProps){
    super(props);

    this.state = { hello: 'Yello'};
    this.apiPath = '/api/HelloFromTheOtherside?name=Me';
  }

  async componentDidMount() {
    const resp = await axios.get(this.apiPath);
     this.setState({ hello: resp.data});
  }
  
  render() {
    console.log('Starting rendering');
    return (
      <div>
        <p>{this.state.hello}</p>
      </div>
    );
  }
}
export default HelloFromTheOtherSide;

