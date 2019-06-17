import React, { useContext, useEffect, useState } from "react";
import { Card, Spinner } from "native-base";
import { View, ScrollView } from "react-native";

import { MarijuanaText } from "../StyledText";
import FavoriteItem from "./FavoriteItem";
import { UserProfileContext } from "../../context/UserProfileContext";
import { CartContext } from "../../context/CartContext";

export default () => {
  const [loading, setLoading] = useState(true);

  const { favoriteProducts, updateFavoriteItems } = useContext(
    UserProfileContext
  );
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(false);
    return () => {
      // Clean up the subscription
    };
  }, []);

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
          productImage={product.imageUrl}
          productName={product.name}
          productDescription={product.description}
          productPrice={product.price}
          deleteItem={deleteItem}
          addItemToCart={addItemToCart}
        />
      </Card>
    ));
  };

  if (loading) {
    return <Spinner />;
  } else {
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
  }
};
