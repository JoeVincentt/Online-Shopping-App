import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import colors from "../../constants/Colors";
import { ContentLightText } from "../StyledText";

export default props => (
  <View style={{ justifyContent: "center", alignItems: "center" }}>
    <TouchableOpacity onPress={() => props.onPress()}>
      <View
        style={[
          {
            borderColor: colors.secondary,
            borderWidth: 2,
            margin: 15
          },
          props.style
        ]}
      >
        <ContentLightText
          style={[{ fontSize: 40, padding: 10 }, props.textStyle]}
        >
          {props.text}
        </ContentLightText>
      </View>
    </TouchableOpacity>
  </View>
);
