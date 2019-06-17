import React from "react";

//Create context
export const CartContext = React.createContext();
export const CartContextConsumer = CartContext.Consumer;

export class CartContextProvider extends React.Component {
  state = {
    updateCartItems: updatedCartItems =>
      this.setState({ cartItems: updatedCartItems }),
    emptyCartAfterOrder: () => this.setState({ cartItems: [] }),
    addItemToCart: async (productId, products) =>
      this.addItemToCart(productId, products),

    cartItems: []
  };

  addItemToCart = async (productId, products) => {
    //call to API to fetch product
    //get product and update cartItems
    //go thru items and check if there items with the same id and if so to increment amount instead adding one mor product

    //get item and set init quantity
    let newItemInCart;
    await products.forEach(prod => {
      if (prod.id === productId) {
        newItemInCart = { ...prod, quantity: 1 };
      }
    });

    //check if prod already in the cart
    let alreadyInCart = false;
    this.state.cartItems.forEach(prod => {
      if (prod.id === productId) {
        alreadyInCart = true;
      }
    });

    //if NOT  => ADD : else => increase quantity
    if (!alreadyInCart) {
      const cartItems = this.state.cartItems;
      await cartItems.unshift(newItemInCart);
      this.setState({ cartItems: this.state.cartItems });
    } else {
      //already in the cart
      const cartItems = this.state.cartItems;
      await cartItems.map(prod => {
        if (prod.id === productId) {
          prod.quantity += 1;
        }
      });
      this.setState({ cartItems: this.state.cartItems });
    }
  };

  componentDidMount() {
    console.log("cartContextDidMount");
  }
  render() {
    return (
      <CartContext.Provider value={this.state}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
