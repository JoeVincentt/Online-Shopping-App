import React, { useContext } from "react";
import { View, ScrollView, FlatList } from "react-native";
import { Spinner } from "native-base";

import ShopCategories from "./ShopCategories";
import ShopItem from "./ShopItem";
import { ShopContext } from "../../context/ShopContext";

export default (Shop = () => {
  const {
    loading,
    loadingCategories,
    products,
    categories,
    activeCategory
  } = useContext(ShopContext);

  const renderCategoriesBar = () => {
    return categories.map((category, index) => (
      <ShopCategories
        key={index}
        index={index}
        activeCategory={activeCategory}
        categoryName={category.categoryName}
        categorySubName={category.categorySubName}
      />
    ));
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      {/* Render Categories */}
      {!loadingCategories && (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{ flexDirection: "row" }}
        >
          {renderCategoriesBar()}
        </ScrollView>
      )}

      {/* Render Products */}
      {!loading ? (
        <FlatList
          onScrollBeginDrag={() => {}}
          onScrollEndDrag={() => {}}
          data={products}
          renderItem={({ item }) => (
            <ShopItem
              id={item.id}
              name={item.name}
              price={item.price}
              availability={item.availability}
              description={item.description}
              imageUrl={item.imageUrl}
              likes={item.likes.length}
              comments={item.comments.length}
            />
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <Spinner />
      )}
    </ScrollView>
  );
});
