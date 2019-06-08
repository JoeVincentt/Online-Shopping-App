import React, { useContext } from "react";
import { Card } from "native-base";
import { View, Alert } from "react-native";
import SimpleButton from "../Buttons/SimpleButton";
import { MarijuanaText } from "../StyledText";
import colors from "../../constants/Colors";
import FavoriteItem from "./FavoriteItem";
import { UserProfileContext } from "../../context/UserProfileContext";

export default () => {
  const { favoriteProducts, updateItemsAfterDelete } = useContext(
    UserProfileContext
  );

  const openProductModal = () => {
    console.log("open product modal");
  };

  const deleteItem = productId => {
    const updatedFavoriteProducts = favoriteProducts.filter(
      product => product.id !== productId
    );
    updateItemsAfterDelete(updatedFavoriteProducts);
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
          openProductModal={openProductModal}
        />
      </Card>
    ));
  };

  return (
    <View style={{ flex: 1 }}>
      {favoriteProducts.length <= 0 && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <MarijuanaText> Your Have no Favorites </MarijuanaText>
        </View>
      )}

      {renderProducts()}
    </View>
  );
};
