import React, { useContext } from "react";
import { Card } from "native-base";
import { View, Alert, ScrollView } from "react-native";
import * as SecureStore from "expo-secure-store";

import SimpleButton from "../Buttons/SimpleButton";
import { MarijuanaText } from "../StyledText";
import colors from "../../constants/Colors";
import CartItem from "./CartItem";
import { CartContext } from "../../context/CartContext";
import { UserProfileContext } from "../../context/UserProfileContext";

export default () => {
  const { cartItems, updateCartItems, emptyCartAfterOrder } = useContext(
    CartContext
  );
  const { username, fullName, address, phoneNumber } = useContext(
    UserProfileContext
  );

  const orderNow = async () => {
    let savedCard = await SecureStore.getItemAsync("PaymentMethod");
    if (savedCard !== null) {
      savedCard = await JSON.parse(savedCard);
    } else {
      return Alert.alert(
        "Error",
        "No payment method \n Please add one",
        [
          {
            text: "Cancel",
            onPress: () => {},
            style: "cancel"
          }
        ],
        { cancelable: false }
      );
    }
    let totalPrice = 0;
    for (let index = 0; index < cartItems.length; index++) {
      totalPrice += cartItems[index].price * cartItems[index].quantity;
    }

    Alert.alert(
      `Total: ${totalPrice} $ \n\n Please Confirm Your Order: \n\n Username: ${username} \n Full Name: ${fullName} \n Address: ${address} \n Phone Number: ${phoneNumber} \n\n Card Number: ${
        savedCard.cardNumber
      } \n Expiration: ${savedCard.expirationDate} \n CVV: ${savedCard.cvv}`,
      ``,
      [
        {
          text: "Cancel",
          onPress: () => {}
        },
        {
          text: "Confirm",
          onPress: () => confirmOrder(),
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  };

  const confirmOrder = () => {
    //update Orders
    emptyCartAfterOrder();
  };

  const deleteItem = productId => {
    const updatedCartItems = cartItems.filter(
      product => product.id !== productId
    );
    //make call to api to update cartItems
    updateCartItems(updatedCartItems);
  };

  renderProducts = () => {
    return cartItems.map((product, index) => (
      <Card style={{ flex: 0 }} key={product.id}>
        <CartItem
          key={product.id}
          id={product.id}
          productImage={product.imageUrl}
          productName={product.name}
          productDescription={product.description}
          productQuantity={product.quantity}
          productPrice={product.price}
          deleteItem={deleteItem}
        />
      </Card>
    ));
  };

  return (
    <View style={{ flex: 1 }}>
      {cartItems.length > 0 ? (
        <ScrollView>
          <SimpleButton
            onPress={orderNow}
            text="ORDER NOW"
            style={{
              borderColor: colors.secondary
            }}
            textStyle={{ fontSize: 30, padding: 5 }}
          />
          <View>{renderProducts()}</View>
          <SimpleButton
            onPress={orderNow}
            text="ORDER NOW"
            style={{
              borderColor: colors.danger
            }}
            textStyle={{ fontSize: 30, padding: 5 }}
          />
        </ScrollView>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <MarijuanaText> Empty </MarijuanaText>
        </View>
      )}
    </View>
  );
};
