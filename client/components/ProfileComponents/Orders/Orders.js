import React, { Component } from "react";
import { Container, Header, Content, Item, Input, Icon } from "native-base";
import { View, ScrollView } from "react-native";

import {
  TitleText,
  ContentBoldText,
  ContentItalicText,
  ContentLightText
} from "../../StyledText";
import colors from "../../../constants/Colors";
import SimpleButton from "../../Buttons/SimpleButton";
import Order from "./Order";
import OrderItems from "./OrderItems";

export default class Orders extends Component {
  state = {
    orders: [
      {
        id: 1,
        price: 30,
        orderedDate: "02/04/2021",
        orderStatus: "Completed",
        customerEmail: "customer@cust.com",
        customerAddress: "7a Glory St, New York, NY, 10001",
        products: [
          {
            id: 1,
            name: "simple prod",
            quantity: 1,
            price: 10
          },
          {
            id: 2,
            name: "dif prod",
            quantity: 2,
            price: 10
          },
          {
            id: 3,
            name: "other prod",
            quantity: 3,
            price: 10
          }
        ]
      },
      {
        id: 2,
        price: 30,
        orderedDate: "02/04/2021",
        orderStatus: "In Process",
        customerEmail: "new@new.com",
        customerAddress: "7a Glory St, New York, NY, 10001",
        products: [
          {
            id: 4,
            name: "super prod",
            quantity: 4,
            price: 10
          },
          {
            id: 2,
            name: "dif prod",
            quantity: 2,
            price: 10
          },
          {
            id: 4,
            name: "extra prod",
            quantity: 4,
            price: 10
          }
        ]
      }
    ]
  };

  cancelOrder = orderId => {
    console.log(orderId);
  };

  reorderOrder = orderId => {
    console.log(orderId);
  };

  reportOrder = orderId => {
    //open report modal
    console.log(orderId);
  };

  renderOrders = orders => {
    return orders.map((order, index) => {
      if (index < 20) {
        return (
          <View
            key={index}
            style={{ borderWidth: 2, borderColor: "#ccc", marginVertical: 20 }}
          >
            <Order
              key={index}
              orderId={order.id}
              orderPrice={order.price}
              orderStatus={order.orderStatus}
              customerEmail={order.customerEmail}
              orderedDate={order.orderedDate}
              customerAddress={order.customerAddress}
            />
            {order.products.map((product, index) => (
              <OrderItems
                key={index}
                productId={product.id}
                productName={product.name}
                productQuantity={product.quantity}
                productPrice={product.price}
              />
            ))}
            <Item style={{ justifyContent: "center" }}>
              {order.orderStatus === "Shipped" ||
              order.orderStatus === "Completed" ||
              order.orderStatus === "Canceled" ? (
                <SimpleButton
                  onPress={() => this.reportOrder(order.id)}
                  textStyle={{ fontSize: 20 }}
                  style={{ borderColor: colors.warning }}
                  text="Report"
                />
              ) : (
                <SimpleButton
                  onPress={() => this.cancelOrder(order.id)}
                  text="Cancel"
                  textStyle={{ fontSize: 20 }}
                  style={{ borderColor: colors.danger }}
                />
              )}

              <SimpleButton
                onPress={() => this.reorderOrder(order.id)}
                text="Reorder"
              />
            </Item>
          </View>
        );
      }
    });
  };

  render() {
    const { username, fullName, email, address, phoneNumber } = this.state;
    return (
      <>
        <View style={{ alignSelf: "flex-start", paddingTop: 20 }}>
          <TitleText>Orders</TitleText>
        </View>
        {/* Order */}
        <View>{this.renderOrders(this.state.orders)}</View>
      </>
    );
  }
}
