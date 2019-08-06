import React, { Component } from "react";
import { connect } from "react-redux";

import { Row, Col, Button } from "react-bootstrap";

export class DisplayButtons extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Row className="justify-content-center buttonRow">
          <Col md="3">
            <Button
              className="dynamoButton"
              onClick={this.props.handleDrawOne}
              disabled={this.props.disableDrawOne}
            >
              Draw One
            </Button>
          </Col>
          <Col md="3">
            <Button
              className="dynamoButton"
              onClick={this.props.handleDealAll}
              disabled={this.props.disableDealAll}
            >
              Deal All
            </Button>
          </Col>
          <Col md="3">
            <Button className="dynamoButton" onClick={this.props.handleShuffle}>
              Shuffle
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  disableDrawOne: state.disableDrawOne,
  disableDealAll: state.disableDealAll
});

const mapDispatchToProps = dispatch => ({
  handleDrawOne: () => dispatch({ type: "DRAW_ONE" }),
  handleDealAll: () => dispatch({ type: "DEAL_ALL" }),
  handleShuffle: () => dispatch({ type: "SHUFFLE" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayButtons);
