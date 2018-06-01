import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProjectCard from './projectcard';
import Calendar from './githubcalendar';
import Typing from 'react-typing-animation';

class Landing extends Component {

  render() {
    return(
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <Typing>
                <h1>Aidan Fray</h1>
                <Typing.Delay ms={3000} />
                <Typing.Backspace count={20} />
                <h1> C# </h1>
                <Typing.Delay ms={3000} />
                <Typing.Backspace count={20} />
              </Typing>
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
            url="https://raw.githubusercontent.com/AidanFray/gh-pages-portfolio/master/src/project_images/scale_logo.png"
            card_text="An application that is designed to randomly provide scales for practising musicians. This app is produced using Xamarin to proivde a cross platform application for iOS and Android."
            github_url="https://github.com/AidanFray/ScaleGenerator-iOS_Andriod"/>

            <ProjectCard
              title = "3D Graphics"
              text_color = '#fff'
              url="https://raw.githubusercontent.com/AidanFray/gh-pages-portfolio/master/src/project_images/3d_sim.png"
              card_text="A university graphics and simulation project where the aim was to simulate various numbers of spheres falling through a column."
              github_url="https://github.com/AidanFray/Simulation-and-3D-Graphics"/>

              <ProjectCard
                title = "Interactive Map of Hull"
                text_color = '#c024fe'
                url="https://raw.githubusercontent.com/AidanFray/gh-pages-portfolio/master/src/project_images/interactive_map.png"
                card_text="A Javascript interactive map of Hull to celebrate the City of Culture."
                github_url="https://github.com/AidanFray/Interactive_Map"/>

                <ProjectCard
                  title = "Sliding Tiles"
                  text_color = '#000'
                  url="https://s15.postimg.cc/5mg30g0a3/mobile_logo.png"
                  card_text="Sliding puzzle coursework submitted for a university mobile devices module. The goal was to create a small sliding puzzle game with dynamically download puzzles."
                  github_url=""/>

                </div>
              </Cell>
            </Grid>
          </div>
        )
      }
    }

    export default Landing;
