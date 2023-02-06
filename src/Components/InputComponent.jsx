import { Component } from "react";

class InputComponent extends Component {
  render() {
    return (
      <div>
        <input
          style={{
            borderRadius: this.props.radius,
            fontSize: this.props.size + "em",
          }}
          type="text"
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default InputComponent;
