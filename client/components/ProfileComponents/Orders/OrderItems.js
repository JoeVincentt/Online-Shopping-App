import React from "react";
import { Item } from "native-base";
import { View } from "react-native";

import {
  ContentBoldText,
  ContentItalicText,
  ContentLightText
} from "../../StyledText";

export default props => (
  <View style={{ backgroundColor: "#ccc" }}>
    <Item>
      <ContentBoldText>Product ID: </ContentBoldText>
      <ContentLightText>{props.productId}</ContentLightText>
    </Item>
    <Item>
      <ContentBoldText>Name: </ContentBoldText>
      <ContentItalicText>{props.productName}</ContentItalicText>
    </Item>
    <Item>
      <ContentBoldText>Quantity: </ContentBoldText>
      <ContentLightText>{props.productQuantity}</ContentLightText>
    </Item>
    <Item style={{ borderBottomColor: "red" }}>
      <ContentBoldText>Price: </ContentBoldText>
      <ContentLightText>{props.productPrice} $</ContentLightText>
    </Item>
  </View>
);
