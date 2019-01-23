import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProjectCard from './projectcard';
import GithubCalendar from './githubcalendar';
import TypingElement from './typingelement'

///
/// First page that the web app will arrive to
///

// Link for hosting images for testing
/// https://postimages.org/

class Landing extends Component {

  render() {
    return(
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <h1 className="title">Aidan Fray</h1>
            <TypingElement/>
          </Cell>
          <Cell col={12}>
            <div id="limit" className="projects-grid">
              <GithubCalendar/>

              <ProjectCard
                title = "Dissertation Project"
                text_color = '#fff'
                url="diss_proj.png"
                card_text="Compromised and Degraded Network Simulation - The aim of the dissertation project was to create a custom simulated network that can demonstrate and visualise network degradation and common DoS attacks.
                It uses the NetFilter section of the Linux Kernel to filter and manipulate network packets."
                languages="Python,Linux"
                github_url="https://github.com/AidanFray/Dissertation-Project"/>

              <ProjectCard
                title = "Parcel"
                text_color = '#a9653d'
                url="parcel_img.png"
                card_text=" Python script used to simulate imperfect network conditions on a Linux OS.
                The script utilises the NFQUEUE to degradation dynamically to packets."
                languages="Python,Linux"
                github_url="https://github.com/AidanFray/Parcel"/>

              <ProjectCard
                title = "Square CTF 2018"
                text_color = '#000'
                url="square.png"
                card_text="Online Jeopardy style CTF Hosted over the period of three days. 
                Challenges included examples like:
                Reverse engineering, cryptography and side channel attacks amongst others"
                languages="Python,Go,JS,PHP"
                github_url="https://github.com/AidanFray/SquareCTF_2018"/>

              <ProjectCard
                title = "Scale Generator"
                text_color = '#000'
                url="https://raw.githubusercontent.com/AidanFray/gh-pages-portfolio/master/src/project_images/scale_logo.png"
                card_text="An application that is designed to randomly provide scales for practising musicians. This app is produced using Xamarin to proivde a cross platform application for iOS and Android."
                languages="C#,Android,iOS"
                github_url="https://github.com/AidanFray/ScaleGenerator-iOS_Andriod"/>

              <ProjectCard
                title = "3D Graphics"
                text_color = '#fff'
                url="3d_sim.png"
                card_text="A university graphics and simulation project where the aim was to simulate various numbers of spheres falling through a column."
                languages="C#"
                github_url="https://github.com/AidanFray/Simulation-and-3D-Graphics"/>

              <ProjectCard
                title = "Interactive Map of Hull"
                text_color = '#c024fe'
                url="interactive_map.png"
                card_text="A Javascript interactive map of Hull to celebrate the City of Culture."
                languages="JS,HTML5"
                github_url="https://github.com/AidanFray/Interactive_Map"/>

              <ProjectCard
                title = "University Timetable Scraper"
                text_color = '#fff'
                url="hull_logo.png"
                card_text="Program that web scrapes the https://timetable.hull.ac.uk/ website to sync your timetable with outlook"
                languages="C#"
                github_url="https://github.com/AidanFray/Hull_Timetable_To_Outlook"/>

              <ProjectCard
                  title = "Sliding Tiles"
                  text_color = '#fff'
                  url="mobile_logo.png"
                  card_text="Sliding puzzle coursework submitted for a university mobile devices module. The goal was to create a small sliding puzzle game with dynamically download puzzles."
                  languages="Java,Android"
                  github_url="https://github.com/AidanFray/Mobile_Devices_And_Applications"/>

              <ProjectCard visible = "hidden"/>
              
            </div>
          </Cell>
        </Grid>
      </div>
      )
    }
  }

        export default Landing;
