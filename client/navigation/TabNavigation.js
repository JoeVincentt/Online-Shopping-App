import React, { useContext } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { FooterTab } from "native-base";

import NavigationTab from "../components/NavigationTab";
import NavigationRotes from "../navigation/NavigationRoutes";
import colors from "../constants/Colors";

import { CartContext } from "../context/CartContext";
import { NavigationContext } from "../context/NavigationContext";
import { UserProfileContext } from "../context/UserProfileContext";

export default (TabNavigation = props => {
  const { loggedIn, navigation, activeTab } = useContext(NavigationContext);
  const { signedIn } = useContext(UserProfileContext);
  const { cartItems } = useContext(CartContext);
  return (
    <FooterTab
      style={{
        borderTopWidth: 0.5,
        borderTopColor: colors.tabNavBorderTop,
        backgroundColor: colors.defaultBackgroundColor
      }}
    >
      {loggedIn && signedIn ? (
        <NavigationTab
          onPress={navigation}
          navigateTo={NavigationRotes.PROFILE}
          iconName="person"
          tabText="Profile"
          active={activeTab === NavigationRotes.PROFILE ? true : false}
        />
      ) : (
        <NavigationTab
          onPress={navigation}
          navigateTo={NavigationRotes.AUTHENTICATION}
          iconName="log-in"
          tabText="Sign In"
          active={activeTab === NavigationRotes.AUTHENTICATION ? true : false}
        />
      )}

      <NavigationTab
        onPress={navigation}
        navigateTo={NavigationRotes.SHOP}
        iconName="basket"
        tabText="Shop"
        active={activeTab === NavigationRotes.SHOP ? true : false}
      />

      {loggedIn && signedIn && (
        <>
          <NavigationTab
            onPress={navigation}
            navigateTo={NavigationRotes.FAVORITE}
            iconName="heart"
            tabText="Favorite"
            active={activeTab === NavigationRotes.FAVORITE ? true : false}
          />
          <NavigationTab
            onPress={navigation}
            cartLength={cartItems.length > 0 ? cartItems.length : null}
            cartItems={cartItems}
            navigateTo={NavigationRotes.CART}
            iconName="cart"
            tabText="Cart"
            active={activeTab === NavigationRotes.CART ? true : false}
          />
        </>
      )}
    </FooterTab>
  );
});
