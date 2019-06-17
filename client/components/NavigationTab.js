import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { Button, Icon, Badge } from "native-base";
import { ContentLightText } from "../components/StyledText";
import { height } from "../constants/Layout";
import colors from "../constants/Colors";

const Tab = props => {
  return (
    <Button
      onPress={() => {
        props.onPress(props.navigateTo);
      }}
      style={{
        marginTop: height * 0.03,
        paddingBottom: (props.cartLength && height * 0.025) || height * 0.014
      }}
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
        style={props.active ? { color: colors.secondary } : {}}
        name={props.iconName}
      />

      <ContentLightText style={props.active ? { color: colors.secondary } : {}}>
        {props.tabText}
      </ContentLightText>
    </Button>
  );
};
export default Tab;
