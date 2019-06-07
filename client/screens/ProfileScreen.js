import React, { Component } from "react";
import { Tab, Tabs, Text, TabHeading, Icon } from "native-base";
import { StyleSheet, View } from "react-native";

import Info from "../components/ProfileComponents/Info";
import Orders from "../components/ProfileComponents/Orders";
import Payments from "../components/ProfileComponents/Payments";
import colors from "../constants/Colors";
export default class ProfileTabs extends Component {
  state = { page: 0 };

  render() {
    const { page } = this.state;
    return (
      <Tabs
        tabBarUnderlineStyle={{ backgroundColor: colors.secondary }}
        initialPage={0}
        onChangeTab={({ i }) => this.setState({ page: i })}
      >
        <Tab
          heading={
            <TabHeading
              style={page === 0 ? styles.activeTabStyle : styles.tabStyle}
            >
              <Icon
                style={page === 0 ? styles.activeIconStyle : styles.iconStyle}
                name="information-circle"
              />
              {page === 0 ? null : (
                <Text style={page === 0 ? {} : styles.textStyle}>Info</Text>
              )}
            </TabHeading>
          }
        >
          <View style={styles.componentContainer}>
            <Info />
          </View>
        </Tab>
        <Tab
          heading={
            <TabHeading
              style={page === 1 ? styles.activeTabStyle : styles.tabStyle}
            >
              <Icon
                style={page === 1 ? styles.activeIconStyle : styles.iconStyle}
                name="list-box"
              />
              {page === 1 ? null : (
                <Text style={page === 1 ? {} : styles.textStyle}>Orders</Text>
              )}
            </TabHeading>
          }
        >
          <View style={styles.componentContainer}>
            <Orders />
          </View>
        </Tab>
        <Tab
          heading={
            <TabHeading
              style={page === 2 ? styles.activeTabStyle : styles.tabStyle}
            >
              <Icon
                style={page === 2 ? styles.activeIconStyle : styles.iconStyle}
                name="card"
              />
              {page === 2 ? null : (
                <Text style={page === 2 ? {} : styles.textStyle}>Payments</Text>
              )}
            </TabHeading>
          }
        >
          <View style={styles.componentContainer}>
            <Payments />
          </View>
        </Tab>
      </Tabs>
    );
  }
}

const styles = StyleSheet.create({
  tabStyle: { backgroundColor: colors.defaultBackgroundColor },
  activeTabStyle: { backgroundColor: colors.defaultBackgroundColor },
  textStyle: {
    color: "black",
    fontSize: 16,
    fontFamily: "sans-light"
  },
  activeIconStyle: {
    color: colors.secondary,
    fontSize: 40
  },
  iconStyle: {
    fontSize: 16
  },
  componentContainer: {
    paddingHorizontal: 30
  }
});
