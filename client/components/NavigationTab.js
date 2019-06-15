import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { Button, Icon, Badge } from "native-base";
import { ContentLightText } from "../components/StyledText";
import colors from "../constants/Colors";

const Tab = props => {
  return (
    <Button
      onPress={() => {
        props.onPress(props.navigateTo);
      }}
      style={
        props.active
          ? {
              height: "100%",
              borderRadius: 0
            }
          : { paddingBottom: props.cartLength ? 15 : 0 }
      }
      active={props.activeTab}
      badge
      vertical
    >
      {props.cartLength && (
        <Badge style={{ backgroundColor: colors.badgeColor }}>
          <Text>{props.cartLength}</Text>
        </Badge>
      )}

      <Icon
        style={props.active ? { fontSize: 50, color: colors.secondary } : {}}
        name={props.iconName}
      />
      {props.active ? null : (
        <ContentLightText>{props.tabText}</ContentLightText>
      )}
    </Button>
  );
};
export default Tab;
