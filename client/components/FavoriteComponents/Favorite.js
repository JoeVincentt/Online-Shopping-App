import React, { useContext } from "react";
import { Card } from "native-base";
import { View, ScrollView } from "react-native";

import { MarijuanaText } from "../StyledText";
import FavoriteItem from "./FavoriteItem";
import { UserProfileContext } from "../../context/UserProfileContext";
import { CartContext } from "../../context/CartContext";

export default () => {
  const { favoriteProducts, updateFavoriteItems } = useContext(
    UserProfileContext
  );
  const { cartItems, updateItems } = useContext(CartContext);

  const openProductModal = () => {
    console.log("open product modal");
  };

  const addItemToCart = async productId => {
    //call to API to fetch product
    //get product and update cartItems
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
    await cartItems.unshift(addedProduct);
    updateItems(cartItems);
  };

  const deleteItem = productId => {
    const updatedFavoriteProducts = favoriteProducts.filter(
      product => product.id !== productId
    );
    //make call to API to update favorite products
    updateFavoriteItems(updatedFavoriteProducts);
  };

  renderProducts = () => {
    return favoriteProducts.map((product, index) => (
      <Card style={{ flex: 0 }} key={product.id}>
        <FavoriteItem
          key={product.id}
          id={product.id}
          productImage={product.productImage}
          productName={product.productName}
          productDescription={product.productDescription}
          productQuantity={product.productQuantity}
          productPrice={product.productPrice}
          deleteItem={deleteItem}
          addItemToCart={addItemToCart}
          openProductModal={openProductModal}
        />
      </Card>
    ));
  };

  return (
    <View style={{ flex: 1 }}>
      {favoriteProducts.length <= 0 ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <MarijuanaText> Empty </MarijuanaText>
        </View>
      ) : (
        <ScrollView>{renderProducts()}</ScrollView>
      )}
    </View>
  );
};
