import React, { useContext, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { CardItem, Thumbnail, Left, Body, Right, Item } from "native-base";

import SimpleButton from "../Buttons/SimpleButton";
import { TitleText, ContentBoldText, ContentLightText } from "../StyledText";
import colors from "../../constants/Colors";
import { height } from "../../constants/Layout";
import { UserProfileContext } from "../../context/UserProfileContext";
import { CartContext } from "../../context/CartContext";
import { ShopContext } from "../../context/ShopContext";
import { truncateString } from "../../util/truncateString";

export default props => {
  const {} = useContext(UserProfileContext);
  const { products } = useContext(ShopContext);

  const [productInfoModalOpen, setProductInfoModalOpen] = useState(false);

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
                <TouchableOpacity onPress={() => setProductInfoModalOpen(true)}>
                  <TitleText style={{ fontSize: height * 0.03 }}>
                    {truncateString(props.productName, 75)}
                  </TitleText>
                </TouchableOpacity>
              </View>
            </Item>
            <ContentLightText>
              {truncateString(props.productDescription, 300)}
            </ContentLightText>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Left>
          <SimpleButton
            onPress={() => props.deleteItem(props.id)}
            text="DELETE"
            style={{ borderColor: colors.danger }}
            textStyle={{ fontSize: height * 0.02, padding: height * 0.005 }}
          />
        </Left>
        <Right>
          <SimpleButton
            onPress={() => {
              props.addItemToCart(props.id, products);
              props.deleteItem(props.id);
            }}
            text="ADD TO CART"
            style={{ borderColor: colors.secondary }}
            textStyle={{ fontSize: height * 0.02, padding: height * 0.005 }}
          />
        </Right>
      </CardItem>
      {/* Modal */}
      {productInfoModalOpen && (
        <ProductInfoModal
          openProductInfoModal={productInfoModalOpen}
          setProductInfoModalOpen={setProductInfoModalOpen}
          productId={props.id}
        />
      )}

      {/* Modal */}
    </>
  );
};
