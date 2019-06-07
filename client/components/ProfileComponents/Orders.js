import React, { Component } from "react";
import { Container, Header, Content, Item, Input, Icon } from "native-base";
import { View } from "react-native";

import {
  TitleText,
  ContentBoldText,
  ContentItalicText,
  ContentLightText
} from "../StyledText";
export default class IconTextboxExample extends Component {
  state = {
    orders: [
      {
        id: 1,
        customerEmail: "customer@cust.com",
        customerAddress: "7a Glory St, New York, NY, 10001",
        products: [
          {
            id: 1,
            name: "simple prod",
            quantity: 1
          },
          {
            id: 2,
            name: "dif prod",
            quantity: 2
          },
          {
            id: 3,
            name: "other prod",
            quantity: 3
          }
        ]
      },
      {
        id: 2,
        customerEmail: "new@new.com",
        products: [
          {
            id: 4,
            name: "super prod",
            quantity: 4
          },
          {
            id: 2,
            name: "dif prod",
            quantity: 2
          },
          {
            id: 4,
            name: "extra prod",
            quantity: 4
          }
        ]
      }
    ]
  };
  render() {
    const { username, fullName, email, address, phoneNumber } = this.state;
    return (
      <>
        <View style={{ alignSelf: "flex-start", paddingTop: 20 }}>
          <TitleText>Orders</TitleText>
        </View>
        <View>
          <Item style={{ justifyContent: "space-between" }}>
            <Item>
              <ContentBoldText>ID: </ContentBoldText>
              <ContentLightText>1</ContentLightText>
            </Item>
            <ContentItalicText>Date: 02/04/2021</ContentItalicText>
          </Item>
          <Item>
            <ContentItalicText>
              7a Glory St, New York, NY, 10001
            </ContentItalicText>
          </Item>
        </View>
      </>
    );
  }
}
