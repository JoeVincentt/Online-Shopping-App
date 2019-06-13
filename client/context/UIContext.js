import React from "react";
import { Animated, Easing } from "react-native";

//Create context
export const UIContext = React.createContext();
export const UIContextConsumer = UIContext.Consumer;

export class UIContextProvider extends React.Component {
  state = {
    footerY: new Animated.Value(500)
  };

  componentDidMount() {
    console.log("UIContextDidMount");
    this.slideInFooter();
  }

  slideInFooter = () => {
    Animated.timing(this.state.footerY, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };
  render() {
    return (
      <UIContext.Provider value={this.state}>
        {this.props.children}
      </UIContext.Provider>
    );
  }
}
