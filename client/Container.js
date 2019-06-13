import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { Container, Header, Content, Footer, Spinner } from "native-base";
import { AppLoading, Asset, Font, Icon } from "expo";
import { getStatusBarHeight } from "react-native-status-bar-height";

import AuthScreen from "./screens/AuthScreen";
import CartScreen from "./screens/CartScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShopScreen from "./screens/ShopScreen";
import { height, width } from "./constants/Layout";
import TabNavigation from "./navigation/TabNavigation";
import HeaderCustom from "./components/HeaderCustom";
import colors from "./constants/Colors";
import { CartContextProvider } from "./context/CartContext";
import { ShopContextProvider } from "./context/ShopContext";

class App extends React.Component {
  state = {
    isLoadingComplete: false,
    activeTab: "shop",
    loggedIn: true,
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  navigation = tabToNavigate => this.setState({ activeTab: tabToNavigate });

  logOut = () => {
    this.setState({ loggedIn: false });
    this.navigation("shop");
  };
  logIn = () => {
    this.setState({ loggedIn: true });
    this.navigation("shop");
  };

  renderContent = () => {
    const { activeTab } = this.state;
    if (activeTab === "auth") {
      return <AuthScreen logIn={this.logIn} />;
    }
    if (activeTab === "profile") {
      return <ProfileScreen logOut={this.logOut} />;
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
        <CartContextProvider>
          <ShopContextProvider>
            {this.state.loading ? (
              <Spinner />
            ) : (
              <Container>
                {Platform.OS === "ios" && <StatusBar barStyle="default" />}
                <Header
                  style={{
                    backgroundColor: colors.defaultBackgroundColor,
                    paddingTop: getStatusBarHeight(),
                    height: 54 + getStatusBarHeight()
                  }}
                >
                  <HeaderCustom />
                </Header>

                <View style={{ flex: 1 }}>{this.renderContent()}</View>

                <Footer
                  style={{
                    height:
                      Platform.OS === "ios" ? height * 0.1 : height * 0.15,
                    backgroundColor: colors.defaultBackgroundColor
                  }}
                >
                  <TabNavigation
                    loggedIn={this.state.loggedIn}
                    activeTab={this.state.activeTab}
                    onPress={this.navigation}
                  />
                </Footer>
              </Container>
            )}
          </ShopContextProvider>
        </CartContextProvider>
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

export default App;
const styles = StyleSheet.create({});
