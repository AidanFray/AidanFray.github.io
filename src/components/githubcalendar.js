import React, { Component } from 'react';


class GithubCalendar extends Component {
  render() {
    return(
      <div>
        <div id="github-widget" data-user="jcouyang" data-display="calendar"></div>
        <script src="https://gh-widget.oyanglul.us/index.js"></script>
      </div>
    )
  }
}

export default GithubCalendar;
