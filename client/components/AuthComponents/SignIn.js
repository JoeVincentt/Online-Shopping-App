import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Form, Item, Input } from "native-base";

import { TitleText, ContentLightText } from "../StyledText";
import SimpleButton from "../Buttons/SimpleButton";
import { UserProfileContext } from "../../context/UserProfileContext";
import { CartContext } from "../../context/CartContext";

export default (SignIn = props => {
  const {
    setUsername,
    setFullName,
    setAddress,
    setEmail,
    setPhoneNumber,
    setOrders,
    setFavoriteProducts
  } = useContext(UserProfileContext);
  const { updateItems } = useContext(CartContext);
  //create State for login

  const signIn = () => {
    //fetch and setup user
    console.log("singIn");
    setTimeout(() => {
      setUsername("Van");
      setFullName("Wan Gog"),
        setAddress("212 St ave"),
        setEmail("e@e.com"),
        setPhoneNumber("9431234122");
      setOrders([]);
      setFavoriteProducts([]);
      updateItems([]);
      props.logIn();
    }, 400);
  };

  return (
    <>
      <Form>
        <View style={{ height: 30 }} />
        <Item stackedLabel last>
          <View style={styles.inputLabel}>
            <TitleText>Email</TitleText>
          </View>
          <Input style={styles.inputField} />
        </Item>
        <View style={{ height: 30 }} />
        <Item stackedLabel last>
          <View style={styles.inputLabel}>
            <TitleText>Password</TitleText>
          </View>
          <Input secureTextEntry style={styles.inputField} />
        </Item>
      </Form>
      <SimpleButton onPress={signIn} text="Sign In" />
    </>
  );
});

const styles = StyleSheet.create({
  inputLabel: {
    alignSelf: "flex-start"
  },
  inputField: {
    fontFamily: "sans-light",
    fontSize: 20
  }
});
