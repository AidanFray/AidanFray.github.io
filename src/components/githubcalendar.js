import React, { Component } from 'react';


class Calendar extends Component {
  render() {
    return(
      <div class="calendar">
        Loading the data just for you.
        <script>
          new GitHubCalendar(".calendar", "AidanFray");
        </script>
      </div>
    )
  }
}

export default Calendar;
