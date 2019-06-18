import React, { useContext, useEffect } from "react";
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
import { AppLoading } from "expo";
import { getStatusBarHeight } from "react-native-status-bar-height";

import { height, width } from "./constants/Layout";
import TabNavigation from "./navigation/TabNavigation";
import HeaderCustom from "./components/HeaderCustom";
import colors from "./constants/Colors";

import { UIContext } from "./context/UIContext";
import { NavigationContext } from "./context/NavigationContext";

const App = props => {
  //Context
  const {
    isLoadingComplete,
    loading,
    setLoadingFalse,
    _loadResourcesAsync,
    _handleFinishLoading,
    _handleLoadingError,
    renderContent
  } = useContext(NavigationContext);
  const { footerY, productsX } = useContext(UIContext);

  //Effect
  useEffect(() => {
    setLoadingFalse();
    return () => {
      // Clean up the subscription
    };
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onError={_handleLoadingError}
        onFinish={_handleFinishLoading}
      />
    );
  } else {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <Container>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}

          {/* Header Render */}

          {/* <Header style={styles.headerStyle}>
                    <HeaderCustom activeTab={activeTab} />
                  </Header> */}
          <Header
            style={{
              backgroundColor: colors.defaultBackgroundColor,
              height: height * 0.03,
              marginBottom: Platform.OS === "android" && 2
            }}
          />
          {/* Header Render */}

          {/* Content Render */}
          <Animated.View
            style={{
              flex: 1,
              transform: [{ translateX: productsX }],
              backgroundColor: colors.defaultBackgroundColor
            }}
          >
            {renderContent()}
          </Animated.View>
          {/* Content Render */}

          {/* Navigation Tab */}
          <Footer
            style={{
              backgroundColor: colors.defaultBackgroundColor
            }}
          >
            <Animated.View
              style={{
                flex: 1,
                transform: [{ translateY: footerY }]
              }}
            >
              <TabNavigation />
            </Animated.View>
          </Footer>
          {/* Navigation Tab */}
        </Container>
      );
    }
  }
};

export default App;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.defaultBackgroundColor,
    paddingTop: getStatusBarHeight(),
    height: 54 + getStatusBarHeight()
  }
});
