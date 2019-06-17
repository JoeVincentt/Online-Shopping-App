import React from "react";

import categoriesDB from "../db/categories";
import cbdCatDB from "../db/productByCategory/cbd";

//Create context
export const ShopContext = React.createContext();
export const ShopContextConsumer = ShopContext.Consumer;

export class ShopContextProvider extends React.Component {
  state = {
    loading: true,
    loadingCategories: true,
    products: [],
    activeCategory: 0,
    activeCategoryName: "CBD",
    categories: [],
    setActiveCategory: index => this.setActiveCategory(index),
    likeProduct: (prodId, userId) => this.likeProduct(prodId, userId)
  };

  likeProduct = async (prodId, userId) => {
    const { products } = this.state;

    await products.map(prod => {
      if (prod.id === prodId) {
        if (prod.likes.indexOf(userId) !== -1) {
          //tell user he already liked that product
          return;
        }
        prod.likes.push(userId);
      }
    });

    this.setState({ products });
  };

  setActiveCategory = async index => {
    //Set Active Category
    await this.setState({ activeCategory: index });
    //Get  Active Category Name
    const { categories, activeCategory } = this.state;
    const activeCategoryName = await categories[activeCategory].categoryName;
    this.setState({ activeCategoryName });
    this.fetchProducts();
  };

  fetchCategories = () => {
    this.setState({ loadingCategories: true });
    setTimeout(
      () =>
        this.setState({
          categories: categoriesDB,
          loadingCategories: false
        }),
      1000
    );
  };

  fetchProducts = () => {
    const { activeCategoryName } = this.state;
    this.setState({ loading: true });
    if (activeCategoryName === "CBD") {
      setTimeout(
        () =>
          this.setState({
            products: cbdCatDB,
            loading: false
          }),
        1000
      );
    }
    if (activeCategoryName === "GUMMIES") {
      setTimeout(
        () =>
          this.setState({
            loading: false
          }),
        1000
      );
    }
  };

  componentDidMount() {
    //to do: fetch categories from the server and set activeCategory name by index 0
    this.fetchCategories();
    this.fetchProducts();

    console.log("ShopContextDidMount");
  }
  render() {
    return (
      <ShopContext.Provider value={this.state}>
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}
