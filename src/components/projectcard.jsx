import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu} from 'react-mdl';


class ProjectCard extends Component {

  languages =
  [
    ["C++", "devicon-cplusplus-plain"],
    ["Java", "devicon-java-plain"],
    ["Python", "devicon-python-plain"],
    ["C#", "devicon-csharp-plain"],
    ["JS", "devicon-javascript-plain"],
    ["HTML5", "devicon-html5-plain"],
    ["Android", "devicon-android-plain"],
    ["Linux", "devicon-linux-plain"],
    ["iOS", "devicon-apple-original"],
    ["Windows", "devicon-windows8-original"]
  ]

  langauges_logos = []

  languages_proc(text) {
    var sentence = text;

    if (text !== undefined) {
      var parts = sentence.split(",");

      for (var i = 0; i < parts.length; i++) {
        var lang = parts[i];

        for (var x = 0; x < this.languages.length; x++) {
          if (this.languages[x][0].trim() === lang) {
            this.langauges_logos.push(<i style={{fontSize: "25px", padding: "2px"}} class={this.languages[x][1]}></i>);
          }
        }
      }

      console.log(parts)
    }
  }

  render() {
    return (
      <div className="project-item">
        <Card shadow={0} style={{minWidth: '250px', margin: 'auto'}}>

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
              {this.langauges_logos}
          </CardActions>

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
