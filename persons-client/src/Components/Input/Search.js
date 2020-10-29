import React from "react";
import "./Search.css";
import Icons from "../Icons/Icons";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  render() {
    return (
      <div className="input-Container" width={this.props.width}>
        {this.props.icon && <span className="icon">{Icons[this.props.icon]}</span>}
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          className="input"
          onChange={this.props.onChange}
        ></input>
      </div>
    );
  }
}

export default Search;
