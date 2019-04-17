import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";
import ProjectCard from "./projectcard";
import GithubCalendar from "./githubcalendar";
//import TypingElement from "./typingelement";

///
/// First page that the web app will arrive to
///

// Link for hosting images for testing
/// https://postimages.org/

class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      width: 0, 
      height: 0,
      project_cards: [],
      project_padding_cards: []
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.createProjectCards()
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ 
      width: window.innerWidth, 
      height: window.innerHeight 
    });
  }

  createProjectCards() {
    var cards = [];

    cards.push(
      <ProjectCard
        title="Dissertation Project"
        text_color="#fff"
        url="diss_proj.png"
        card_text="Compromised and Degraded Network Simulation - The aim of the dissertation project was to create a custom simulated network that can demonstrate and visualise network degradation and common DoS attacks.
        It uses the NetFilter section of the Linux Kernel to filter and manipulate network packets."
        languages="Python,Linux"
        github_url="https://github.com/AidanFray/Dissertation-Project"
      />
    )

    cards.push(
      <ProjectCard
        title="Parcel"
        text_color="#a9653d"
        url="parcel_image.png"
        card_text=" Python script used to simulate imperfect network conditions on a Linux OS.
        The script utilises the NFQUEUE to apply degradation dynamically to packets."
        languages="Python,Linux"
        github_url="https://github.com/AidanFray/Parcel"
      />
    )

    cards.push(
      <ProjectCard
        title="CTF Writeups"
        text_color="#fff"
        url="ctf_time.png"
        card_text="Personal write-ups of CTF competitions that I've competed in. The repo also includes files required to complete the challenges."
        languages="Python,Go,JS,PHP"
        github_url="https://github.com/AidanFray/CTF_Writeups"
        extra_links={
          <Button colored href="https://ctftime.org/team/68942">
            Team
          </Button>
        }
      />
    )

    cards.push(
      <ProjectCard
        title="Scale Generator"
        text_color="#000"
        url="https://raw.githubusercontent.com/AidanFray/gh-pages-portfolio/master/src/project_images/scale_logo.png"
        card_text="An application that is designed to randomly provide scales for practising musicians. This app is produced using Xamarin to proivde a cross platform application for iOS and Android."
        languages="C#,Android,iOS"
        github_url="https://github.com/AidanFray/ScaleGenerator-iOS_Andriod"
      />
    )

    cards.push(
      <ProjectCard
        title="3D Graphics"
        text_color="#fff"
        url="3d_sim.png"
        card_text="A university graphics and simulation project where the aim was to simulate 
        various numbers of spheres falling through a column."
        languages="C#"
        github_url="https://github.com/AidanFray/Simulation-and-3D-Graphics"
        extra_links={
          <Button
            colored
            href="https://www.youtube.com/watch?v=yxUFEYLiOiI"
          >
            YouTube
          </Button>
        }
      />
    )
    cards.push(
      <ProjectCard
        title="Interactive Map of Hull"
        text_color="#c024fe"
        url="interactive_map.png"
        card_text="A Javascript interactive map of Hull to celebrate the City of Culture."
        languages="JS,HTML5"
        github_url="https://github.com/AidanFray/Interactive_Map"
        extra_links={
          <Button
            colored
            href="https://aidanfray.github.io/Interactive_Map/"
          >
            Website
          </Button>
        }
      />

    )
    cards.push(
      <ProjectCard
        title="University Timetable Scraper"
        text_color="#fff"
        url="hull_logo.png"
        card_text="Program that web scrapes the https://timetable.hull.ac.uk/ website to sync your timetable with outlook"
        languages="C#"
        github_url="https://github.com/AidanFray/Hull_Timetable_To_Outlook"
      />

    )
    cards.push(
      <ProjectCard
        title="Sliding Tiles"
        text_color="#fff"
        url="mobile_logo.png"
        card_text="Sliding puzzle coursework submitted for a university mobile devices module. The goal was to create a small 
          sliding puzzle game with dynamically downloaded puzzles."
        languages="Java,Android"
        github_url="https://github.com/AidanFray/Mobile_Devices_And_Applications"
      />
    )

    //TODO: find a way not the change the state directly
    // this.setState({project_cards: cards});
    this.state.project_cards = cards;
  }

  // Method dynamically adds an invisible card to alter the spacing
  // this makes sure all cards are on grid lines
  addDynamicCardPadding() {

    //Resets padding cards
    this.state.project_padding_cards = []
    
    var blankCard = <ProjectCard visible="hidden" />

    var cardWidth = 378;
    var maxWidth = 1500;

    var width = this.state.width;
    if (width > maxWidth) {
      width = maxWidth;
    }

    //Makes sure this method doesn't run on the first render
    if (width === 0) return;

    var cardColumns = Math.floor(width / cardWidth);
    var activeCards = this.state.project_cards.length;

    var paddingCardsRequired = 0;

    //Check to make sure remainder does not become NaN
    var remainder = 0
    if (cardColumns !== 0) {
      remainder = activeCards % cardColumns;
    }

    // Increases the active cards until a equal factor is found
    while (true) {
      if (remainder === 0) break;

      paddingCardsRequired += 1;
      activeCards += 1
      remainder = activeCards % cardColumns;
    }

    //Adds all blank cards
    for (var i = 0; i < paddingCardsRequired; i++) {
      this.state.project_padding_cards.push(blankCard)
    }
  }

  render() {

    this.addDynamicCardPadding()

    return (
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <h1 className="title">Aidan Fray</h1>
            {/* TODO: Typing animation seems to not work after adding constructor to this class */}
            {/* <TypingElement /> */}
          </Cell>

          <Cell col={12}>
            <div id="limit">
              <GithubCalendar />
            </div>
          </Cell>

          <Cell col={12}>
            <div id="limit" className="projects-grid">
              {this.state.project_cards}
              {this.state.project_padding_cards}
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
