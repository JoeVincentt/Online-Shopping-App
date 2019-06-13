import React, { useContext } from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Item
} from "native-base";

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
  const { addItemToFavorite } = useContext(UserProfileContext);

  return (
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

            <TouchableOpacity onPress={() => console.log("open product modal")}>
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
        <TouchableOpacity onPress={() => console.log("open comments modal")}>
          <View style={styles.buttonContainer}>
            <Icon name="people" style={{ margin: 10, color: colors.warning }} />
            <ContentBoldText>{comments.toString()}</ContentBoldText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addItemToFavorite(id)}>
          <View style={styles.buttonContainer}>
            <Icon name="heart" style={{ margin: 10, color: colors.danger }} />
          </View>
        </TouchableOpacity>

        <View>
          <SimpleButton
            onPress={() => {
              addItemToCart(id);
            }}
            text="Add to Cart"
            textStyle={{ fontSize: 20, padding: 5 }}
          />
        </View>
      </View>
    </Card>
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
