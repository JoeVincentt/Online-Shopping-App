import React from "react";

//Create context
export const UserProfileContext = React.createContext();
export const UserProfileContextConsumer = UserProfileContext.Consumer;

export class UserProfileContextProvider extends React.Component {
  state = {
    signedIn: false,
    setSignIn: (
      userId,
      username,
      fullName,
      email,
      address,
      phoneNumber,
      orders,
      favoriteProducts
    ) =>
      this.setState({
        signedIn: true,
        userId,
        username,
        fullName,
        email,
        address,
        phoneNumber,
        orders,
        favoriteProducts
      }),
    setSignOut: () =>
      this.setState({
        signedIn: false,
        userId: "",
        username: "",
        fullName: "",
        email: "",
        address: "",
        phoneNumber: "",
        orders: [],
        favoriteProducts: []
      }),
    userId: "",
    username: "",
    fullName: "",
    email: "",
    address: "",
    phoneNumber: "",
    orders: [],
    favoriteProducts: [],
    setUsername: username => this.setState({ username }),
    setFullName: fullName => this.setState({ fullName }),
    setEmail: email => this.setState({ email }),
    setAddress: address => this.setState({ address }),
    setPhoneNumber: phoneNumber => this.setState({ phoneNumber }),
    setOrders: orders => this.setState({ orders }),
    setFavoriteProducts: favoriteProducts =>
      this.setState({ favoriteProducts }),

    updateFavoriteItems: updatedFavoriteProducts =>
      this.setState({ favoriteProducts: updatedFavoriteProducts }),

    addItemToFavorite: async (productId, products) =>
      this.addItemToFavorite(productId, products),

    createOrder: async (cartItems, totalPrice) =>
      this.createOrder(cartItems, totalPrice)
  };

  createOrder = async (cartItems, totalPrice) => {
    let newOrder = {
      id: Math.random(),
      price: totalPrice,
      orderedDate: Date.now(),
      orderStatus: "Posted",
      customerEmail: this.state.email,
      customerAddress: this.state.address,
      products: []
    };

    await cartItems.forEach(prod => {
      let newProdInOrder = {
        id: prod.id,
        name: prod.name,
        quantity: prod.quantity,
        price: prod.price
      };
      newOrder.products.unshift(newProdInOrder);
    });

    let orders = this.state.orders;
    await orders.unshift(newOrder);
    this.setState({ orders });
  };

  addItemToFavorite = async (productId, products) => {
    //call to API to fetch product
    //get product and update favoriteProducts
    //go thru items and check if there items with the same id and if so to increment amount instead adding one mor product
    let favoriteProductAdded;

    await products.forEach(prod => {
      if (prod.id === productId) {
        favoriteProductAdded = prod;
      }
    });

    let alreadyInFavorites = false;
    this.state.favoriteProducts.forEach(prod => {
      if (prod.id === productId) {
        alreadyInFavorites = true;
      }
    });

    if (!alreadyInFavorites) {
      await this.state.favoriteProducts.unshift(favoriteProductAdded);
      this.setState({ favoriteProducts: this.state.favoriteProducts });
    } else {
      //already fav
      //send alert or smth for user
      return;
    }
  };

  componentDidMount() {
    console.log("userContextDidMount");
  }

  render() {
    return (
      <UserProfileContext.Provider value={this.state}>
        {this.props.children}
      </UserProfileContext.Provider>
    );
  }
}
