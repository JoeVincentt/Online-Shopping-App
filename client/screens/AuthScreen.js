import React, { Component } from "react";
import { Button, Text } from "native-base";

import { MarijuanaText } from "../components/StyledText";
import SignIn from "../components/AuthComponents/SignIn";
import SignUp from "../components/AuthComponents/SignUp";

export default class AuthScreen extends Component {
  state = {
    signup: false
  };

  switchBetweenAuthModes = () => this.setState({ signup: !this.state.signup });

  renderComponent = () => {
    if (!this.state.signup) {
      return <SignIn />;
    }
    if (this.state.signup) {
      return <SignUp />;
    }
  };

  render() {
    return (
      <>
        {this.renderComponent()}
        <Button large primary onPress={() => this.switchBetweenAuthModes()}>
          <Text>{this.state.signup ? "Sign Up" : "Sign In"}</Text>
        </Button>
      </>
    );
  }
}
