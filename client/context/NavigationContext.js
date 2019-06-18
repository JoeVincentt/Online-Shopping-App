import React from "react";
import { Asset, Font, Icon } from "expo";

import NavigationRotes from "../navigation/NavigationRoutes";
import AuthScreen from "../screens/AuthScreen";
import CartScreen from "../screens/CartScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ShopScreen from "../screens/ShopScreen";

//Create context
export const NavigationContext = React.createContext();
export const NavigationContextConsumer = NavigationContext.Consumer;

export class NavigationContextProvider extends React.Component {
  state = {
    isLoadingComplete: false,
    activeTab: NavigationRotes.SHOP,
    loggedIn: false,
    loading: true,
    logIn: () =>
      this.setState({ loggedIn: true, activeTab: NavigationRotes.SHOP }),
    logOut: () =>
      this.setState({ loggedIn: false, activeTab: NavigationRotes.SHOP }),
    setLoadingFalse: () => this.setState({ loading: false }),
    navigation: tabToNavigate => this.setState({ activeTab: tabToNavigate }),
    _loadResourcesAsync: () => this._loadResourcesAsync(),
    _handleFinishLoading: () => this._handleFinishLoading(),
    _handleLoadingError: error => this._handleLoadingError(error),
    renderContent: () => this.renderContent()
  };

  renderContent = () => {
    const { activeTab, logIn, logOut } = this.state;
    if (activeTab === NavigationRotes.AUTHENTICATION) {
      return <AuthScreen logIn={logIn} />;
    }
    if (activeTab === NavigationRotes.PROFILE) {
      return <ProfileScreen logOut={logOut} />;
    }
    if (activeTab === NavigationRotes.SHOP) {
      return <ShopScreen />;
    }
    if (activeTab === NavigationRotes.FAVORITE) {
      return <FavoriteScreen />;
    }
    if (activeTab === NavigationRotes.CART) {
      return <CartScreen />;
    }
  };

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        // require("./assets/images/robot-dev.png"),
        // require("./assets/images/robot-prod.png")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        marijuana: require("../assets/fonts/Marijuana.ttf"),
        "sharp-black": require("../assets/fonts/dcc_sharp_distress_black_by_dccanim.otf"),
        "sans-bold": require("../assets/fonts/Open_Sans_Condensed/OpenSansCondensed-Bold.ttf"),
        "sans-light": require("../assets/fonts/Open_Sans_Condensed/OpenSansCondensed-Light.ttf"),
        "sans-italic": require("../assets/fonts/Open_Sans_Condensed/OpenSansCondensed-LightItalic.ttf")
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

  componentDidMount() {
    console.log("NavigationContextDidMount");
  }

  render() {
    return (
      <NavigationContext.Provider value={this.state}>
        {this.props.children}
      </NavigationContext.Provider>
    );
  }
}
