import React, { Component } from "react";
import Cart from "../components/CartComponents/Cart";

export default class CartScreen extends Component {
  componentDidMount() {
    console.log("didmount");
  }
  componentWillUnmount() {
    console.log("didUnmount");
  }
  render() {
    return <Cart />;
  }
}
