import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Form, Item, Input } from "native-base";
import { TitleText } from "../StyledText";
import SimpleButton from "../Buttons/SimpleButton";

export default class SignIn extends Component {
  signUp = () => console.log("signUp");
  render() {
    return (
      <>
        <Form>
          <Item stackedLabel>
            <View style={styles.inputLabel}>
              <TitleText>Email</TitleText>
            </View>
            <Input style={styles.inputField} />
          </Item>
          <Item stackedLabel>
            <View style={styles.inputLabel}>
              <TitleText>Password</TitleText>
            </View>
            <Input secureTextEntry style={styles.inputField} />
          </Item>
          <Item stackedLabel last>
            <View style={styles.inputLabel}>
              <TitleText>Repeat Password</TitleText>
            </View>
            <Input secureTextEntry style={styles.inputField} />
          </Item>
        </Form>
        <SimpleButton onPress={this.signUp} text="Sign Up" />
      </>
    );
  }
}

const styles = StyleSheet.create({
  inputLabel: {
    alignSelf: "flex-start",
    paddingTop: 10
  },
  inputField: {
    fontSize: 30,
    fontFamily: "sans-light"
  }
});
