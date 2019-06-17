import React, { useEffect, useState, useContext } from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Card, CardItem, Icon, Left, Body, Spinner } from "native-base";
import Modal from "react-native-modal";

import { height } from "../../constants/Layout";
import colors from "../../constants/Colors";
import { CartContext } from "../../context/CartContext";
import { UserProfileContext } from "../../context/UserProfileContext";
import { TitleText, ContentLightText, ContentBoldText } from "../StyledText";
import SimpleButton from "../Buttons/SimpleButton";
import ProductCommentsModal from "./ProductCommentsModal";

import { ShopContext } from "../../context/ShopContext";

export default (ProductInfoModal = ({
  openProductInfoModal,
  setProductInfoModalOpen,
  productId
}) => {
  //Context ref
  const { addItemToCart } = useContext(CartContext);
  const { addItemToFavorite, signedIn, userId } = useContext(
    UserProfileContext
  );
  const { products, likeProduct } = useContext(ShopContext);

  //State
  const [productCommentsModalOpen, setProductCommentsModalOpen] = useState(
    false
  );
  const [productInfo, setProductInfo] = useState({});
  const [loading, setLoading] = useState(true);

  //Effect
  useEffect(() => {
    // console.log(productId);

    setTimeout(() => {
      products.forEach(prod => {
        if (prod.id === productId) {
          setProductInfo(prod);
        }
      });

      setLoading(false);
    }, 500);
    return () => {
      // Clean up the subscription
    };
  }, []);

  return (
    <Modal
      isVisible={openProductInfoModal}
      useNativeDriver={true}
      backdropOpacity={0.8}
      animationIn="slideInLeft"
      animationOut="slideOutRight"
      animationInTiming={600}
      animationOutTiming={1000}
      backdropTransitionInTiming={2000}
      backdropTransitionOutTiming={2000}
    >
      {loading ? (
        <Spinner />
      ) : (
        <Card>
          {/* Image */}
          <ScrollView>
            {/* Closing button */}
            <View
              style={{
                alignItems: "flex-end",
                position: "relative"
              }}
            >
              <SimpleButton
                onPress={() => setProductInfoModalOpen(false)}
                text="CLOSE"
                textStyle={{ padding: 2, fontSize: 20 }}
                style={{
                  borderColor: colors.danger,
                  justifyContent: "flex-end"
                }}
              />
            </View>
            {/* ClosingButton */}

            <CardItem>
              <Image
                source={{
                  uri: productInfo.imageUrl
                }}
                style={{ height: 250, width: null, flex: 1 }}
              />
            </CardItem>

            {/* Image */}

            {/* Product Info */}

            <CardItem>
              <Left>
                <Body>
                  <View style={styles.priceAndStockContainer}>
                    <TitleText
                      style={{ fontSize: 45, color: colors.secondary }}
                    >
                      {productInfo.price} $
                    </TitleText>
                    <ContentBoldText
                      style={{
                        fontSize: 15,
                        color:
                          productInfo.availability === "In Stock"
                            ? colors.secondary
                            : colors.danger
                      }}
                    >
                      {productInfo.availability}
                    </ContentBoldText>
                  </View>

                  <TitleText style={{ fontSize: 25 }}>
                    {productInfo.name}
                  </TitleText>
                  <ContentLightText style={{}}>
                    {productInfo.description}
                  </ContentLightText>
                </Body>
              </Left>
            </CardItem>

            {/* Product Info */}

            {/* Button Panel */}
            <View style={styles.buttonPanel}>
              <TouchableOpacity
                onPress={() => signedIn && likeProduct(productId, userId)}
              >
                <View style={styles.buttonContainer}>
                  <Icon
                    name="thumbs-up"
                    style={{ margin: 10, color: colors.secondary }}
                  />
                  <ContentBoldText>
                    {productInfo.likes.length.toString()}
                  </ContentBoldText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setProductCommentsModalOpen(true)}
              >
                <View style={styles.buttonContainer}>
                  <Icon
                    name="people"
                    style={{ margin: 10, color: colors.warning }}
                  />
                  <ContentBoldText>
                    {productInfo.comments.length.toString()}
                  </ContentBoldText>
                </View>
              </TouchableOpacity>

              {signedIn && (
                <>
                  <TouchableOpacity
                    onPress={() => addItemToFavorite(productId, products)}
                  >
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
                        addItemToCart(productId, products);
                      }}
                      text="ADD TO CART"
                      textStyle={{ fontSize: 20, padding: 5 }}
                    />
                  </View>
                </>
              )}
            </View>
            {/* Button Panel */}
          </ScrollView>
          {productCommentsModalOpen && (
            <ProductCommentsModal
              openProductCommentsModal={productCommentsModalOpen}
              setProductCommentsModalOpen={setProductCommentsModalOpen}
              productId={productId}
            />
          )}
        </Card>
      )}
    </Modal>
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
