import React, { useContext } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { FooterTab } from "native-base";

import NavigationTab from "../components/NavigationTab";
import colors from "../constants/Colors";

import { CartContext } from "../context/CartContext";

export default (TabNavigation = props => {
  const { cartItems } = useContext(CartContext);
  return (
    <FooterTab
      style={{
        borderTopWidth: 0.5,
        borderTopColor: colors.tabNavBorderTop,
        backgroundColor: colors.defaultBackgroundColor
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

      {props.loggedIn && (
        <>
          <NavigationTab
            onPress={props.onPress}
            navigateTo="favorite"
            iconName="heart"
            tabText="Favorite"
            active={props.activeTab === "favorite" ? true : false}
          />
          <NavigationTab
            onPress={props.onPress}
            cartLength={cartItems.length > 0 ? cartItems.length : null}
            cartItems={cartItems}
            navigateTo="cart"
            iconName="cart"
            tabText="Cart"
            active={props.activeTab === "cart" ? true : false}
          />
        </>
      )}
    </FooterTab>
  );
});
