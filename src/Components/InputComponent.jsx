import { Component } from "react";

class InputComponent extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default InputComponent;
