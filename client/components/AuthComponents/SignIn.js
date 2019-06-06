import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Form, Item, Input } from "native-base";
import { TitleText, ContentLightText } from "../StyledText";
import SimpleButton from "../Buttons/SimpleButton";

export default class SignIn extends Component {
  signIn = () => console.log("singIn");
  render() {
    return (
      <>
        <Form style={{ marginVertical: 10 }}>
          <Item stackedLabel last>
            <View style={styles.inputLabel}>
              <TitleText>Email</TitleText>
            </View>
            <Input style={styles.inputField} />
          </Item>
          <Item stackedLabel last>
            <View style={styles.inputLabel}>
              <TitleText>Password</TitleText>
            </View>
            <Input secureTextEntry style={styles.inputField} />
          </Item>
        </Form>
        <SimpleButton onPress={this.signIn} text="Sign In" />
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
    fontFamily: "sans-light"
  }
});
