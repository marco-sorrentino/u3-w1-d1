import { Component } from "react";

class ParagraphComponent extends Component {
  render() {
    return (
      <div>
        <p style={{ fontSize: this.props.size + "em" }}>{this.props.text}</p>
      </div>
    );
  }
}

export default ParagraphComponent;
