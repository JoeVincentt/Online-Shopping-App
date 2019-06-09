import React from "react";
import { UserProfileContextProvider } from "./context/UserProfileContext";
import { CartContextProvider } from "./context/CartContext";
import Container from "./Container";

export default class App extends React.Component {
  render() {
    return (
      <UserProfileContextProvider>
        <Container />
      </UserProfileContextProvider>
    );
  }
}
