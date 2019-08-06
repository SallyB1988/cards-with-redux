import React, { Component } from "react";
import { connect } from "react-redux";

import { Row } from "react-bootstrap";
import Cards from "../../images";

export class DisplayCards extends Component {
  render() {
    const { drawn } = this.props;
    return (
      <Row className="my-2 justify-content-center cardTable">
        {drawn.map(c => {
          return (
            <img
              className="playingCard"
              key={c}
              src={Cards[c]}
              alt={`card ${c}`}
            />
          );
        })}
      </Row>
    );
  }
}
const mapStateToProps = state => {
  return {
    drawn: state.drawn
  };
};

export default connect(mapStateToProps)(DisplayCards);
