import { Component } from "react";

class TitleComponent extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>{this.props.text}</h1>
      </div>
    );
  }
}

export default TitleComponent;
