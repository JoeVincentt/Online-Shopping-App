import React from "react";

//Create context
export const ShopContext = React.createContext();
export const ShopContextConsumer = ShopContext.Consumer;

export class ShopContextProvider extends React.Component {
  state = {
    loading: true,
    loadingCategories: true,
    products: [
      {
        id: "1",
        name:
          "All-New Echo Dot Kids Edition, an Echo designed for kids, Rainbow",
        price: 16,
        availability: "Out of Stock",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71TzCLRzYAL._SL1500_.jpg",
        likes: [],
        comments: []
      },
      {
        id: "2",
        name:
          "Ring Alarm 5 Piece Kit – Smart Home Security System – Works with Alexa",
        price: 16,
        availability: "In Stock",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageUrl:
          "https://cdn.pixabay.com/photo/2013/04/07/21/30/croissant-101636_1280.jpg",
        likes: [],
        comments: []
      }
    ],
    activeCategory: 0,
    activeCategoryName: "CBD",
    categories: [],
    setActiveCategory: async index => {
      //Set Active Category
      await this.setState({ activeCategory: index });

      //Get  Active Category Name
      const { categories, activeCategory } = this.state;
      const activeCategoryName = await categories[activeCategory].categoryName;
      this.setState({ activeCategoryName });
      this.fetchProducts();
    }
  };

  fetchCategories = () => {
    this.setState({ loadingCategories: true });
    setTimeout(
      () =>
        this.setState({
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
          ],
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
            loading: false
          }),
        1000
      );
    }
    if (activeCategoryName === "CARTS") {
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
