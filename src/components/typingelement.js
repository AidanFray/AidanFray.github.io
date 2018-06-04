import React, { Component } from 'react';
import Typing from 'react-typing-animation';

class TypingElement extends Component {

  // New words to be placed here to be typed onto the screen
  words =
  [
    //<Name>   <Color>
    ["Python", ""],
    [".NET", ""],
    ["Wireshark", ""],
    ["Arch Linux", ""],
    ["C++", ""],
    ["Java", ""],
    ["Kotlin", ""]
  ];
  typing_delay = 3000;
  typing_backspace = 20;

  shuffle_list() {
    for (var i = 0; i < this.words.length; i++) {

      // Randomises the list swap position
      var rnd = Math.floor((Math.random() * this.words.length));

      var tmp = this.words[i];
      this.words[i] = this.words[rnd];
      this.words[rnd] = tmp;
    }
  }

  print_text(text, color) {
    return(
      <h1 className="typing-text" style={{color: color}}>{text}</h1>
    )
  }

  render() {
    this.shuffle_list();

    var words_to_type = [];

    // Dynamically creates the typing formatted code
    for (var i = 0; i < this.words.length; i++) {
      words_to_type.push(
        <span>
          {this.print_text(this.words[i][0], this.words[i][1])}
          <Typing.Delay ms={this.typing_delay} />
          <Typing.Backspace count={this.typing_backspace} />
        </span>
      )
    }

    return(
      <div>
        <Typing loop={true}>
            {words_to_type}
        </Typing>
      </div>)
    }
  }

  export default TypingElement;
