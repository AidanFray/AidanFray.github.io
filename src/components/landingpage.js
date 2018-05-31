import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Projects from './projects';
import Project_Card from './project_card';

class Landing extends Component {
  render() {
    return(
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>Aidan Fray</h1>
              <p> C# | Python </p>
                <div className="social-links">
                  {/* LinkedIn */}
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>

                  {/* Github */}
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>

                  {/* Freecodecamp */}
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                  </a>

                  {/* Youtube */}
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-youtube-square" aria-hidden="true" />
                  </a>
                </div>
            </div>
          </Cell>
          <Cell col={12}>
            <div className="projects-grid">
              <Project_Card
                title = "Sunset"
                text_color = '#fff'
                url="https://static.rootsrated.com/image/upload/s--dOztdKo4--/t_rr_large_traditional/xeeqiz2egntxuc7u5mce.jpg"
                card_text="What a nice sunset"/>

              <Project_Card
                title = "Forest"
                text_color = '#fff'
                url="https://www.thewallpapers.org/photo/12142/Forrest-003.jpg"
                card_text="What a nice forest"/>

              <Project_Card
                title = "Mountain"
                text_color = '#fff'
                url="https://www.atlasandboots.com/wp-content/uploads/2015/09/Non-technical-mountains-whitney.jpg"
                card_text="What a nice mountain"/>

            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
