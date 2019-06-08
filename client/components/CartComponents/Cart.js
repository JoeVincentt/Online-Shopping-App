import React, { Component } from "react";
import { Card } from "native-base";
import { View, Alert } from "react-native";
import SimpleButton from "../Buttons/SimpleButton";
import {
  TitleText,
  ContentBoldText,
  ContentLightText,
  MarijuanaText
} from "../StyledText";
import colors from "../../constants/Colors";
import CartItem from "./CartItem";

export default class Cart extends Component {
  state = {
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

  orderNow = () => {
    let totalPrice = 0;
    for (let index = 0; index < this.state.cartItems.length; index++) {
      totalPrice +=
        this.state.cartItems[index].productPrice *
        this.state.cartItems[index].productQuantity;
    }
    Alert.alert(
      `Total: ${totalPrice}`,
      "Please Confirm Your Order",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed")
        },
        {
          text: "Confirm",
          onPress: () => this.confirmOrder(),
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  };

  confirmOrder = () => {
    this.setState({ cartItems: [] });
  };

  openProductModal = () => {
    console.log("open product modal");
  };
  deleteItem = productId => {
    console.log(productId);
  };

  renderProducts = () => {
    return this.state.cartItems.map((product, index) => (
      <Card style={{ flex: 0 }} key={product.id}>
        <CartItem
          key={product.id}
          id={product.id}
          productImage={product.productImage}
          productName={product.productName}
          productDescription={product.productDescription}
          productQuantity={product.productQuantity}
          productPrice={product.productPrice}
          deleteItem={this.deleteItem}
          openProductModal={this.openProductModal}
        />
      </Card>
    ));
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.cartItems.length > 0 ? (
          <SimpleButton
            onPress={this.orderNow}
            text="Order Now"
            style={{ borderColor: colors.secondary }}
          />
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <MarijuanaText> Your Cart is Empty</MarijuanaText>
          </View>
        )}

        {this.renderProducts()}
      </View>
    );
  }
}
