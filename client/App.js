import React from "react";
import { UserProfileContextProvider } from "./context/UserProfileContext";
import { CartContextProvider } from "./context/CartContext";
import Container from "./Container";
import { UIContextProvider } from "./context/UIContext";

export default class App extends React.Component {
  render() {
    return (
      <UserProfileContextProvider>
        <UIContextProvider>
          <Container />
        </UIContextProvider>
      </UserProfileContextProvider>
    );
  }
}
