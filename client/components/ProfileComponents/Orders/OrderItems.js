import React from "react";
import { Item } from "native-base";
import { View } from "react-native";

import {
  ContentBoldText,
  ContentItalicText,
  ContentLightText
} from "../../StyledText";
import colors from "../../../constants/Colors";

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
    <Item style={{ borderBottomColor: colors.danger }}>
      <ContentBoldText>Price: </ContentBoldText>
      <ContentLightText>{props.productPrice} $</ContentLightText>
    </Item>
  </View>
);
