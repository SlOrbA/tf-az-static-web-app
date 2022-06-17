import axios from 'axios'
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface IProps {
}

interface IState {
  cards?: CmsCard[];
}

class CmsCard {
    "name": string
    "category" : string
    "content" : string
}

class SomeCards extends React.Component<IProps, IState> {

  apiPath: string;

  constructor(props: IProps){
    super(props);

    this.state = { cards: [] };
    this.apiPath = 'https://mockcmsr47f.z6.web.core.windows.net/cards';
  }

  async componentDidMount() {
    const resp = await axios.get(this.apiPath);
    console.log('Cards response: ' + JSON.stringify(resp.data));
     this.setState({ cards: resp.data.cards});
  }
  
  render() {
    console.log('Starting rendering');
    const {cards} = this.state;
    console.log('Cards rendering: ' + JSON.stringify(cards));
    return (
        <div className="col-md-6">
          <h4>Cards</h4>
            {cards &&
              cards.map((card: CmsCard, index: number) => (
                <p>
                  <Card>
                    <CardContent>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {card.category}, {card.name}
                      </Typography>
                      <Typography>
                        {card.content}
                      </Typography>
                    </CardContent> 
                  </Card>
                </p>
              ))}
      </div>
    );
  }
}
export default SomeCards;

