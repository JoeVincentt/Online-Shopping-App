import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated
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
import { UIContext } from "./context/UIContext";

class App extends React.Component {
  static contextType = UIContext;
  state = {
    isLoadingComplete: false,
    activeTab: "shop",
    loggedIn: false,
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
    const { footerY, productsX } = this.context;
    const { activeTab, isLoadingComplete } = this.state;

    if (!isLoadingComplete && !this.props.skipLoadingScreen) {
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

                <Header style={styles.headerStyle}>
                  <HeaderCustom activeTab={activeTab} />
                </Header>

                <Animated.View
                  style={{ flex: 1, transform: [{ translateX: productsX }] }}
                >
                  {this.renderContent()}
                </Animated.View>

                <Footer
                  style={{
                    height: height * 0.1,
                    backgroundColor: colors.defaultBackgroundColor
                  }}
                >
                  <Animated.View
                    style={{
                      flex: 1,
                      transform: [{ translateY: footerY }]
                    }}
                  >
                    <TabNavigation
                      loggedIn={this.state.loggedIn}
                      activeTab={this.state.activeTab}
                      onPress={this.navigation}
                    />
                  </Animated.View>
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
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.defaultBackgroundColor,
    paddingTop: Platform.OS === "ios" ? 10 : getStatusBarHeight(),
    height:
      Platform.OS === "ios"
        ? 24 + getStatusBarHeight()
        : 54 + getStatusBarHeight()
  }
});
