import React, { useContext, useState } from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, CardItem, Icon, Left, Body } from "native-base";

import ProductInfoModal from "../ProductComponents/ProductInfoModal";
import ProductCommentsModal from "../ProductComponents/ProductCommentsModal";
import SimpleButton from "../Buttons/SimpleButton";
import { CartContext } from "../../context/CartContext";
import { UserProfileContext } from "../../context/UserProfileContext";
import { TitleText, ContentLightText, ContentBoldText } from "../StyledText";
import { truncateString } from "../../util/truncateString";
import colors from "../../constants/Colors";

export default (ShopItem = ({
  id,
  name,
  price,
  availability,
  description,
  imageUrl,
  comments,
  likes
}) => {
  const { addItemToCart } = useContext(CartContext);
  const { addItemToFavorite, signedIn } = useContext(UserProfileContext);

  const [productInfoModalOpen, setProductInfoModalOpen] = useState(false);
  const [productCommentsModalOpen, setProductCommentsModalOpen] = useState(
    false
  );

  return (
    <>
      <Card>
        <CardItem cardBody>
          <Image
            source={{
              uri: imageUrl
            }}
            style={{ height: 250, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Body>
              <View style={styles.priceAndStockContainer}>
                <TitleText style={{ fontSize: 45, color: colors.secondary }}>
                  {price} $
                </TitleText>
                <ContentBoldText
                  style={{
                    fontSize: 15,
                    color:
                      availability === "In Stock"
                        ? colors.secondary
                        : colors.danger
                  }}
                >
                  {availability}
                </ContentBoldText>
              </View>

              <TouchableOpacity onPress={() => setProductInfoModalOpen(true)}>
                <TitleText style={{ fontSize: 25 }}>
                  {truncateString(name, 75)}
                </TitleText>
                <ContentLightText style={{}}>
                  {truncateString(description, 300)}
                </ContentLightText>
              </TouchableOpacity>
            </Body>
          </Left>
        </CardItem>

        <View style={styles.buttonPanel}>
          <TouchableOpacity onPress={() => console.log("product liked")}>
            <View style={styles.buttonContainer}>
              <Icon
                name="thumbs-up"
                style={{ margin: 10, color: colors.secondary }}
              />
              <ContentBoldText>{likes.toString()}</ContentBoldText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setProductCommentsModalOpen(true)}>
            <View style={styles.buttonContainer}>
              <Icon
                name="people"
                style={{ margin: 10, color: colors.warning }}
              />
              <ContentBoldText>{comments.toString()}</ContentBoldText>
            </View>
          </TouchableOpacity>
          {signedIn && (
            <>
              <TouchableOpacity onPress={() => addItemToFavorite(id)}>
                <View style={styles.buttonContainer}>
                  <Icon
                    name="heart"
                    style={{ margin: 10, color: colors.danger }}
                  />
                </View>
              </TouchableOpacity>

              <View>
                <SimpleButton
                  onPress={() => {
                    addItemToCart(id);
                  }}
                  text="ADD TO CART"
                  textStyle={{ fontSize: 20, padding: 5 }}
                />
              </View>
            </>
          )}
        </View>
      </Card>
      {/* Modal */}
      {productInfoModalOpen && (
        <ProductInfoModal
          openProductInfoModal={productInfoModalOpen}
          setProductInfoModalOpen={setProductInfoModalOpen}
          productId={id}
        />
      )}

      {productCommentsModalOpen && (
        <ProductCommentsModal
          openProductCommentsModal={productCommentsModalOpen}
          setProductCommentsModalOpen={setProductCommentsModalOpen}
          productId={id}
        />
      )}

      {/* Modal */}
    </>
  );
});

const styles = StyleSheet.create({
  priceAndStockContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttonPanel: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row"
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  }
});
