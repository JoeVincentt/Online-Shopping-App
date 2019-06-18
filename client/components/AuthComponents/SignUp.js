import React, { useState } from "react";
import { View, StyleSheet, Alert, KeyboardAvoidingView } from "react-native";
import { Form, Item, Input } from "native-base";
import { TitleText, ContentItalicText } from "../StyledText";
import SimpleButton from "../Buttons/SimpleButton";

import colors from "../../constants/Colors";
import { height } from "../../constants/Layout";

export default (SignUp = ({ switchBetweenAuthModes }) => {
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
      (passwordValidation === "Medium" || passwordValidation === "Strong") &&
      password.trim().length >= 6 &&
      password.trim() === passwordConfirmation.trim()
    ) {
      //Call to server to validate password information
      switchBetweenAuthModes();
      console.log("call to the server");
    } else {
      Alert.alert(
        "Invalid Input\n\nPlease check following:\n",
        '- Enter a valid Email\n- Minimum 6 characters password\n- Password "medium" or higher security level\n- Password = Repeated Password',
        [
          {
            text: "Got it!",
            onPress: () => {
              setPassword("");
              setPasswordConfirmation("");
            },
            style: "cancel"
          }
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <>
      <Form>
        <View style={{ height: height * 0.02 }} />
        <View style={styles.inputLabel}>
          <TitleText style={{}}>Email</TitleText>
        </View>
        <Item
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
              setEmail(email);
              analyzeEmail(email);
            }}
          />
        </Item>
        <ContentItalicText
          style={{
            marginLeft: height * 0.015,
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
        <View style={{ height: height * 0.02 }} />
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
            marginLeft: height * 0.015,
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
        <View style={{ height: height * 0.02 }} />
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
    marginLeft: height * 0.015
  },
  inputField: {
    fontFamily: "sans-light",
    fontSize: height * 0.03
  }
});
