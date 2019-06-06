import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { Container, Header, Content, Footer } from "native-base";
import { AppLoading, Asset, Font, Icon } from "expo";

import AuthScreen from "./screens/AuthScreen";
import CartScreen from "./screens/CartScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShopScreen from "./screens/ShopScreen";
import { height, width } from "./constants/Layout";
import TabNavigation from "./navigation/TabNavigation";
import HeaderCustom from "./components/HeaderCustom";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    activeTab: "auth",
    cart: [
      {
        id: 1,
        product: "oil cbd",
        price: 20
      },
      {
        id: 2,
        product: "oil cbd",
        price: 10
      },
      {
        id: 3,
        product: "oil cbd",
        price: 15
      }
    ],
    loggedIn: false
  };

  // componentWillMount() {
  //   console.log("componentWillMount");
  // }
  // componentDidMount() {
  //   console.log("componentDidMount");
  // }
  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }

  navigation = tabToNavigate => this.setState({ activeTab: tabToNavigate });

  logIn = () => {
    this.setState({ loggedIn: true });
    this.navigation("shop");
  };

  renderContent = () => {
    const { activeTab } = this.state;
    if (activeTab === "auth") {
      return <AuthScreen />;
    }
    if (activeTab === "profile") {
      return <ProfileScreen />;
    }
    if (activeTab === "shop") {
      return <ShopScreen />;
    }
    if (activeTab === "favorite") {
      return <FavoriteScreen />;
    }
    if (activeTab === "cart") {
      return <CartScreen />;
    }
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Container>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <Header style={{ height: height * 0.1, backgroundColor: "#fafafa" }}>
            <HeaderCustom />
          </Header>
          <Content style={{ flex: 1 }}>{this.renderContent()}</Content>

          <Footer style={{ height: height * 0.1, backgroundColor: "#fafafa" }}>
            <TabNavigation
              loggedIn={this.state.loggedIn}
              cart={this.state.cart}
              activeTab={this.state.activeTab}
              onPress={this.navigation}
            />
          </Footer>
        </Container>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        // require("./assets/images/robot-dev.png"),
        // require("./assets/images/robot-prod.png")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        marijuana: require("./assets/fonts/Marijuana.ttf"),
        "sharp-black": require("./assets/fonts/dcc_sharp_distress_black_by_dccanim.otf"),
        "sans-bold": require("./assets/fonts/Open_Sans_Condensed/OpenSansCondensed-Bold.ttf"),
        "sans-light": require("./assets/fonts/Open_Sans_Condensed/OpenSansCondensed-Light.ttf"),
        "sans-italic": require("./assets/fonts/Open_Sans_Condensed/OpenSansCondensed-LightItalic.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({});
