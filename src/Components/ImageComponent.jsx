import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img
          style={{ width: this.props.larghezza }}
          src={this.props.img}
          alt={this.props.altText}
        />
      </div>
    );
  }
}

export default ImageComponent;
