import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu} from 'react-mdl';

class ProjectCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      baseUrl: "https://raw.githubusercontent.com/AidanFray/gh-pages-portfolio/master/src/project_images/" + this.props.url,
      langauges_logos: []
    };

    this.languages_proc(this.props.languages)
  }

  // http://konpa.github.io/devicon/
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
    ["Windows", "devicon-windows8-original"],
    ["Go", "devicon-go-plain"],
    ["PHP", "devicon-php-plain"]
  ]

  // Creates a list of programming langauges dynamically that
  // can be used to show what project tech was used
  languages_proc(text) {

    var logos = []

    var sentence = text;

    if (text !== undefined) {
      var parts = sentence.split(",");

      for (var i = 0; i < parts.length; i++) {
        var lang = parts[i];

        for (var x = 0; x < this.languages.length; x++) {
          if (this.languages[x][0].trim() === lang) {
            logos.push(<i style={{fontSize: "25px", padding: "2px"}} class={this.languages[x][1]}></i>);
          }
        }
      }
    }

    //TODO: find a way not the change the state directly
    // this.setState({langauges_logos: logos});
    this.state.langauges_logos = logos;
  }

  render() {

    return (

      <div className="project-item">

        <Card shadow={2} style={{minWidth: '250px', height: '400px', margin: 'auto', visibility: this.props.visible}}>
       
          <CardTitle  style={{alignItems: 'flex-start', 
                            color: this.props.text_color, 
                            height: '200px', 
                            width: '330px', 
                            background: 'url(' + this.state.baseUrl + ') center / cover'
                          }}>
            <div className="card-title">
              {this.props.title}
            </div>
          </CardTitle>

          <CardText style={{
              height: '100px', 
              overflow: 'auto',
              }}>
            <div className="card-text">
              {this.props.card_text}
            </div>
          </CardText>

          <CardActions border>
            {this.state.langauges_logos}
          </CardActions>

          <CardActions border style={{alignItems: 'flex-end'}}>
            <Button colored href={this.props.github_url}>GitHub</Button>
            {this.props.extra_links}
          </CardActions>

          <CardMenu style={{color: this.props.text_color}}>
          </CardMenu>
      </Card>
    </div>
  )
}
}

export default ProjectCard;
