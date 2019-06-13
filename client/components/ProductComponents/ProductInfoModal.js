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

export default (ProductInfoModal = ({
  openProductInfoModal,
  setProductInfoModalOpen,
  productId
}) => {
  const { addItemToCart } = useContext(CartContext);
  const { addItemToFavorite } = useContext(UserProfileContext);
  const [productInfo, setProductInfo] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setProductInfo({
        id: "1",
        name:
          "All-New Echo Dot Kids Edition, an Echo designed for kids, Rainbow",
        price: 16,
        availability: "Out of Stock",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71TzCLRzYAL._SL1500_.jpg",
        likes: [],
        comments: []
      });
      setLoading(false);
    }, 3000);
    return () => {
      // Clean up the subscription
    };
  }, []);

  return (
    <Modal
      isVisible={openProductInfoModal}
      // onSwipeComplete={() => setProductInfoModalOpen(false)}
      // swipeDirection={["left", "right"]}
      // backdropColor="#B4B3DB"
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
              <TouchableOpacity onPress={() => console.log("product liked")}>
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
                onPress={() => console.log("open comments modal")}
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
              <TouchableOpacity onPress={() => addItemToFavorite(productId)}>
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
                    addItemToCart(productId);
                  }}
                  text="ADD TO CART"
                  textStyle={{ fontSize: 20, padding: 5 }}
                />
              </View>
            </View>
            {/* Button Panel */}
          </ScrollView>
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
