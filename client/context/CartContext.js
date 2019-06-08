import React from "react";

//Create context
export const CartContext = React.createContext();
export const CartContextConsumer = CartContext.Consumer;

export class CartContextProvider extends React.Component {
  state = {
    updateItemsAfterDelete: updatedCartItems =>
      this.setState({ cartItems: updatedCartItems }),
    emptyCartAfterOrder: () => this.setState({ cartItems: [] }),

    cartItems: [
      {
        id: 1,
        productName:
          "Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa",
        productDescription: "this is an amazing product cool",
        productImage:
          "https://cdn.pixabay.com/photo/2018/06/12/22/29/bread-3471667_1280.jpg",
        productQuantity: 2,
        productPrice: 15
      },
      {
        id: 2,
        productName: "cool product",
        productDescription: "this is an amazing product cool",
        productImage:
          "https://cdn.pixabay.com/photo/2013/04/07/21/30/croissant-101636_1280.jpg",
        productQuantity: 1,
        productPrice: 23
      },
      {
        id: 3,
        productName: "crazy product",
        productDescription: "this is an amazing product cool",
        productImage:
          "https://cdn.pixabay.com/photo/2018/05/10/00/37/leaves-3386570_1280.jpg",
        productQuantity: 4,
        productPrice: 30
      }
    ]
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
