import React, { Component } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";

import "react-calendar-heatmap/dist/styles.css";
import "../Themes.css";

const availableThemes = ["github", "halloween", "dracula"];

const today = new Date();

const yearAgo = shiftDate(today, -364);

// Moves a set date back or forwards
function shiftDate(date, numDays) {
  var newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

// Turn date object into a formatted string
function formatDate(date) {
  // For some reason date.getMonth() is a scale of 0 -> 11
  // Therefore +1 is needed for correct formatting

  var year = date.getFullYear();

  // Padds the month and day
  var month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }

  var day = date.getDate();
  if (day < 10) {
    day = "0" + day;
  }

  return `${year}-${month}-${day}`;
}

class GithubCalendar extends Component {
  constructor(props) {
    super(props);

    // Default theme is the classic github
    var currentTheme = availableThemes[0];

    console.log(today.getDate());

    // If it's halloween, the colour scheme changes
    if (today.getMonth() + 1 === 10 && today.getDate() === 31) {
      currentTheme = availableThemes[1];
    }

    this.state = {
      submissions: [],
      display: "",
      theme: currentTheme
    };
    this.requestContributions();
  }

  // Sends a request to the API to request a JSON objects of contributions
  requestContributions() {
    var url = "https://github-contributions-api.now.sh/v1/AidanFray";
    fetch(url)
      .then(response => response.text())
      .then(t => this.createSubmissionList(JSON.parse(t)))
      .catch(error => {
        console.log("[Github Contributions API] " + error);

        //Hides the element if there is a network issue
        this.setState({
          display: "none"
        });
      });
  }

  // Uses the JSON list of contributions to create a formatted list
  createSubmissionList(list) {
    var c = list.contributions;

    var submissionList = [];

    //Find today's date index
    var todayIndex = 0;
    var todayStr = formatDate(today);

    //Gets today's index
    for (var i = 0; i < c.length; i++) {
      if (c[i].date === todayStr) {
        todayIndex = i;
        break;
      }
    }

    for (var x = 0; x < 365; x++) {
      submissionList.push({
        date: c[todayIndex + x].date,
        count: c[todayIndex + x].count
      });
    }

    //Adds the submission list and displays the element
    this.setState({
      submissions: submissionList,
      display: ""
    });
  }

  changeTheme() {
    var currentTheme = this.state.theme;
    var newTheme = currentTheme;

    while (currentTheme === newTheme) {
      // Grabs a random index from the avaliableThemess
      var i = Math.floor(Math.random() * availableThemes.length + 1) - 1;
      newTheme = availableThemes[i]
    }

    this.setState({ theme: newTheme });
  }

  render() {
    return (
      <div
        className={`${this.state.theme}-background`}
        style={{
          width: "75%",
          margin: "auto",
          display: this.state.display,
          padding: "25px",
        }}
      >
        <CalendarHeatmap
          startDate={yearAgo}
          endDate={today}
          values={this.state.submissions}
          classForValue={value => {
            var count = 0;
            if (value != null) {
              // Max value
              if (value.count > 4) {
                count = 4;
              } else {
                count = value.count;
              }
            }

            return `${this.state.theme}-color-scale-${count}`;
          }}
          tooltipDataAttrs={value => {
            var count = 0;
            if (value.count !== null) {
              count = value.count;
            }

            return {
              "data-tip": `${value.date} - Contributions: ${count}`
            };
          }}
        />
        <p />
        <button onClick={() => this.changeTheme()}>Random Theme</button>
        <ReactTooltip />
      </div>
    );
  }
}

export default GithubCalendar;
