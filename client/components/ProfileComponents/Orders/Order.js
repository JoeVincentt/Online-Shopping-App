import React from "react";
import { Item } from "native-base";

import {
  ContentBoldText,
  ContentItalicText,
  ContentLightText
} from "../../StyledText";
import colors from "../../../constants/Colors";

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
        <ContentBoldText>Price: </ContentBoldText>
        <ContentLightText>{props.orderPrice} $</ContentLightText>
      </Item>
      <ContentBoldText
        style={{
          color:
            props.orderStatus === "Completed"
              ? colors.secondary
              : props.orderStatus === "Canceled"
              ? colors.danger
              : "#000000"
        }}
      >
        {props.orderStatus}{" "}
      </ContentBoldText>
    </Item>
    <Item
      style={{
        borderColor: "transparent"
      }}
    >
      <ContentBoldText>Email: </ContentBoldText>
      <ContentLightText>{props.customerEmail}</ContentLightText>
    </Item>
    <Item
      style={{
        borderBottomColor: colors.danger
      }}
    >
      <ContentBoldText>Address: </ContentBoldText>
      <ContentItalicText>{props.customerAddress}</ContentItalicText>
    </Item>
  </>
);
