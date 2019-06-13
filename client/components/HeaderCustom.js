import React, { Component } from "react";
import { Body } from "native-base";

import { MarijuanaText } from "../components/StyledText";
import colors from "../constants/Colors";

export default ({ activeTab }) => {
  let customHeader;
  if (activeTab === "auth") {
    customHeader = (
      <MarijuanaText style={{ fontSize: 70, color: colors.secondary }}>
        {activeTab}
      </MarijuanaText>
    );
  }
  if (activeTab === "profile") {
    customHeader = (
      <MarijuanaText style={{ fontSize: 70, color: colors.secondary }}>
        {activeTab}
      </MarijuanaText>
    );
  }
  if (activeTab === "shop") {
    customHeader = (
      <MarijuanaText style={{ fontSize: 70, color: colors.secondary }}>
        {activeTab}
      </MarijuanaText>
    );
  }
  if (activeTab === "favorite") {
    customHeader = (
      <MarijuanaText style={{ fontSize: 70, color: colors.secondary }}>
        {activeTab}
      </MarijuanaText>
    );
  }
  if (activeTab === "cart") {
    customHeader = (
      <MarijuanaText style={{ fontSize: 70, color: colors.secondary }}>
        {activeTab}
      </MarijuanaText>
    );
  }
  return <Body style={{ flex: 1, zIndex: 100 }}>{customHeader}</Body>;
};
