import React, { useContext } from "react";
import { Container, Header, Content, Item, Input, Icon } from "native-base";
import { View } from "react-native";

import { TitleText } from "../StyledText";
import SimpleButton from "../Buttons/SimpleButton";
import colors from "../../constants/Colors";
import { UserProfileContext } from "../../context/UserProfileContext";
export default () => {
  const {
    username,
    fullName,
    email,
    address,
    phoneNumber,
    setUsername,
    setFullName,
    setEmail,
    setPhoneNumber,
    setAddress
  } = useContext(UserProfileContext);

  const saveProfile = () => {
    console.log("save profile");
  };

  return (
    <>
      <View style={{ alignSelf: "flex-start", paddingTop: 20 }}>
        <TitleText>Account</TitleText>
      </View>
      <Item>
        <Icon active name="contact" />
        <Input
          placeholder="Username"
          value={username}
          editable
          onChangeText={username => setUsername(username)}
        />
      </Item>
      <Item>
        <Icon active name="mail-open" />
        <Input
          placeholder="Email"
          value={email}
          editable
          onChangeText={email => setEmail(email)}
        />
      </Item>

      <View style={{ alignSelf: "flex-start", paddingTop: 20 }}>
        <TitleText>Personal</TitleText>
      </View>
      <Item>
        <Icon active name="person" />
        <Input
          placeholder="Full Name"
          value={fullName}
          editable
          onChangeText={fullName => setFullName(fullName)}
        />
      </Item>

      <Item>
        <Icon active name="call" />
        <Input
          placeholder="Phone Number"
          value={phoneNumber}
          editable
          onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
        />
      </Item>
      <Item>
        <Icon active name="home" />
        <Input
          placeholder="ex: 7a Glory St, New York, NY, 10001"
          value={address}
          numberOfLines={2}
          multiline
          editable
          onChangeText={address => setAddress(address)}
        />
      </Item>
      <Item
        style={{
          borderColor: "transparent",
          justifyContent: "center",
          marginTop: 20
        }}
      >
        <SimpleButton
          style={{ borderColor: colors.secondary }}
          onPress={saveProfile}
          text="Save"
        />
      </Item>
    </>
  );
};
