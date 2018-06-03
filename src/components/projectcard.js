import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu} from 'react-mdl';


class ProjectCard extends Component {
  render() {
    return (
      <div className="project-item">
        <Card shadow={6} style={{minWidth: '250px', margin: 'auto'}}>
          <CardTitle style={{alignItems: 'flex-start', color: this.props.text_color, height: '200px', width: '330px', background: 'url('+ this.props.url +') center / cover'}}>
          <div className="card-title">
            {this.props.title}
          </div>
        </CardTitle>
        <CardText>
          <div className="card-text">
            {this.props.card_text}
          </div>
        </CardText>
        <CardActions border>
          <Button colored href={this.props.github_url}>GitHub</Button>
        </CardActions>
        <CardMenu style={{color: this.props.text_color}}>
        </CardMenu>
      </Card>
    </div>
  )
}
}

export default ProjectCard;
