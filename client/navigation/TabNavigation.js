import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { FooterTab } from "native-base";
import NavigationTab from "../components/NavigationTab";

const s = [2, 3];
export default (TabNavigation = props => {
  console.log(props.activeTab);
  return (
    <FooterTab
      style={{
        borderTopWidth: 0.5,
        borderTopColor: "#eeeeee",
        paddingBottom: 30
      }}
    >
      {props.loggedIn ? (
        <NavigationTab
          onPress={props.onPress}
          navigateTo="profile"
          iconName="person"
          tabText="Profile"
          active={props.activeTab === "profile" ? true : false}
        />
      ) : (
        <NavigationTab
          onPress={props.onPress}
          navigateTo="auth"
          iconName="log-in"
          tabText="Sign In"
          active={props.activeTab === "auth" ? true : false}
        />
      )}

      <NavigationTab
        onPress={props.onPress}
        navigateTo="shop"
        iconName="basket"
        tabText="Shop"
        active={props.activeTab === "shop" ? true : false}
      />
      <NavigationTab
        onPress={props.onPress}
        navigateTo="favorite"
        iconName="heart"
        tabText="Favorite"
        active={props.activeTab === "favorite" ? true : false}
      />

      {props.loggedIn && (
        <NavigationTab
          onPress={props.onPress}
          cartLength={props.cart.length}
          cartItems={props.cart}
          navigateTo="cart"
          iconName="cart"
          tabText="Cart"
          active={props.activeTab === "cart" ? true : false}
        />
      )}
    </FooterTab>
  );
});
