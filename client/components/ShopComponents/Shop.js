import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { Spinner } from "native-base";

import ShopCategories from "./ShopCategories";
import ShopItem from "./ShopItem";
import { MarijuanaText } from "../StyledText";

export default class Shop extends Component {
  state = {
    loading: true,
    products: [],
    activeCategory: 0,
    activeCategoryName: "CBD",
    categories: [
      {
        categoryName: "CBD",
        categorySubName: "OIL"
      },
      {
        categoryName: "CARTS",
        categorySubName: ""
      },
      {
        categoryName: "PENS",
        categorySubName: ""
      },
      {
        categoryName: "VAPORS",
        categorySubName: "OIL"
      },
      {
        categoryName: "ACCESSORIES",
        categorySubName: "ect."
      }
    ]
  };

  componentDidMount() {
    //to do: fetch categories from the server and set activeCategory name by index 0

    this.fetchProducts();
  }

  setActiveCategory = async index => {
    //Set Active Category
    await this.setState({ activeCategory: index });

    //Get  Active Category Name
    const { categories, activeCategory } = this.state;
    const activeCategoryName = await categories[activeCategory].categoryName;
    this.setState({ activeCategoryName });
    this.fetchProducts();
  };

  fetchProducts = () => {
    const { activeCategoryName } = this.state;
    this.setState({ loading: true });
    if (activeCategoryName === "CBD") {
      setTimeout(
        () =>
          this.setState({
            products: [
              {
                name: "oil"
              },
              {
                name: "something"
              }
            ],
            loading: false
          }),
        1000
      );
    }
    if (activeCategoryName === "CARTS") {
      setTimeout(
        () =>
          this.setState({
            products: [
              {
                name: "carts"
              },
              {
                name: "kek cart"
              }
            ],
            loading: false
          }),
        1000
      );
    }
  };
  renderProducts = () => {
    const { products } = this.state;
    if (products.length > 0) {
      return products.map((product, index) => (
        <ShopItem key={index} name={product.name} />
      ));
    }
  };
  renderCategoriesBar = () => {
    const { categories, activeCategory } = this.state;
    return categories.map((category, index) => (
      <ShopCategories
        key={index}
        index={index}
        activeCategory={activeCategory}
        setActiveCategory={this.setActiveCategory}
        categoryName={category.categoryName}
        categorySubName={category.categorySubName}
      />
    ));
  };

  render() {
    const { loading } = this.state;
    return (
      <ScrollView>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{ flexDirection: "row" }}
        >
          {this.renderCategoriesBar()}
        </ScrollView>
        <TouchableOpacity onPress={() => this.renderProducts()}>
          {!loading ? this.renderProducts() : <Spinner />}
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
