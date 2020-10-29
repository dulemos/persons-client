import React from "react";
import "./Button.css";
import Icons from "../Icons/Icons";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  render() {
    return (
      <button className={`button ${this.props.type}`} width={this.props.width} heigth={this.props.heigth} onClick={this.props.onClick}>
        {this.props.icon && Icons[this.props.icon]}
        {this.props.children}
      </button>
    );
  }
}

export default Button;
