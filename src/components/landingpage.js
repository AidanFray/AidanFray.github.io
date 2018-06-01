import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProjectCard from './projectcard';

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
                </div>
            </div>
          </Cell>
          <Cell col={12}>
            <div className="projects-grid">
              <ProjectCard
                title = "Scale Generator"
                text_color = '#000'
                url="https://raw.githubusercontent.com/AidanFray/gh-pages-portfolio/master/src/project_images/scale_logo.jpg"
                card_text="An application that is designed to randomly provide scales for practising musicians. This app is produced using Xamarin to proivde a cross platform application for iOS and Android."/>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
