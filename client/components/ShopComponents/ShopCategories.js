import React, { useContext } from "react";
import { View, TouchableOpacity } from "react-native";

import { TitleText } from "../StyledText";
import colors from "../../constants/Colors";
import { ShopContext } from "../../context/ShopContext";

export default (Shop = ({
  categoryName,
  categorySubName,
  activeCategory,
  index
}) => {
  const { setActiveCategory } = useContext(ShopContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 0.3,
        borderLeftWidth: 0.3,
        borderRightWidth: 0.3,
        backgroundColor:
          activeCategory === index
            ? colors.secondary
            : colors.defaultBackgroundColor,
        borderColor: activeCategory === index ? colors.danger : colors.secondary
      }}
    >
      <TouchableOpacity onPress={() => setActiveCategory(index)}>
        <View
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TitleText style={{ fontSize: 25 }}>{categoryName}</TitleText>
          <TitleText style={{ fontSize: 20 }}>{categorySubName}</TitleText>
        </View>
      </TouchableOpacity>
    </View>
  );
});
