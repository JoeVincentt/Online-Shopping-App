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
import colors from "../../constants/Colors";

export default (ShopItem = ({
  id,
  name,
  description,
  imageUrl,
  comments,
  likes
}) => {
  const { addItemToCart } = useContext(CartContext);
  const { addItemToFavorite } = useContext(UserProfileContext);

  const shortDescription = () => {
    let newShortDescription = description.substring(0, 200);
    if (newShortDescription.length > 0) {
      newShortDescription = newShortDescription + "...";
    }

    return newShortDescription;
  };
  return (
    <Card>
      <CardItem cardBody>
        <Image
          source={{
            uri: imageUrl
          }}
          style={{ height: 200, width: null, flex: 1 }}
        />
      </CardItem>
      <CardItem>
        <Left>
          <Body>
            <TouchableOpacity onPress={() => console.log("open product modal")}>
              <TitleText style={{ fontSize: 25 }}>{name}</TitleText>
              <ContentLightText style={{}}>
                {shortDescription()}
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
