import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class ProjectCard extends Component {
  render() {
    console.log('url: ' + this.props.url);
    console.log('title: ' + this.props.title);
    console.log('text_color: ' + this.props.text_color);
    console.log('card_text: ' + this.props.card_text)
    return (
      <Card shadow={2} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{alignItems: 'flex-start', color: this.props.text_color, height: '200px', background: 'url('+ this.props.url +') center / cover'}}>
          <div className="card-title" style={{marginTop: '0'}}>
              {this.props.title}
          </div>
        </CardTitle>
      <CardText>
        <div className="card-text">
          {this.props.card_text}
        </div>
      </CardText>
      <CardActions bordr>
        <Button colored>GitHub</Button>
      </CardActions>
      <CardMenu style={{color: this.props.text_color}}>
        <IconButton name="share" />
      </CardMenu>
    </Card>
  )
}
}

export default ProjectCard;
