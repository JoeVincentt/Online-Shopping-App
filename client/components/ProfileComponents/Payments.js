import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  CheckBox
} from "native-base";
import { View, Text } from "react-native";

import colors from "../../constants/Colors";
import SimpleButton from "../Buttons/SimpleButton";
import { TitleText, ContentBoldText } from "../StyledText";
export default class Payments extends Component {
  state = {
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    rememberCard: true
  };

  clearCardInformation = () => {
    console.log("clear card info");
  };
  saveCardInformation = () => {
    console.log("save card info");
  };

  render() {
    const { cardNumber, expirationDate, cvv, rememberCard } = this.state;
    return (
      <>
        <View style={{ alignSelf: "flex-start", paddingTop: 20 }}>
          <TitleText>Card In Use</TitleText>
        </View>
        <Item>
          <Icon style={{ fontSize: 40 }} active name="card" />
          <Input
            placeholder="ex: 4242515162627373"
            value={cardNumber}
            keyboardType="numeric"
            maxLength={19}
            editable
            onChangeText={cardNumber =>
              this.setState({ cardNumber: cardNumber.toString() })
            }
          />
        </Item>
        <Item
          style={{
            borderColor: "transparent",
            justifyContent: "space-between"
          }}
        >
          <Item style={{ width: "40%" }}>
            <ContentBoldText style={{ fontSize: 20 }}>EXP: </ContentBoldText>
            <Input
              placeholder="0121"
              value={expirationDate}
              keyboardType="numeric"
              maxLength={4}
              editable
              onChangeText={expirationDate =>
                this.setState({ expirationDate: expirationDate.toString() })
              }
            />
          </Item>
          <Item style={{ width: "40%" }}>
            <ContentBoldText style={{ fontSize: 20 }}>CVV: </ContentBoldText>
            <Input
              placeholder="444"
              value={cvv}
              maxLength={3}
              keyboardType="numeric"
              editable
              onChangeText={cvv => this.setState({ cvv: cvv.toString() })}
            />
          </Item>
        </Item>
        <View>
          <Item
            style={{
              borderColor: "transparent",
              marginVertical: 30
            }}
          >
            <CheckBox
              checked={rememberCard}
              color={colors.secondary}
              onPress={() => this.setState({ rememberCard: !rememberCard })}
              style={{ marginRight: 20 }}
            />
            <ContentBoldText style={{ fontSize: 20 }}>
              Remember Card
            </ContentBoldText>
          </Item>
        </View>
        <Item style={{ borderColor: "transparent", justifyContent: "center" }}>
          <SimpleButton
            style={{ borderColor: "red" }}
            onPress={this.clearCardInformation}
            text="Clear"
          />
          <SimpleButton
            style={{ borderColor: colors.secondary }}
            onPress={this.saveCardInformation}
            text="Save"
          />
        </Item>
      </>
    );
  }
}
