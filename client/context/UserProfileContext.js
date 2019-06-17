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
      this.addItemToFavorite(productId, products)
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
