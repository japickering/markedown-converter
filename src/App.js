import React, { Component } from "react";
import marked from "marked";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    const presetText = "<code>I code like a Ninja!</code>";
    this.onChange = this.onChange.bind(this);

    this.state = {
      text: presetText,
      markedText: this.translateMarkdown(presetText)
    };
  }

  translateMarkdown(text) {
    return {
      __html: marked(text)
    };
  }

  onChange(event) {
    const val = event.target.value;
    this.setState({
      text: val,
      markedText: this.translateMarkdown(val)
    });
  }

  render() {
    return (
      <div className='container row'>
        <div className='col col-xs-12 col-md-12 col-lg-6'>
          <h3>Markdown input</h3>
          <textarea
            autoFocus={true}
            className='textInput form-control'
            value={this.state.text}
            onChange={this.onChange}
          ></textarea>
        </div>
        <div className='col col-xs-12 col-md-12 col-lg-6'>
          <h3>HTML5 output</h3>
          <div
            className='outputText'
            dangerouslySetInnerHTML={this.state.markedText}
          />
        </div>
      </div>
    );
  }
}
