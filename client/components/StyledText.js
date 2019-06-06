import React from "react";
import { Text } from "react-native";

export const MarijuanaText = props => (
  <Text
    {...props}
    style={[{ fontFamily: "marijuana", fontSize: 40 }, props.style]}
  />
);
export const TitleText = props => (
  <Text {...props} style={[{ fontFamily: "sharp-black" }, props.style]} />
);

export const ContentBoldText = props => (
  <Text {...props} style={[{ fontFamily: "sans-bold" }, props.style]} />
);
export const ContentLightText = props => (
  <Text {...props} style={[{ fontFamily: "sans-light" }, props.style]} />
);
export const ContentItalicText = props => (
  <Text {...props} style={[{ fontFamily: "sans-italic" }, props.style]} />
);
