import React from "react";

//Create context
export const UserProfileContext = React.createContext();
export const UserProfileContextConsumer = UserProfileContext.Consumer;

export class UserProfileContextProvider extends React.Component {
  state = {
    signedIn: false,
    setSignIn: (
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
        username: "",
        fullName: "",
        email: "",
        address: "",
        phoneNumber: "",
        orders: [],
        favoriteProducts: []
      }),
    username: "JohnyBoy",
    fullName: "Joe Vincent",
    email: "joe@joe.com",
    address: "7a Glory St, New York, NY, 10001",
    phoneNumber: "810-520-6363",
    // setUsername: username => this.setState({ username }),
    // setFullName: fullName => this.setState({ fullName }),
    // setEmail: email => this.setState({ email }),
    // setAddress: address => this.setState({ address }),
    // setPhoneNumber: phoneNumber => this.setState({ phoneNumber }),
    // setOrders: orders => this.setState({ orders }),
    // setFavoriteProducts: favoriteProducts =>
    //   this.setState({ favoriteProducts }),
    updateFavoriteItems: updatedFavoriteProducts =>
      this.setState({ favoriteProducts: updatedFavoriteProducts }),
    addItemToFavorite: async productId => {
      //call to API to fetch product
      //get product and update favoriteProducts
      //go thru items and check if there items with the same id and if so to increment amount instead adding one mor product
      const addedProduct = {
        id: 12,
        productName: "added product",
        productDescription: "added is an amazing product cool",
        productImage:
          "https://cdn.pixabay.com/photo/2013/04/07/21/30/croissant-101636_1280.jpg",
        productQuantity: 11,
        productPrice: 44
      };
      await this.state.favoriteProducts.unshift(addedProduct);
      this.setState({ favoriteProducts: this.state.favoriteProducts });
    },
    //make a call to API to update favorite items
    orders: [
      {
        id: 1,
        price: 30,
        orderedDate: "02/04/2021",
        orderStatus: "Completed",
        customerEmail: "customer@cust.com",
        customerAddress: "7a Glory St, New York, NY, 10001",
        products: [
          {
            id: 1,
            name: "simple prod",
            quantity: 1,
            price: 10
          },
          {
            id: 2,
            name: "dif prod",
            quantity: 2,
            price: 10
          },
          {
            id: 3,
            name: "other prod",
            quantity: 3,
            price: 10
          }
        ]
      },
      {
        id: 2,
        price: 30,
        orderedDate: "02/04/2021",
        orderStatus: "In Process",
        customerEmail: "new@new.com",
        customerAddress: "7a Glory St, New York, NY, 10001",
        products: [
          {
            id: 4,
            name: "super prod",
            quantity: 4,
            price: 10
          },
          {
            id: 2,
            name: "dif prod",
            quantity: 2,
            price: 10
          },
          {
            id: 4,
            name: "extra prod",
            quantity: 4,
            price: 10
          }
        ]
      }
    ],

    favoriteProducts: [
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
