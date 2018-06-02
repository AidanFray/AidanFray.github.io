import React, { Component } from 'react';
import Typing from 'react-typing-animation';

class TypingElement extends Component {

  print_text(Text) {
    return(
      <h2>{Text}</h2>
    )
  }

  render() {

    let typing_delay = 3000;
    let typing_backspace = 20;

    return(
      <Typing loop="True">
        {this.print_text("Python")}
        <Typing.Delay ms={typing_delay} />
        <Typing.Backspace count={typing_backspace} />

        {this.print_text("C++")}
        <Typing.Delay ms={typing_delay} />
        <Typing.Backspace count={typing_backspace} />

        {this.print_text("C#")}
        <Typing.Delay ms={typing_delay} />
        <Typing.Backspace count={typing_backspace} />
      </Typing>
    )
  }
}

export default TypingElement;
