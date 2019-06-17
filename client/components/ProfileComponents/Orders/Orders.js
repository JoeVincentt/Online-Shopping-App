import React, { useContext } from "react";
import { Item } from "native-base";
import { View } from "react-native";

import { TitleText, MarijuanaText } from "../../StyledText";
import colors from "../../../constants/Colors";
import { height } from "../../../constants/Layout";
import SimpleButton from "../../Buttons/SimpleButton";
import Order from "./Order";
import OrderItems from "./OrderItems";
import { UserProfileContext } from "../../../context/UserProfileContext";

export default () => {
  const { orders } = useContext(UserProfileContext);

  const cancelOrder = orderId => {
    console.log(orderId);
  };

  const reorderOrder = orderId => {
    console.log(orderId);
  };

  const reportOrder = orderId => {
    //open report modal
    console.log(orderId);
  };

  const renderOrders = orders => {
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
                  onPress={() => reportOrder(order.id)}
                  textStyle={{ fontSize: height * 0.025 }}
                  style={{ borderColor: colors.warning }}
                  text="Report"
                />
              ) : (
                <SimpleButton
                  onPress={() => cancelOrder(order.id)}
                  text="Cancel"
                  textStyle={{ fontSize: height * 0.025 }}
                  style={{ borderColor: colors.danger }}
                />
              )}

              <SimpleButton
                onPress={() => reorderOrder(order.id)}
                textStyle={{ fontSize: height * 0.025 }}
                text="Reorder"
              />
            </Item>
          </View>
        );
      }
    });
  };

  if (orders.length > 0) {
    return (
      <>
        <View style={{ alignSelf: "flex-start", paddingTop: height * 0.025 }}>
          <TitleText>Orders</TitleText>
        </View>
        <View>{renderOrders(orders)}</View>
      </>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: height * 0.025
        }}
      >
        <MarijuanaText>Empty</MarijuanaText>
      </View>
    );
  }
};
