import React from "react";
import { Root } from "native-base";
import { UserProfileContextProvider } from "./context/UserProfileContext";
import { CartContextProvider } from "./context/CartContext";
import { UIContextProvider } from "./context/UIContext";
import { ShopContextProvider } from "./context/ShopContext";
import { NavigationContextProvider } from "./context/NavigationContext";
import Container from "./Container";

export default class App extends React.Component {
  render() {
    return (
      <NavigationContextProvider>
        <CartContextProvider>
          <ShopContextProvider>
            <UserProfileContextProvider>
              <UIContextProvider>
                <Root>
                  <Container />
                </Root>
              </UIContextProvider>
            </UserProfileContextProvider>
          </ShopContextProvider>
        </CartContextProvider>
      </NavigationContextProvider>
    );
  }
}
