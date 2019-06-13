import React, { useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { CardItem, Thumbnail, Left, Body, Right, Item } from "native-base";
import SimpleButton from "../Buttons/SimpleButton";
import { TitleText, ContentBoldText, ContentLightText } from "../StyledText";
import colors from "../../constants/Colors";

export default props => {
  return (
    <>
      <CardItem>
        <Left>
          <Thumbnail
            square
            large
            source={{
              uri: props.productImage
            }}
          />
          <Body>
            <Item style={{ justifyContent: "space-between" }}>
              <View style={{ width: "80%" }}>
                <TouchableOpacity
                  onPress={() => props.openProductModal(props.id)}
                >
                  <TitleText style={{ fontSize: 25 }}>
                    {props.productName}
                  </TitleText>
                </TouchableOpacity>
              </View>
              <Item style={{ borderColor: "transparent" }}>
                <ContentBoldText style={{ fontSize: 20 }}>
                  {props.productQuantity}
                </ContentBoldText>
                <ContentLightText style={{ fontSize: 20 }}>
                  {" "}
                  x{" "}
                </ContentLightText>
                <ContentBoldText style={{ fontSize: 20 }}>
                  {props.productPrice}$
                </ContentBoldText>
              </Item>
            </Item>
            <ContentLightText>{props.productDescription}</ContentLightText>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Left>
          <SimpleButton
            onPress={() => props.deleteItem(props.id)}
            text="DELETE"
            style={{ borderColor: colors.danger }}
            textStyle={{ fontSize: 16, padding: 5 }}
          />
        </Left>
        <Right />
      </CardItem>
    </>
  );
};
