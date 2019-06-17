import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Form, Item, Input } from "native-base";

import { TitleText, ContentLightText } from "../StyledText";
import SimpleButton from "../Buttons/SimpleButton";
import { UserProfileContext } from "../../context/UserProfileContext";
import { CartContext } from "../../context/CartContext";
import { UIContext } from "../../context/UIContext";
import { height } from "../../constants/Layout";

export default (SignIn = props => {
  const { setSignIn } = useContext(UserProfileContext);
  const { updateCartItems } = useContext(CartContext);
  const { slideInFooter, slideInComponent } = useContext(UIContext);
  //create State for login

  const signIn = () => {
    //fetch and setup user
    setTimeout(() => {
      setSignIn(
        "2",
        "Username",
        "Full Name",
        "email@email.com",
        "Home Address",
        "Phone Number",
        [],
        []
      );
      updateCartItems([]);
      props.logIn();
      slideInFooter();
      slideInComponent();
    }, 400);
  };

  return (
    <>
      <Form>
        <View style={{ height: height * 0.02 }} />
        <View style={styles.inputLabel}>
          <TitleText>Email</TitleText>
        </View>
        <Item stackedLabel>
          <Input style={styles.inputField} />
        </Item>
        <View style={{ height: height * 0.02 }} />
        <View style={styles.inputLabel}>
          <TitleText>Password</TitleText>
        </View>
        <Item stackedLabel>
          <Input secureTextEntry style={styles.inputField} />
        </Item>
      </Form>
      <SimpleButton onPress={signIn} text="Sign In" />
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
