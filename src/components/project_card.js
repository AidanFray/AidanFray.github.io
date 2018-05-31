import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Project_Card extends Component {
  render() {
    console.log('url: ' + this.props.url);
    console.log('title: ' + this.props.title);
    console.log('text_color: ' + this.props.text_color);
    console.log('card_text: ' + this.props.card_text)
    return (
      <Card shadow={2} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: this.props.text_color, height: '200px', background: 'url('+ this.props.url +') center / cover'}}>{this.props.title}</CardTitle>
        <CardText>
          {this.props.card_text}
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
        </CardActions>
        <CardMenu style={{color: this.props.text_color}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    )
  }
}

export default Project_Card;
