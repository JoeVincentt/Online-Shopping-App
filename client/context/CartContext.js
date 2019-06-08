import React from "react";

//Create context
export const CartContext = React.createContext();
export const CartContextConsumer = CartContext.Consumer;

export class CartContextProvider extends React.Component {
  state = {
    c: "c"
  };
  render() {
    return (
      <CartContext.Provider value={this.state}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
