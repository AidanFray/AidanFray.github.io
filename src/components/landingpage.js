import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProjectCard from './projectcard';
import Calendar from './githubcalendar';

class Landing extends Component {
  render() {
    return(
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>{/*TODO: Add name here*/}</h1>
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

          {/*Project Card - 1*/}
          <ProjectCard
            title = "Scale Generator"
            text_color = '#000'
            url="https://raw.githubusercontent.com/AidanFray/gh-pages-portfolio/master/src/project_images/scale_logo.png"
            card_text="An application that is designed to randomly provide scales for practising musicians. This app is produced using Xamarin to proivde a cross platform application for iOS and Android."/>

            {/*Project Card - 2*/}
            <ProjectCard
              title = "3D Simulation"
              text_color = '#fff'
              url="https://raw.githubusercontent.com/AidanFray/gh-pages-portfolio/master/src/project_images/3d_sim.png"
              card_text="A university graphics and simulation project where the aim was to simulate various numbers of spheres falling through a column."/>

              {/*Project Card - 3*/}
              <ProjectCard
                title = "Interactive Map of Hull"
                text_color = '#c024fe'
                url="https://raw.githubusercontent.com/AidanFray/gh-pages-portfolio/master/src/project_images/interactive_map.png"
                card_text="A Javascript interactive map of Hull to celebrate the City of Culture."/>

                </div>
              </Cell>
            </Grid>
          </div>
        )
      }
    }

    export default Landing;
