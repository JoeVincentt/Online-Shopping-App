import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import colors from "../../constants/Colors";
import { height } from "../../constants/Layout";
import { ContentLightText } from "../StyledText";

export default props => (
  <View style={{ justifyContent: "center", alignItems: "center" }}>
    <TouchableOpacity onPress={() => props.onPress()}>
      <View
        style={[
          {
            borderColor: colors.secondary,
            borderWidth: 2,
            margin: height * 0.015
          },
          props.style
        ]}
      >
        <ContentLightText
          style={[
            { fontSize: height * 0.03, padding: height * 0.01 },
            props.textStyle
          ]}
        >
          {props.text}
        </ContentLightText>
      </View>
    </TouchableOpacity>
  </View>
);
