import React, { Component } from "react";
import { connect } from "react-redux";

import { Container } from "react-bootstrap";
import DisplayButtons from "./components/DisplayButtons";
import DisplayCards from "./components/DisplayCards";
import "./App.css";

export class App extends Component {
  componentDidMount = () => {
    this.props.createDeck();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Deal the cards one at a time, or display the whole deck. Shuffle,
            and deal again!
          </p>
        </header>
        <Container>
          <DisplayButtons />
          <DisplayCards />
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createDeck: () => dispatch({ type: "CREATE_DECK" })
});

export default connect(
  null,
  mapDispatchToProps
)(App);
