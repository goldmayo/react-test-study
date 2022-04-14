import React, { PureComponent } from "react";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type HeaderProps = {
  totalCount: number;
};

export default class Header extends PureComponent<HeaderProps> {
  render() {
    return (
      <header>
        <FontAwesomeIcon className="header-logo" icon={faLeaf} />
        <span>Habit Tracker</span>
        <span className="header-count" title="total-count">
          {this.props.totalCount}
        </span>
      </header>
    );
  }
}
