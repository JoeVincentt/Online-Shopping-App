import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { Button, Icon, Badge } from "native-base";
import { ContentLightText } from "../components/StyledText";
const Tab = props => {
  return (
    <Button
      onPress={() => props.onPress(props.navigateTo)}
      style={props.active ? { height: "100%", borderRadius: 0 } : {}}
      active={props.activeTab}
      badge
      vertical
    >
      {props.cartLength && (
        <Badge style={{ backgroundColor: "#02FD8F" }}>
          <Text>{props.cartLength}</Text>
        </Badge>
      )}

      <Icon
        style={props.active ? { fontSize: 50, color: "#02EDFD" } : {}}
        name={props.iconName}
      />
      {props.active ? null : (
        <ContentLightText>{props.tabText}</ContentLightText>
      )}
    </Button>
  );
};
export default Tab;

//styles
const styles = StyleSheet.create({
  tabTitle: { fontSize: 18, color: "white" }
});
