import React, { Component } from 'react';
import Typing from 'react-typing-animation';

class TypingElement extends Component {

  words = ["Python", ".NET", "Wireshark", "Arch Linux", "C++", "Java", "Kotlin"];
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

  print_text(text) {
    return(
      <h1 className="typing-text">{text}</h1>
    )
  }

  render() {
    return(
      <div>
        {this.shuffle_list()}

        {/*TODO: Way to do this dynamically - too much repeated code*/}
        <Typing loop={true}>
          {this.print_text(this.words[0])}
          <Typing.Delay ms={this.typing_delay} />
          <Typing.Backspace count={this.typing_backspace} />

          {this.print_text(this.words[1])}
          <Typing.Delay ms={this.typing_delay} />
          <Typing.Backspace count={this.typing_backspace} />

          {this.print_text(this.words[2])}
          <Typing.Delay ms={this.typing_delay} />
          <Typing.Backspace count={this.typing_backspace} />

          {this.print_text(this.words[3])}
          <Typing.Delay ms={this.typing_delay} />
          <Typing.Backspace count={this.typing_backspace} />

          {this.print_text(this.words[4])}
          <Typing.Delay ms={this.typing_delay} />
          <Typing.Backspace count={this.typing_backspace} />

          {this.print_text(this.words[5])}
          <Typing.Delay ms={this.typing_delay} />
          <Typing.Backspace count={this.typing_backspace} />

          {this.print_text(this.words[6])}
          <Typing.Delay ms={this.typing_delay} />
          <Typing.Backspace count={this.typing_backspace} />

        </Typing>
      </div>)
    }
  }

  export default TypingElement;
