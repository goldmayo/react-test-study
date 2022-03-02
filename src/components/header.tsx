import React, { Component } from "react";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type HeaderProps = {
  totalCount: number;
};

export default class Header extends Component<HeaderProps> {
  render() {
    return (
      <header>
        <FontAwesomeIcon className="header-logo" icon={faLeaf} />
        <span>Habit Tracker</span>
        <span className="header-count">{this.props.totalCount}</span>
      </header>
    );
  }
}