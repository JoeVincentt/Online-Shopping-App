import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Form, Item, Input } from "native-base";
import { TitleText, ContentLightText } from "../StyledText";

export default props => (
  <View style={{ justifyContent: "center", alignItems: "center" }}>
    <TouchableOpacity onPress={() => props.onPress()}>
      <View
        style={[
          { borderColor: "#02EDFD", borderWidth: 2, margin: 15 },
          props.style
        ]}
      >
        <ContentLightText style={[{ fontSize: 40, padding: 10 }, props.style]}>
          {props.text}
        </ContentLightText>
      </View>
    </TouchableOpacity>
  </View>
);
