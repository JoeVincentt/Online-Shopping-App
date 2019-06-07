import React from "react";
import { Item } from "native-base";

import {
  ContentBoldText,
  ContentItalicText,
  ContentLightText
} from "../../StyledText";

export default props => (
  <>
    <Item
      style={{
        justifyContent: "space-between",
        borderColor: "transparent"
      }}
    >
      <Item
        style={{
          borderColor: "transparent"
        }}
      >
        <ContentBoldText>Order ID: </ContentBoldText>
        <ContentLightText>{props.orderId}</ContentLightText>
      </Item>
      <ContentItalicText>Date: {props.orderedDate} </ContentItalicText>
    </Item>
    <Item>
      <ContentBoldText>Price: </ContentBoldText>
      <ContentLightText>{props.orderPrice} $</ContentLightText>
    </Item>
    <Item>
      <ContentBoldText>Email: </ContentBoldText>
      <ContentLightText>{props.customerEmail}</ContentLightText>
    </Item>
    <Item
      style={{
        borderBottomColor: "red"
      }}
    >
      <ContentBoldText>Address: </ContentBoldText>
      <ContentItalicText>{props.customerAddress}</ContentItalicText>
    </Item>
  </>
);
