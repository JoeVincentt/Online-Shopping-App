import React, { useContext } from "react";
import { Card } from "native-base";
import { View, Alert, ScrollView } from "react-native";

import SimpleButton from "../Buttons/SimpleButton";
import { MarijuanaText } from "../StyledText";
import colors from "../../constants/Colors";
import CartItem from "./CartItem";
import { CartContext } from "../../context/CartContext";

export default () => {
  const { cartItems, updateItems, emptyCartAfterOrder } = useContext(
    CartContext
  );

  const orderNow = () => {
    let totalPrice = 0;
    for (let index = 0; index < cartItems.length; index++) {
      totalPrice +=
        cartItems[index].productPrice * cartItems[index].productQuantity;
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
          onPress: () => confirmOrder(),
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  };

  const confirmOrder = () => {
    emptyCartAfterOrder();
  };

  const openProductModal = () => {
    console.log("open product modal");
  };

  const deleteItem = productId => {
    const updatedCartItems = cartItems.filter(
      product => product.id !== productId
    );
    //make call to api to update cartItems
    updateItems(updatedCartItems);
  };

  renderProducts = () => {
    return cartItems.map((product, index) => (
      <Card style={{ flex: 0 }} key={product.id}>
        <CartItem
          key={product.id}
          id={product.id}
          productImage={product.productImage}
          productName={product.productName}
          productDescription={product.productDescription}
          productQuantity={product.productQuantity}
          productPrice={product.productPrice}
          deleteItem={deleteItem}
          openProductModal={openProductModal}
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
            text="Order Now"
            style={{
              borderColor: colors.secondary
            }}
            textStyle={{ fontSize: 30, padding: 5 }}
          />
          <View>{renderProducts()}</View>
          <SimpleButton
            onPress={orderNow}
            text="Order Now"
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
          <MarijuanaText> Your Cart is Empty </MarijuanaText>
        </View>
      )}
    </View>
  );
};
