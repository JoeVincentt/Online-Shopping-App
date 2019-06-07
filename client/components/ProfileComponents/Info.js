import React, { Component } from "react";
import { Container, Header, Content, Item, Input, Icon } from "native-base";
import { View } from "react-native";

import { TitleText } from "../StyledText";
import SimpleButton from "../Buttons/SimpleButton";
import colors from "../../constants/Colors";
export default class IconTextboxExample extends Component {
  state = {
    username: "JohnyBoy",
    fullName: "Joe Vincent",
    email: "joe@joe.com",
    address: "7a Glory St, New York, NY, 10001",
    phoneNumber: "810-520-6363"
  };

  saveProfile = () => {
    console.log("save profile");
  };

  render() {
    const { username, fullName, email, address, phoneNumber } = this.state;
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
            onChangeText={username => this.setState({ username })}
          />
        </Item>
        <Item>
          <Icon active name="mail-open" />
          <Input
            placeholder="Email"
            value={email}
            editable
            onChangeText={email => this.setState({ email })}
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
            onChangeText={fullName => this.setState({ fullName })}
          />
        </Item>

        <Item>
          <Icon active name="call" />
          <Input
            placeholder="Phone Number"
            value={phoneNumber}
            editable
            onChangeText={phoneNumber => this.setState({ phoneNumber })}
          />
        </Item>
        <Item>
          <Icon active name="home" />
          <Input
            placeholder="ex: 7a Glory St, New York, NY, 10001"
            value={address}
            multiline
            editable
            onChangeText={address => this.setState({ address })}
          />
        </Item>
        <Item
          style={{
            borderColor: "transparent",
            justifyContent: "center",
            marginTop: 30
          }}
        >
          <SimpleButton
            style={{ borderColor: colors.secondary }}
            onPress={this.saveProfile}
            text="Save"
          />
        </Item>
      </>
    );
  }
}
