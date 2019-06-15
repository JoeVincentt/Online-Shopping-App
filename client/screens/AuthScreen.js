import React, { Component } from "react";
import { TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";

import {
  ContentItalicText,
  ContentBoldText,
  ContentLightText
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
      return <SignIn logIn={this.props.logIn} />;
    }
    if (this.state.signup) {
      return <SignUp />;
    }
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 30 }}>{this.renderComponent()}</View>

        <View style={styles.switchTextContainer}>
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  switchTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  }
});
