import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";

import {
  MarijuanaText,
  TitleText,
  ContentItalicText,
  ContentBoldText
} from "../components/StyledText";
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
        <View style={{ flex: 1 }}>{this.renderComponent()}</View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <ContentItalicText style={{ fontSize: 20 }}>
              {this.state.signup
                ? "Already have an account? "
                : "Don't have an account? "}
            </ContentItalicText>
            <TouchableOpacity onPress={() => this.switchBetweenAuthModes()}>
              <ContentBoldText style={{ fontSize: 20 }}>
                {this.state.signup ? " Sign In" : " Sign Up"}
              </ContentBoldText>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
