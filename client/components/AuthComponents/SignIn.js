import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Form, Item, Input } from "native-base";

import { TitleText, ContentLightText } from "../StyledText";
import SimpleButton from "../Buttons/SimpleButton";
import { UserProfileContext } from "../../context/UserProfileContext";
import { CartContext } from "../../context/CartContext";
import { UIContext } from "../../context/UIContext";

export default (SignIn = props => {
  const { setSignIn } = useContext(UserProfileContext);
  const { updateCartItems } = useContext(CartContext);
  const { slideInFooter, slideInComponent } = useContext(UIContext);
  //create State for login

  const signIn = () => {
    //fetch and setup user
    console.log("singIn");
    setTimeout(() => {
      setSignIn(
        "Van",
        "Wan Gog",
        "E@e.com",
        "212 St ave",
        "9431234122",
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
        <View style={{ height: 30 }} />
        <View style={styles.inputLabel}>
          <TitleText>Email</TitleText>
        </View>
        <Item stackedLabel>
          <Input style={styles.inputField} />
        </Item>
        <View style={{ height: 30 }} />
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
    marginLeft: 20
  },
  inputField: {
    fontFamily: "sans-light",
    fontSize: 20,
    height: 30
  }
});
