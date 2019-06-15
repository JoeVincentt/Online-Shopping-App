import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Form, Item, Input } from "native-base";
import { TitleText, ContentItalicText } from "../StyledText";
import SimpleButton from "../Buttons/SimpleButton";

import colors from "../../constants/Colors";

export default (SignUp = () => {
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const analyzePassword = password => {
    const strongRegex = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
    );
    const mediumRegex = new RegExp(
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
    );

    if (strongRegex.test(password)) {
      setPasswordValidation("Strong");
    } else if (mediumRegex.test(password)) {
      setPasswordValidation("Medium");
    } else {
      setPasswordValidation("Weak");
    }
  };

  const analyzeEmail = email => {
    const emailRegex = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (emailRegex.test(email)) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }
  };

  const signUp = () => {
    if (
      emailValidation === true &&
      (passwordValidation === "medium" || passwordValidation === "strong") &&
      password.trim().length >= 6 &&
      password.trim() === passwordConfirmation.trim()
    ) {
      //Call to server to validate password information
      console.log("call to the server");
    } else {
      Alert.alert(
        "Invalid Input\n\nPlease check following:\n",
        '- Enter a valid Email\n- Minimum 6 characters password\n- Password "medium" or higher security level\n- Password = Repeated Password',
        [
          {
            text: "Got it!",
            onPress: () => {
              setEmail("");
              setPassword("");
              setPasswordConfirmation("");
            },
            style: "cancel"
          }
        ],
        { cancelable: false }
      );
      console.log("doesn't meet criteria");
    }
  };

  return (
    <>
      <Form>
        <View style={{ height: 30 }} />
        <View style={styles.inputLabel}>
          <TitleText style={{}}>Email</TitleText>
        </View>
        <Item
          stackedLabel
          style={{
            borderBottomColor:
              emailValidation === true
                ? colors.secondary
                : emailValidation === false
                ? colors.danger
                : null
          }}
        >
          <Input
            style={styles.inputField}
            value={email}
            onChangeText={email => {
              analyzeEmail(email);
              setEmail(email);
            }}
          />
        </Item>
        <ContentItalicText
          style={{
            marginLeft: 20,
            color:
              emailValidation === true
                ? colors.secondary
                : emailValidation === false
                ? colors.danger
                : null
          }}
        >
          {emailValidation === true
            ? "Email Valid"
            : emailValidation === false
            ? "Email Invalid"
            : ""}{" "}
        </ContentItalicText>
        <View style={{ height: 30 }} />
        <View style={styles.inputLabel}>
          <TitleText>Password</TitleText>
        </View>
        <Item
          stackedLabel
          style={{
            borderBottomColor:
              passwordValidation === "Weak"
                ? colors.danger
                : passwordValidation === "Medium"
                ? colors.warning
                : passwordValidation === "Strong"
                ? colors.secondary
                : null
          }}
        >
          <Input
            secureTextEntry
            style={styles.inputField}
            onChangeText={password => {
              setPassword(password);
              analyzePassword(password);
            }}
          />
        </Item>
        <ContentItalicText
          style={{
            marginLeft: 20,
            color:
              passwordValidation === "Weak"
                ? colors.danger
                : passwordValidation === "Medium"
                ? colors.warning
                : passwordValidation === "Strong"
                ? colors.secondary
                : null
          }}
        >
          {passwordValidation && `${passwordValidation} Password`}{" "}
        </ContentItalicText>
        <View style={{ height: 30 }} />
        <View style={styles.inputLabel}>
          <TitleText>Repeat Password</TitleText>
        </View>
        <Item stackedLabel>
          <Input
            secureTextEntry
            style={styles.inputField}
            onChangeText={passwordConfirmation =>
              setPasswordConfirmation(passwordConfirmation)
            }
          />
        </Item>
      </Form>
      <SimpleButton onPress={signUp} text="Sign Up" />
    </>
  );
});

const styles = StyleSheet.create({
  inputLabel: {
    alignSelf: "flex-start",
    marginLeft: 20
  },
  inputField: {
    fontFamily: "sans-light",
    fontSize: 20,
    height: 30
  }
});
